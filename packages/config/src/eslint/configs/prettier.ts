import type { ConfigGroupFn, LinterConfig } from '../core/types'

import { unwrapDefault } from '../core/utils'

/**
 * Prettier configuration
 *
 * @see https://github.com/prettier/eslint-config-prettier
 * @see https://github.com/prettier/eslint-plugin-prettier
 */
export const prettier: ConfigGroupFn<'prettier'> = async (options, ctx) => {
	const { enablePlugin = false, onFinalize = (v) => v } = options

	const items: LinterConfig[] = []

	const prettierConfig = await unwrapDefault(import('eslint-config-prettier'))
	const prettierPluginRecommended = await unwrapDefault(
		import('eslint-plugin-prettier/recommended'),
	)

	const item: LinterConfig = { name: 'gicho/prettier/rules' }

	if (enablePlugin) {
		item.plugins = { ...prettierPluginRecommended.plugins }
		item.rules = {
			...prettierPluginRecommended.rules,
			// custom rules
			...options.rules,
		}
	} else {
		item.rules = {
			...prettierConfig.rules,
			// custom rules
			...options.rules,
		}
	}
	items.push(item)

	return onFinalize(items, ctx) ?? items
}
