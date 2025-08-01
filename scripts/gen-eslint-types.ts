import type { JSONSchema4 } from '@typescript-eslint/utils/json-schema'
import type { Rule } from 'eslint'

import fs from 'node:fs/promises'
import { compile as compileSchema, normalizeIdentifier } from 'json-schema-to-typescript-lite'

import { defineConfig } from '../packages/config/src/eslint'
import { rootPath } from './root.js'

const TYPES_PATH = rootPath('packages/config/src/eslint/core/eslint.rules.d.ts')

async function generateRuleType(name: string, rule: Rule.RuleModule) {
	const meta = rule.meta ?? {}

	const jsdoc: string[] = []
	if (meta.docs?.description) {
		jsdoc.push(meta.docs.description)
	}
	if (meta.docs?.url) {
		jsdoc.push(`@see ${meta.docs.url}`)
	}
	if (meta.deprecated) {
		jsdoc.push('@deprecated')
	}

	if (!meta.schema || (Array.isArray(meta.schema) && !meta.schema.length)) {
		return { jsdoc, name, typeName: '[]', typeDeclarations: [] }
	}

	const typeName = normalizeIdentifier(name)
	const lines: string[] = []

	const origSchema = meta.schema as JSONSchema4 | JSONSchema4[]
	const schema: JSONSchema4 = Array.isArray(origSchema)
		? { type: 'array', items: origSchema, definitions: origSchema[0]?.definitions }
		: origSchema

	try {
		const compiled = await compileSchema(schema, typeName, {
			customName(schema, keyName) {
				const resolved = schema.title || schema.$id || keyName
				if (resolved === typeName) {
					return typeName
				}
				return resolved ? `_${normalizeIdentifier(`${typeName}_${resolved}`)}` : '' // undefined
			},
			strictIndexSignatures: true,
			unreachableDefinitions: false,
		})
		lines.push(compiled)
	} catch (error) {
		console.warn(`Failed to compile schema ${name} for rule ${name}. Falling back to unknown.`)
		console.error(error)
		lines.push(`export type ${typeName} = unknown`)
	}

	lines
		.join('\n')
		.split('\n')
		.map((line) => line.replace(/^export /, ''))
		.filter(Boolean)

	return {
		name,
		jsdoc,
		typeName,
		typeDeclarations: lines,
	}
}

async function generateEslintTypes() {
	const rules: [name: string, rule: Rule.RuleModule][] = []

	const configs = await defineConfig({ enableAllGroups: true })

	for (const config of configs) {
		const plugins = config.plugins
		if (!plugins) {
			continue
		}

		for (const pluginName in plugins) {
			const plugin = plugins[pluginName]
			const pluginRules = plugin.rules || {}

			for (const ruleName in pluginRules) {
				const rule = pluginRules[ruleName]

				if (!(rule as { meta: unknown }).meta) {
					continue
				}

				const name = pluginName ? `${pluginName}/${ruleName}` : ruleName
				rules.push([name, rule as Rule.RuleModule])
			}
		}
	}

	rules.sort(([a], [b]) => a.localeCompare(b))

	const resolvedRules = await Promise.all(rules.map(([name, rule]) => generateRuleType(name, rule)))

	const exports: string[] = [
		// `/* eslint-disable */`,
		'// Generated file.',
		'',
		`import type { Linter } from 'eslint'`,
		`import type { ESLintRules } from 'eslint/rules'`,
		'',
	]

	exports.push(
		`export interface DefaultRules extends Linter.RulesRecord, ESLintRules {`,
		...(resolvedRules
			.flatMap(({ jsdoc, name, typeName }) => [
				jsdoc.length
					? `  /**\n${jsdoc
							.map((v) => `   * ${v}`)
							.join('\n')
							.replaceAll(/\*\//g, '*\\/')}\n   */`
					: undefined,
				`  '${name}'?: Linter.RuleEntry<${typeName}>`,
			])
			.filter(Boolean) as string[]),
		`}`,
		'',
		`/* ----- Declarations ----- */`,
	)

	const typeDeclarations = resolvedRules
		.flatMap(({ typeDeclarations }) => typeDeclarations)
		.join('\n')

	const code = exports.join('\n') + typeDeclarations

	await fs.writeFile(TYPES_PATH, code, 'utf8')
}

await generateEslintTypes()
