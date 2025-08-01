import type { ConfigGroupFn, LinterConfig } from '../core/types'

import jsPlugin from '@eslint/js'
import globals from 'globals'

/**
 * JS configuration
 *
 * @see https://eslint.org/docs/latest/rules
 */
export const js: ConfigGroupFn<'js'> = (opts, ctx) => {
	const { onFinalize = (v) => v, preset = 'default' } = opts

	Object.assign(opts, { preset })

	const getPresetRules = (): LinterConfig['rules'] => {
		if (preset === false) {
			return
		}

		if (preset === 'default') {
			return {
				// ref: https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
				...jsPlugin.configs.recommended.rules,

				/* ----------------------------------------
				 *   gicho custom rules
				 * ------------------------------------- */

				// ✅ : Rule used in `recommended` config from `@eslint/js`

				// --- Possible Problems ---

				// Enforce `return` statements in callbacks of array methods
				'array-callback-return': 'error',
				// ✅ Disallow unused variables
				'no-unused-vars': [
					'warn',
					{
						// (_unusedParam1, usedParam1) => { fn1(usedParam1) }
						argsIgnorePattern: '^_',
						// const { foo, ...rest } = data; // => `foo` is ignored
						ignoreRestSiblings: true,
						// const ignoredUnused1 = true, unused2Ignored = 10;
						varsIgnorePattern: '[iI]gnored',
					},
				],

				// --- Suggestions ---

				// Enforce getter and setter pairs in objects and classes
				'accessor-pairs': 'error',
				// Enforce default clauses in switch statements to be last
				'default-case-last': 'error',
				// Enforce dot notation whenever possible
				'dot-notation': 'error',
				// Require the use of === and !==
				eqeqeq: ['error', 'always', { null: 'ignore' }],
				// Disallow the use of alert, confirm, and prompt
				'no-alert': 'warn',
				// Disallow Array constructors
				'no-array-constructor': 'error',
				// Disallow the use of console
				'no-console': ['warn', { allow: ['error', 'info', 'warn'] }],
				// ✅ Disallow empty block statements
				'no-empty': ['error', { allowEmptyCatch: true }],
				// Disallow the use of eval()
				'no-eval': 'error',
				// Disallow the use of eval()-like methods
				'no-implied-eval': 'error',
				// Disallow unnecessary nested blocks
				'no-lone-blocks': 'error',
				// Disallow new operators with the Function object
				'no-new-func': 'error',
				// Disallow javascript: URLs
				'no-script-url': 'warn',
				// Disallow comma operators
				'no-sequences': 'error',
				// Disallow ternary operators when simpler alternatives exist
				'no-unneeded-ternary': 'error',
				// Disallow unused expressions
				'no-unused-expressions': 'error',
				// Disallow unnecessary calls to .call() and .apply()
				'no-useless-call': 'error',
				// Disallow unnecessary computed property keys in objects and classes
				'no-useless-computed-key': 'error',
				// Disallow unnecessary concatenation of literals or template literals
				'no-useless-concat': 'error',
				// Disallow unnecessary constructors
				'no-useless-constructor': 'error',
				// Disallow renaming import, export, and destructured assignments to the same name
				'no-useless-rename': 'error',
				// Disallow redundant return statements
				'no-useless-return': 'error',
				// Require let or const instead of var
				'no-var': 'error',
				// Require or disallow method and property shorthand syntax for object literals
				'object-shorthand': 'error',
				// Require const declarations for variables that are never reassigned after declared
				'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
				// Disallow the use of Math.pow in favor of the ** operator
				'prefer-exponentiation-operator': 'error',
				// Disallow use of the RegExp constructor in favor of regular expression literals
				'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
				// Require rest parameters instead of arguments
				'prefer-rest-params': 'error',
				// Require spread operators instead of .apply()
				'prefer-spread': 'error',
				// Require template literals instead of string concatenation
				'prefer-template': 'error',
				// Require symbol descriptions
				'symbol-description': 'error',
				// Require or disallow “Yoda” conditions
				yoda: ['error', 'never'],
			}
		}

		// other rules (from the plugin)
		return jsPlugin.configs[preset]?.rules
	}

	const items: LinterConfig[] = [
		{
			name: 'gicho/js/setup',
			languageOptions: {
				ecmaVersion: 'latest',
				globals: {
					...globals.browser,
					...globals.node,
					...globals.es2024,

					// custom globals
					...opts.globals,
				},
				parserOptions: {
					ecmaFeatures: {
						jsx: true,
					},
					ecmaVersion: 'latest',
					sourceType: 'module',
				},
				sourceType: 'module',
			},
		},

		{
			name: 'gicho/js/rules',
			rules: {
				...getPresetRules(),

				// custom rules
				...opts.rules,
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
