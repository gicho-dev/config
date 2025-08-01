import type { ConfigGroupFn, LinterConfig } from '../core/types'

import { unwrapDefault } from '../core/utils'

/**
 * Regexp configuration
 *
 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/
 */
export const regexp: ConfigGroupFn<'regexp'> = async (opts, ctx) => {
	const { onFinalize = (v) => v, preset = 'default' } = opts

	const regexpPlugin = await unwrapDefault(import('eslint-plugin-regexp'))

	const getPresetRules = (): LinterConfig['rules'] => {
		if (preset === false) {
			return
		}

		if (preset === 'default') {
			return {
				...regexpPlugin.configs['flat/recommended'].rules,
			}
		}

		// other rules (from the plugin)
		return regexpPlugin.configs[`flat/${preset}`]?.rules
	}

	const items: LinterConfig[] = [
		{
			name: 'gicho/regexp/rules',
			plugins: {
				regexp: regexpPlugin,
			},
			rules: {
				...getPresetRules(),

				// Custom rules
				...opts.rules,
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
