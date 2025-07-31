import type { ConfigGroupFn, LinterConfig } from '../core/types'

import { GLOBS } from '../core'

/**
 * Disables configuration
 */
export const disables: ConfigGroupFn<'disables'> = async (opts, ctx) => {
	const { onFinalize = (v) => v } = opts

	const items: LinterConfig[] = [
		{
			name: 'gicho/disables/cjs',
			files: ['**/*.js', '**/*.cjs'],
			rules: {
				'@typescript-eslint/no-require-imports': 'off',
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
			name: 'gicho/disables/cli',
			files: [`**/cli/${GLOBS.SRC}`, `**/cli.${GLOBS.SRC_EXT}`],
			rules: {
				'no-console': 'off',
			},
		},
		{
			name: 'gicho/disables/scripts',
			files: [`**/scripts/${GLOBS.SRC}`],
			rules: {
				'no-console': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
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

		{
			name: 'gicho/disables/tests',
			files: [
				`**/*.{bench,fixture,spec,test}.${GLOBS.SRC_EXT}`,
				`**/{tests,__tests__}/**/*.${GLOBS.SRC_EXT}`,
			],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
			},
		},
		{
			name: 'gicho/disables/stories',
			files: [`**/*.stories.${GLOBS.SRC_EXT}`],
			rules: {
				'no-console': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
