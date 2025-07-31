import type { ConfigGroupFn, LinterConfig } from '../core/types'

import { pluginPerfectionist } from '../core/plugins'

/**
 * Perfectionist configuration
 *
 * @see https://perfectionist.dev/rules
 */
export const perfectionist: ConfigGroupFn<'perfectionist'> = async (opts, ctx) => {
	const { onFinalize = (v) => v, preset = 'default' } = opts

	const getPresetRules = (): LinterConfig['rules'] => {
		if (preset === false) {
			return
		}

		if (preset === 'default') {
			return {
				// Enforce sorted exports
				'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
				// Enforce sorted imports
				'perfectionist/sort-imports': [
					'error',
					{
						internalPattern: ['^@/', '^~'],
						groups: [
							'type-builtin',
							'type-external',
							{ newlinesBetween: 'always' },
							['type-internal', 'type-subpath'],
							{ newlinesBetween: 'always' },
							['type-parent', 'type-sibling', 'type-index'],
							{ newlinesBetween: 'always' },

							'builtin',
							'external',
							{ newlinesBetween: 'always' },
							['internal', 'subpath'],
							{ newlinesBetween: 'always' },
							['parent', 'sibling', 'index'],
							{ newlinesBetween: 'always' },

							'side-effect',
							'unknown',
						],
						newlinesBetween: 'never',
						order: 'asc',
						type: 'natural',
					},
				],
				// Enforce sorted named exports
				'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
				// Enforce sorted named imports
				'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
			}
		}

		// other rules (from the plugin)
		return pluginPerfectionist.configs[preset]?.rules
	}

	const items: LinterConfig[] = [
		{
			name: 'gicho/perfectionist/rules',
			plugins: {
				perfectionist: pluginPerfectionist,
			},
			rules: {
				...getPresetRules(),

				// Custom rules
				...opts.rules,
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
