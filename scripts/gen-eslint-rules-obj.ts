import type { ESLint, Rule } from 'eslint'

import fs from 'node:fs/promises'

import { configs } from './gen-eslint-types.js'
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
	if (states) states = `${states} `

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

	await Promise.all(
		configs.map(async (config) => {
			const items = await config()
			for (const item of items) {
				if (!item.plugins) continue

				for (const [pName, plugin] of Object.entries(
					item.plugins as Record<string, ESLint.Plugin>,
				)) {
					if (pName !== pluginName) continue

					for (const [ruleName, rule] of Object.entries(plugin.rules || {})) {
						if (!rule.meta) continue

						const name = pName ? `${pName}/${ruleName}` : ruleName
						rules.push([name, rule])
					}
				}
			}
		}),
	)
	rules.sort(([a], [b]) => a.localeCompare(b))

	const resolvedLines = rules.map(([name, rule]) => generateRuleLines(pluginName, name, rule))

	const code = [`const rules = {`, ...resolvedLines, `}`].join('\n')

	await fs.writeFile(TEST_PATH(pluginName), code, 'utf8')
}

const [pluginName] = process.argv.slice(2)
await generateEslintRulesObj(pluginName)
