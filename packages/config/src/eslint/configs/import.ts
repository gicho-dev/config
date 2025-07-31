import type { ConfigGroupFn, LinterConfig } from '../core/types'

import { pluginImport } from '../core/plugins'

/**
 * Import configuration
 *
 * @see https://github.com/un-ts/eslint-plugin-import-x
 */
export const importFn: ConfigGroupFn<'import'> = async (opts, ctx) => {
	const { onFinalize = (v) => v } = opts

	const items: LinterConfig[] = [
		{
			name: 'gicho/import/rules',
			plugins: {
				'import-x': pluginImport,
			},

			rules: {
				// Enforce or ban the use of inline type-only markers for named imports.
				'import-x/consistent-type-specifier-style': 'error',
				// Ensure a default export is present, given a default import.
				'import-x/default': 'error',
				// Forbid any invalid exports, i.e. re-export of the same name.
				'import-x/export': 'error',
				// Ensure all imports appear before other statements.
				'import-x/first': 'error',
				// Ensure named imports correspond to a named export in the remote file.
				'import-x/named': 'error',
				// Ensure imported namespaces contain dereferenced properties as they are dereferenced.
				'import-x/namespace': 'error',
				// Enforce a newline after import statements.
				'import-x/newline-after-import': ['error', { count: 1 }],
				// Forbid repeated import of the same module in multiple places.
				'import-x/no-duplicates': 'error',
				// Forbid the use of mutable exports with var or let.
				'import-x/no-mutable-exports': 'error',
				// Reports use of a default export as a locally named import.
				'import-x/no-named-default': 'error',
				// Forbid a module from importing itself.
				'import-x/no-self-import': 'error',

				// Custom rules
				...opts.rules,
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
