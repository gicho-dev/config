import type { ConfigGroupFn } from '../core/types'

/**
 * Stylistic configuration
 *
 * @see https://eslint.style/rules
 */
export const stylistic: ConfigGroupFn<'stylistic'> = async (options = {}, context = {}) => {
	const { externalFormatter } = context ?? {}

	const { onFinalize = (v) => v, rules: customRules, ...stylisticCustomizeOptions } = options

	const pluginStylistic = (await import('@stylistic/eslint-plugin')).default

	return onFinalize([
		{
			name: 'gicho/stylistic/rules',
			plugins: {
				'@stylistic': pluginStylistic,
			},
			rules: {
				...(!externalFormatter
					? pluginStylistic.configs.customize(stylisticCustomizeOptions).rules
					: undefined),

				// Enforce consistent spacing after the `//` or `/*` in a comment
				'@stylistic/spaced-comment': 'error',

				...customRules,
			},
		},
	])
}
