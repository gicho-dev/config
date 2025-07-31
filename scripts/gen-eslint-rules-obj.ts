import type { Rule } from 'eslint'

import fs from 'node:fs/promises'

import { defineConfig } from '../packages/config/src/eslint'
import { rootPath } from './root.js'

const TEST_PATH = (pluginName: string) => rootPath(`.local/rules.${pluginName}.ts`)

function generateRuleLines(pluginName: string, name: string, rule: Rule.RuleModule) {
	const meta = rule.meta ?? {}
	const desc = meta.docs?.description || ''
	const deprecated = meta.deprecated || false
	const fixable = meta.fixable || false
	const recommended = meta.docs?.recommended || ''

	const lines: string[] = []

	let states = [
		recommended ? '✅' : undefined,
		deprecated ? '⛔️' : undefined,
		fixable ? '🔧' : undefined,
	]
		.filter(Boolean)
		.join('')

	if (states) {
		states = `${states} `
	}

	let defaultValue = `'error'`
	switch (pluginName) {
		case 'jsdoc':
			defaultValue = `'warn'`
			break
	}

	lines.push(`  // ${states}${desc}`, `  '${name}': ${defaultValue},`)

	return lines.join('\n')
}

async function generateEslintRulesObj(pluginName: string) {
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

	const resolvedLines = rules.map(([name, rule]) => generateRuleLines(pluginName, name, rule))

	const code = [`const rules = {`, ...resolvedLines, `}`].join('\n')

	await fs.writeFile(TEST_PATH(pluginName), code, 'utf8')
}

const [pluginName] = process.argv.slice(2)
await generateEslintRulesObj(pluginName)
