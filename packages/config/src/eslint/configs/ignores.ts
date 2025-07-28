import type { ConfigGroupFn, LinterConfig } from '../core/types'

import configGitIgnore from 'eslint-config-flat-gitignore'

import { GLOBS } from '../core/constants'
import { normalizeOptions } from '../core/utils'

/**
 * Ignores configuration
 *
 * @see https://github.com/antfu/eslint-config-flat-gitignore
 */
export const ignores: ConfigGroupFn<'ignores'> = async (options = {}) => {
	const { customIgnores = [], gitignore, onFinalize = (v) => v } = options

	const items: LinterConfig[] = []

	const gitIgnoreOptions = normalizeOptions(gitignore, false)
	if (gitIgnoreOptions) {
		items.push({
			name: 'gicho/ignores/gitignore',
			ignores: configGitIgnore(gitIgnoreOptions).ignores,
		})
	}

	items.push({
		name: 'gicho/ignores/setup',
		ignores: [...GLOBS.EXCLUDE, ...customIgnores],
	})

	return onFinalize(items)
}
