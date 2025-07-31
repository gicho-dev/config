import type { ConfigGroupFn, LinterConfig } from '../core/types'

/**
 * Stylistic configuration
 *
 * @see https://eslint.style/rules
 */
export const stylistic: ConfigGroupFn<'stylistic'> = async (opts, ctx) => {
	const { externalFormatter } = ctx ?? {}

	const { onFinalize = (v) => v, rules: customRules, ...stylisticCustomizeOptions } = opts

	const stylisticPlugin = (await import('@stylistic/eslint-plugin')).default

	const items: LinterConfig[] = [
		{
			name: 'gicho/stylistic/rules',
			plugins: {
				'@stylistic': stylisticPlugin,
			},
			rules: {
				...(!externalFormatter
					? stylisticPlugin.configs.customize(stylisticCustomizeOptions).rules
					: undefined),

				// Enforce consistent spacing after the `//` or `/*` in a comment
				'@stylistic/spaced-comment': 'error',

				...customRules,
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
