import type { ConfigGroupFn } from '../core/types'

import { GLOBS } from '../core/constants'
import { pluginTs } from '../core/plugins'

/**
 * Svelte configuration
 *
 * @see https://sveltejs.github.io/eslint-plugin-svelte/rules/
 */
export const svelte: ConfigGroupFn<'svelte'> = async (options = {}, context = {}) => {
	const { externalFormatter } = context
	const { typescript: enableTypescript, stylistic } = context.rootOptions ?? {}

	const {
		files = enableTypescript
			? [GLOBS.SVELTE, GLOBS.SVELTE_JS, GLOBS.SVELTE_TS]
			: [GLOBS.SVELTE, GLOBS.SVELTE_JS],
		onFinalize = (v) => v,
		svelteConfig,
	} = options

	const pluginSvelte = (await import('eslint-plugin-svelte')).default

	const recommendedRules = pluginSvelte.configs.recommended.at(-1)!.rules!
	const prettierRules = pluginSvelte.configs.prettier.at(-1)!.rules!

	return onFinalize([
		// ref: https://github.com/sveltejs/eslint-plugin-svelte/blob/main/packages/eslint-plugin-svelte/src/configs/flat/base.ts
		...pluginSvelte.configs.base,

		{
			name: 'gicho/svelte/setup',
			files,
			languageOptions: {
				parserOptions: enableTypescript
					? {
							extraFileExtensions: ['.svelte'],
							parser: pluginTs.parser,
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
				...options.rules,
			},
		},
	])
}
