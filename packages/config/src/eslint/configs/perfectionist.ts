import type { ConfigGroupFn } from '../core/types'

import { pluginPerfectionist } from '../core/plugins'

/**
 * Perfectionist configuration
 *
 * @see https://perfectionist.dev/rules
 */
export const perfectionist: ConfigGroupFn<'perfectionist'> = async (options = {}) => {
	const { onFinalize = (v) => v } = options

	return onFinalize([
		{
			name: 'gicho/perfectionist/rules',
			plugins: {
				perfectionist: pluginPerfectionist,
			},
			rules: {
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

				// Custom rules
				...options.rules,
			},
		},
	])
}
