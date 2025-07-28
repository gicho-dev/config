import type { ConfigGroupFn, LinterConfig } from '../core/types'

import { GLOBS } from '../core'

/**
 * Disables configuration
 *
 * @see https://github.com/prettier/eslint-config-prettier
 */
export const disables: ConfigGroupFn<'disables'> = async (options = {}) => {
	const { onFinalize = (v) => v, prettier } = options

	const items: LinterConfig[] = [
		{
			name: 'gicho/disables/scripts',
			files: [`**/scripts/${GLOBS.SRC}`],
			rules: {
				'no-console': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
			},
		},
		{
			name: 'gicho/disables/cli',
			files: [`**/cli/${GLOBS.SRC}`, `**/cli.${GLOBS.SRC_EXT}`],
			rules: {
				'no-console': 'off',
			},
		},
		{
			name: 'gicho/disables/dts',
			files: ['**/*.d.?([cm])ts'],
			rules: {
				'no-restricted-syntax': 'off',
				'import-x/no-duplicates': 'off',
			},
		},
		{
			name: 'gicho/disables/cjs',
			files: ['**/*.js', '**/*.cjs'],
			rules: {
				'@typescript-eslint/no-require-imports': 'off',
			},
		},
		{
			name: 'gicho/disables/config-files',
			files: [`**/*.config.${GLOBS.SRC_EXT}`, `**/*.config.*.${GLOBS.SRC_EXT}`],
			rules: {
				'no-console': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
			},
		},
	]

	if (prettier) {
		items.push({
			name: 'gicho/disables/prettier',
			rules: {
				...(await import('eslint-config-prettier')).rules,
			},
		})
	}

	return onFinalize(items)
}
