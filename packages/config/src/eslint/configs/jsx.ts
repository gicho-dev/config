import type { ConfigGroupFn, LinterConfig } from '../core/types'

import { GLOBS } from '../core'
import { normalizeOptions, unwrapDefault } from '../core/utils'

/**
 * JSX configuration
 *
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
 */
export const jsx: ConfigGroupFn<'jsx'> = async (opts, ctx) => {
	const { a11y = false, onFinalize = (v) => v } = opts

	const getA11yConfig = async (): Promise<LinterConfig | undefined> => {
		const opts2 = normalizeOptions(a11y, false)
		const { enabled, preset = 'default' } = opts2

		if (!enabled) {
			return undefined
		}

		const jsxA11yPlugin = await unwrapDefault(import('eslint-plugin-jsx-a11y'))

		const getPresetRules = (): LinterConfig['rules'] => {
			if (preset === false) {
				return
			}

			if (preset === 'default') {
				return {
					...jsxA11yPlugin.flatConfigs.recommended.rules,
				}
			}

			// other rules (from the plugin)
			return jsxA11yPlugin.configs[preset]?.rules
		}

		return {
			plugins: {
				'jsx-a11y': jsxA11yPlugin,
			},
			rules: {
				...getPresetRules(),

				// Custom rules for a11y
				...opts2.rules,
			},
		}
	}

	const a11yConfig = await getA11yConfig()

	const items: LinterConfig[] = [
		{
			name: 'gicho/jsx/rules',
			files: [GLOBS.JSX, GLOBS.TSX],
			languageOptions: {
				parserOptions: {
					ecmaFeatures: {
						jsx: true,
					},
				},
			},
			plugins: {
				...a11yConfig?.plugins,
			},
			rules: {
				...a11yConfig?.rules,

				// Custom rules
				...opts.rules,
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
