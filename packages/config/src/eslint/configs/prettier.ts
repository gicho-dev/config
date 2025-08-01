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
		items.push({
			name: 'gicho/disables/prettier',
			rules: {
				...(await import('eslint-config-prettier')).rules,
			},
		})
	}

	return onFinalize(items, ctx) ?? items
}
