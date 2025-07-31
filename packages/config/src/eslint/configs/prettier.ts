import type { ConfigGroupFn, LinterConfig } from '../core/types'

/**
 * Prettier configuration
 *
 * @see https://github.com/prettier/eslint-config-prettier
 */
export const prettier: ConfigGroupFn<'prettier'> = async (options, ctx) => {
	const { disableConflictingRules = true, onFinalize = (v) => v } = options

	const items: LinterConfig[] = []

	if (disableConflictingRules) {
		const jsPreset = ctx.rootOptions.js?.preset

		items.push({
			name: 'gicho/disables/prettier',
			rules: {
				...(await import('eslint-config-prettier')).rules,

				...(jsPreset === 'default'
					? {
							// Enforce consistent brace style for all control statements
							curly: 'error',
						}
					: undefined),
			},
		})
	}

	return onFinalize(items, ctx) ?? items
}
