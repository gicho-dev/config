import type { ConfigGroupFn, LinterConfig } from '../core/types'

import { GLOBS } from '../core/constants'
import { tsParser } from './ts'

/**
 * Svelte configuration
 *
 * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/
 */
export const svelte: ConfigGroupFn<'svelte'> = async (opts, ctx) => {
	const { externalFormatter } = ctx
	const { ts, stylistic } = ctx.rootOptions ?? {}

	const {
		files = ts.enabled
			? [GLOBS.SVELTE, GLOBS.SVELTE_JS, GLOBS.SVELTE_TS]
			: [GLOBS.SVELTE, GLOBS.SVELTE_JS],
		onFinalize = (v) => v,
		svelteConfig,
	} = opts

	const sveltePlugin = (await import('eslint-plugin-svelte')).default

	const recommendedRules = sveltePlugin.configs.recommended.at(-1)?.rules
	const prettierRules = sveltePlugin.configs.prettier.at(-1)?.rules

	const items: LinterConfig[] = [
		// ref: https://github.com/sveltejs/eslint-plugin-svelte/blob/main/packages/eslint-plugin-svelte/src/configs/flat/base.ts
		...sveltePlugin.configs.base,

		{
			name: 'gicho/svelte/setup',
			files,
			languageOptions: {
				parserOptions: ts.enabled
					? {
							extraFileExtensions: ['.svelte'],
							parser: tsParser,
							projectService: true,
							svelteConfig,
						}
					: { svelteConfig },
			},
		},
		{
			name: 'gicho/svelte/rules',
			rules: {
				// ref: https://github.com/sveltejs/eslint-plugin-svelte/blob/main/packages/eslint-plugin-svelte/src/configs/flat/recommended.ts
				...recommendedRules,

				'import-x/no-mutable-exports': 'off',

				// ❌ Disallow DOM manipulating
				'svelte/no-dom-manipulating': 'off',

				...(stylistic
					? {
							// Derived store should use same variable names between values and callback
							'svelte/derived-has-same-inputs-outputs': 'error',
							// Require or disallow a line break before tag's closing brackets
							'svelte/html-closing-bracket-new-line': 'error',
							// Require or disallow a space before tag's closing brackets
							'svelte/html-closing-bracket-spacing': 'error',
							// Enforce quotes style of HTML attributes
							'svelte/html-quotes': 'error',
							// Enforce self-closing style
							'svelte/html-self-closing': 'error',
							// Enforce unified spacing in mustache
							'svelte/mustache-spacing': 'error',
							// Disallow spaces around equal signs in attribute
							'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
							// Disallow trailing whitespace at the end of lines
							'svelte/no-trailing-spaces': 'error',
							// Enforce use of shorthand syntax in attribute
							'svelte/shorthand-attribute': 'error',
							// Enforce use of shorthand syntax in directives
							'svelte/shorthand-directive': 'error',
							// Enforce consistent spacing after the <!-- and before the --> in a HTML comment
							'svelte/spaced-html-comment': 'error',
						}
					: undefined),

				// ref: https://github.com/sveltejs/eslint-plugin-svelte/blob/main/packages/eslint-plugin-svelte/src/configs/flat/prettier.ts
				...(externalFormatter ? prettierRules : undefined),

				// Custom rules
				...opts.rules,
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
