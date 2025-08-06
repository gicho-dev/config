import type { ConfigGroupFn, LinterConfig } from '../core/types'

import { GLOBS } from '../core'
import { findPackages, normalizeOptions, unwrapDefault } from '../core/utils'

/**
 * Test configuration
 *
 * @see https://github.com/vitest-dev/eslint-plugin-vitest
 */
export const test: ConfigGroupFn<'test'> = async (opts, ctx) => {
	const { files = [...GLOBS.TESTS], onFinalize = (v) => v, vitest } = opts

	const getVitestConfig = async (): Promise<LinterConfig | undefined> => {
		const detectedVitest = !!findPackages('vitest')

		const vitestOpts = normalizeOptions(vitest, ctx.enableAllGroups || detectedVitest)
		const { enabled, preset = 'default' } = vitestOpts

		if (!enabled) {
			return undefined
		}

		const vitestPlugin = await unwrapDefault(import('@vitest/eslint-plugin'))

		const getPresetRules = (): LinterConfig['rules'] => {
			if (preset === false) {
				return
			}

			if (preset === 'default') {
				return {
					'vitest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
					'vitest/consistent-vitest-vi': ['error', { fn: 'vi' }],
					'vitest/no-identical-title': 'error',
					'vitest/no-import-node-test': 'error',
					'vitest/prefer-hooks-in-order': 'error',
				}
			}

			// other rules (from the plugin)
			return vitestPlugin.configs[preset]?.rules
		}

		return {
			plugins: {
				vitest: vitestPlugin,
			},
			rules: {
				...getPresetRules(),

				// Custom rules for a11y
				...vitestOpts.rules,
			},
		}
	}

	const vitestConfig = await getVitestConfig()

	const items: LinterConfig[] = [
		{
			name: 'gicho/test/setup',
			plugins: {
				...vitestConfig?.plugins,
			},
		},

		{
			name: 'gicho/test/rules',
			files,
			rules: {
				...vitestConfig?.rules,

				'@typescript-eslint/explicit-function-return-type': 'off',

				// Custom rules
				...opts.rules,
			},
		},

		{
			name: 'gicho/test/rules-fixture',
			files: [...GLOBS.TESTS_FIXTURE],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
