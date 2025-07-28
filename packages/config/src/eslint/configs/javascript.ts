import type { ConfigGroupFn } from '../core/types'

import globals from 'globals'

import { pluginJs } from '../core'

/**
 * JavaScript configuration
 *
 * @see https://eslint.org/docs/latest/rules
 */
export const javascript: ConfigGroupFn<'javascript'> = async (options = {}) => {
	const { onFinalize = (v) => v } = options

	return onFinalize([
		{
			name: 'gicho/javascript/setup',
			languageOptions: {
				ecmaVersion: 'latest',
				globals: {
					...globals.browser,
					...globals.node,
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
			linterOptions: {
				reportUnusedDisableDirectives: true,
			},
		},

		{
			name: 'gicho/javascript/rules',
			rules: {
        // ref: https://github.com/eslint/eslint/blob/main/packages/js/src/configs/eslint-recommended.js
        ...pluginJs.configs.recommended.rules,

				// ✅ : Rule used in `recommended` config from `@eslint/js`
				// ❌ : Unused (off) rule

				// --- Possible Problems ---

				// Enforce `return` statements in callbacks of array methods
				'array-callback-return': 'error',
				// ✅ Enforce calling super() in constructors
				'constructor-super': 'error',
				// ✅ Enforce for loop update clause moving the counter in the right direction
				'for-direction': 'error',
				// ✅ Enforce return statements in getters
				'getter-return': 'error',
				// ✅ Disallow using an async function as a Promise executor
				'no-async-promise-executor': 'error',
				// ❌ Disallow await inside of loops
				// 'no-await-in-loop': 'error',
				// ✅ Disallow reassigning class members
				'no-class-assign': 'error',
				// ✅ Disallow comparing against -0
				'no-compare-neg-zero': 'error',
				// ✅ Disallow assignment operators in conditional expressions
				'no-cond-assign': ['error', 'always'],
				// ✅ Disallow reassigning const variables
				'no-const-assign': 'error',
				// ✅ Disallow expressions where the operation doesn’t affect the value
				'no-constant-binary-expression': 'error',
				// ✅ Disallow constant expressions in conditions
				'no-constant-condition': ['error', { checkLoops: false }],
				// Disallow returning value from constructor
				'no-constructor-return': 'error',
				// ✅ Disallow control characters in regular expressions
				'no-control-regex': 'error',
				// ✅ Disallow the use of debugger
				'no-debugger': 'error',
				// ✅ Disallow duplicate arguments in function definitions
				'no-dupe-args': 'error',
				// ✅ Disallow duplicate class members
				'no-dupe-class-members': 'error',
				// ✅ Disallow duplicate conditions in if-else-if chains
				'no-dupe-else-if': 'error',
				// ✅ Disallow duplicate keys in object literals
				'no-dupe-keys': 'error',
				// ✅ Disallow duplicate case labels
				'no-duplicate-case': 'error',
				// ❌ Disallow duplicate module imports
				// 'no-duplicate-imports': 'error',
				// ✅ Disallow empty character classes in regular expressions
				'no-empty-character-class': 'error',
				// ✅ Disallow empty destructuring patterns
				'no-empty-pattern': 'error',
				// ✅ Disallow reassigning exceptions in catch clauses
				'no-ex-assign': 'error',
				// ✅ Disallow fallthrough of case statements
				'no-fallthrough': 'error',
				// ✅ Disallow reassigning function declarations
				'no-func-assign': 'error',
				// ✅ Disallow assigning to imported bindings
				'no-import-assign': 'error',
				// ❌ Disallow variable or function declarations in nested blocks
				// 'no-inner-declarations': 'error',
				// ✅ Disallow invalid regular expression strings in RegExp constructors
				'no-invalid-regexp': 'error',
				// ✅ Disallow irregular whitespace
				'no-irregular-whitespace': 'error',
				// ✅ Disallow literal numbers that lose precision
				'no-loss-of-precision': 'error',
				// ✅ Disallow characters which are made with multiple code points in character class syntax
				'no-misleading-character-class': 'error',
				// ✅ Disallow new operators with global non-constructor functions
				'no-new-native-nonconstructor': 'error',
				// ✅ Disallow calling global object properties as functions
				'no-obj-calls': 'error',
				// ❌ Disallow returning values from Promise executor functions
				// 'no-promise-executor-return': 'error',
				// ✅ Disallow calling some Object.prototype methods directly on objects
				'no-prototype-builtins': 'error',
				// ✅ Disallow assignments where both sides are exactly the same
				'no-self-assign': 'error',
				// Disallow comparisons where both sides are exactly the same
				'no-self-compare': 'error',
				// ✅ Disallow returning values from setters
				'no-setter-return': 'error',
				// ✅ Disallow sparse arrays
				'no-sparse-arrays': 'error',
				// ❌ Disallow template literal placeholder syntax in regular strings
				// 'no-template-curly-in-string': 'error',
				// ✅ Disallow this/super before calling super() in constructors
				'no-this-before-super': 'error',
				// ✅ Disallow the use of undeclared variables unless mentioned in /*global */ comments
				'no-undef': 'error',
				// ✅ Disallow confusing multiline expressions
				'no-unexpected-multiline': 'error',
				// Disallow unmodified loop conditions
				'no-unmodified-loop-condition': 'error',
				// ✅ Disallow unreachable code after return, throw, continue, and break statements
				'no-unreachable': 'error',
				// Disallow loops with a body that allows only one iteration
				'no-unreachable-loop': 'error',
				// ✅ Disallow control flow statements in finally blocks
				'no-unsafe-finally': 'error',
				// ✅ Disallow negating the left operand of relational operators
				'no-unsafe-negation': 'error',
				// ✅ Disallow use of optional chaining in contexts where the undefined value is not allowed
				'no-unsafe-optional-chaining': 'error',
				// ✅ Disallow unused private class members
				'no-unused-private-class-members': 'error',
				// ✅ Disallow unused variables
				'no-unused-vars': [
					'warn',
					{
						args: 'after-used',
						// (_unusedParam1, usedParam1) => { fn1(usedParam1) }
						argsIgnorePattern: '^_',
						caughtErrors: 'none',
						ignoreRestSiblings: true,
						vars: 'all',
						// const ignoredUnused1 = true, unused2Ignored = 10;
						varsIgnorePattern: '[iI]gnored',
					},
				],
				// Disallow the use of variables before they are defined
				'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
				// Disallow variable assignments when the value is not used
				'no-useless-assignment': 'error',
				// ✅ Disallow useless backreferences in regular expressions
				'no-useless-backreference': 'error',
				// ❌ Disallow assignments that can lead to race conditions due to usage of await or yield
				// 'require-atomic-updates': 'error',
				// ✅ Require calls to isNaN() when checking for NaN
				'use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }],
				// ✅ Enforce comparing typeof expressions against valid strings
				'valid-typeof': ['error', { requireStringLiterals: true }],

				// --- Suggestions ---

				// Enforce getter and setter pairs in objects and classes
				'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],
				// Enforce the use of variables within the scope they are defined
				'block-scoped-var': 'error',
				// Enforce default clauses in switch statements to be last
				'default-case-last': 'error',
				// Enforce dot notation whenever possible
				'dot-notation': ['error', { allowKeywords: true }],
				// Require the use of === and !==
				eqeqeq: ['error', 'smart'],
				// Require constructor names to begin with a capital letter
				'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
				// Disallow the use of alert, confirm, and prompt
				'no-alert': 'error',
				// Disallow Array constructors
				'no-array-constructor': 'error',
				// Disallow the use of arguments.caller or arguments.callee
				'no-caller': 'error',
				// ✅ Disallow lexical declarations in case clauses
				'no-case-declarations': 'error',
				// Disallow the use of console
				'no-console': ['error', { allow: ['warn', 'error'] }],
				// ✅ Disallow deleting variables
				'no-delete-var': 'error',
				// ✅ Disallow empty block statements
				'no-empty': ['error', { allowEmptyCatch: true }],
				// Disallow the use of eval()
				'no-eval': 'error',
				// Disallow extending native types
				'no-extend-native': 'error',
				// Disallow unnecessary calls to .bind()
				'no-extra-bind': 'error',
				// ✅ Disallow unnecessary boolean casts
				'no-extra-boolean-cast': 'error',
				// ✅ Disallow assignments to native objects or read-only global variables
				'no-global-assign': 'error',
				// Disallow the use of eval()-like methods
				'no-implied-eval': 'error',
				// Disallow the use of the __iterator__ property
				'no-iterator': 'error',
				// Disallow labeled statements
				'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
				// Disallow unnecessary nested blocks
				'no-lone-blocks': 'error',
				// Disallow multiline strings
				'no-multi-str': 'error',
				// Disallow new operators outside of assignments or comparisons
				'no-new': 'error',
				// Disallow new operators with the Function object
				'no-new-func': 'error',
				// Disallow new operators with the String, Number, and Boolean objects
				'no-new-wrappers': 'error',
				// ✅ Disallow &#92;8 (\8) and &#92;9 (\9) escape sequences in string literals
				'no-nonoctal-decimal-escape': 'error',
				// Disallow calls to the Object constructor without an argument
				'no-object-constructor': 'error',
				// ✅ Disallow octal literals
				'no-octal': 'error',
				// Disallow octal escape sequences in string literals
				'no-octal-escape': 'error',
				// Disallow the use of the __proto__ property
				'no-proto': 'error',
				// ✅ Disallow variable redeclaration
				'no-redeclare': ['error', { builtinGlobals: true }],
				// ✅ Disallow multiple spaces in regular expressions
				'no-regex-spaces': 'error',
				// Disallow specified global variables
				'no-restricted-globals': [
					'error',
					{ message: 'Use `globalThis` instead.', name: 'global' },
					{ message: 'Use `globalThis` instead.', name: 'self' },
				],
				// Disallow certain properties on certain objects
				'no-restricted-properties': [
					'error',
					{
						message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
						property: '__proto__',
					},
					{
						message: 'Use `Object.defineProperty` instead.',
						property: '__defineGetter__',
					},
					{
						message: 'Use `Object.defineProperty` instead.',
						property: '__defineSetter__',
					},
					{
						message: 'Use `Object.getOwnPropertyDescriptor` instead.',
						property: '__lookupGetter__',
					},
					{
						message: 'Use `Object.getOwnPropertyDescriptor` instead.',
						property: '__lookupSetter__',
					},
				],
				// Disallow javascript: URLs
				'no-script-url': 'warn',
				// Disallow comma operators
				'no-sequences': 'error',
				// ✅ Disallow identifiers from shadowing restricted names
				'no-shadow-restricted-names': 'error',
				// Disallow throwing literals as exceptions
				'no-throw-literal': 'error',
				// Disallow initializing variables to undefined
				'no-undef-init': 'error',
				// Disallow ternary operators when simpler alternatives exist
				'no-unneeded-ternary': 'error',
				// Disallow unused expressions
				'no-unused-expressions': [
					'error',
					{ allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true },
				],
				// ✅ Disallow unused labels
				'no-unused-labels': 'error',
				// Disallow unnecessary calls to .call() and .apply()
				'no-useless-call': 'error',
				// ✅ Disallow unnecessary catch clauses
				'no-useless-catch': 'error',
				// Disallow unnecessary computed property keys in objects and classes
				'no-useless-computed-key': 'error',
				// Disallow unnecessary concatenation of literals or template literals
				'no-useless-concat': 'error',
				// Disallow unnecessary constructors
				'no-useless-constructor': 'error',
				// ✅ Disallow unnecessary escape characters
				'no-useless-escape': 'error',
				// Disallow renaming import, export, and destructured assignments to the same name
				'no-useless-rename': 'error',
				// Disallow redundant return statements
				'no-useless-return': 'error',
				// Require let or const instead of var
				'no-var': 'error',
				// ✅ Disallow with statements
				'no-with': 'error',
				// Require or disallow method and property shorthand syntax for object literals
				'object-shorthand': ['error', 'always', { avoidQuotes: true, ignoreConstructors: false }],
				// Enforce variables to be declared either together or separately in functions
				'one-var': ['error', { initialized: 'never' }],
				// Require using arrow functions for callbacks
				'prefer-arrow-callback': ['error', { allowNamedFunctions: true, allowUnboundThis: true }],
				// Require const declarations for variables that are never reassigned after declared
				'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
				// Disallow the use of Math.pow in favor of the ** operator
				'prefer-exponentiation-operator': 'error',
				// Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
				'prefer-object-has-own': 'error',
				// Require using Error objects as Promise rejection reasons
				'prefer-promise-reject-errors': 'error',
				// Disallow use of the RegExp constructor in favor of regular expression literals
				'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
				// Require rest parameters instead of arguments
				'prefer-rest-params': 'error',
				// Require spread operators instead of .apply()
				'prefer-spread': 'error',
				// Require template literals instead of string concatenation
				'prefer-template': 'error',
				// ✅ Require generator functions to contain yield
				'require-yield': 'error',
				// Require symbol descriptions
				'symbol-description': 'error',
				// Require var declarations be placed at the top of their containing scope
				'vars-on-top': 'error',
				// Require or disallow “Yoda” conditions
				yoda: ['error', 'never'],

				// Require or disallow Unicode byte order mark (BOM)
				'unicode-bom': 'error',

				// Custom rules
				...options.rules,

				// --- Unused rules (for future reference - ASC order) ---

				// 'arrow-body-style': 'error',
				// 'camelcase': 'error',
				// 'capitalized-comments': 'error',
				// 'class-methods-use-this': 'error',
				// 'complexity': 'error',
				// 'consistent-return': 'error',
				// 'consistent-this': 'error',
				// 'curly': 'error',
				// 'default-case': 'error',
				// 'default-param-last': 'error',
				// 'func-name-matching': 'error',
				// 'func-names': 'error',
				// 'func-style': 'error',
				// 'grouped-accessor-pairs': 'error',
				// 'guard-for-in': 'error',
				// 'id-denylist': 'error',
				// 'id-length': 'error',
				// 'id-match': 'error',
				// 'init-declarations': 'error',
				// 'logical-assignment-operators': 'error',
				// 'max-classes-per-file': 'error',
				// 'max-depth': 'error',
				// 'max-lines': 'error',
				// 'max-lines-per-function': 'error',
				// 'max-nested-callbacks': 'error',
				// 'max-params': 'error',
				// 'max-statements': 'error',
				// 'no-bitwise': 'error',
				// 'no-continue': 'error',
				// 'no-div-regex': 'error',
				// 'no-empty-function': 'error',
				// 'no-empty-static-block': 'error',
				// 'no-eq-null': 'error',
				// 'no-extra-label': 'error',
				// 'no-implicit-coercion': 'error',
				// 'no-implicit-globals': 'error',
				// 'no-inline-comments': 'error',
				// 'no-invalid-this': 'error',
				// 'no-label-var': 'error',
				// 'no-lonely-if': 'error',
				// 'no-loop-func': 'error',
				// 'no-magic-number': 'error',
				// 'no-multi-assign': 'error',
				// 'no-negated-condition': 'error',
				// 'no-nested-ternary': 'error',
				// 'no-param-reassign': 'error',
				// 'no-plusplus': 'error',
				// 'no-restricted-exports': 'error',
				// 'no-restricted-imports': 'error',
				// 'no-restricted-syntax': 'error',
				// 'no-return-assign': 'error',
				// 'no-shadow': 'error',
				// 'no-ternary': 'error',
				// 'no-undefined': 'error',
				// 'no-underscore-dangle': 'error',
				// 'no-void': 'error',
				// 'no-warning-comments': 'error',
				// 'operator-assignment': 'error',
				// 'prefer-destructuring': 'error',
				// 'prefer-named-capture-group': 'error',
				// 'prefer-numeric-literals': 'error',
				// 'prefer-object-spread': 'error',
				// radix: 'error',
				// 'require-await': 'error',
				// 'require-unicode-regexp': 'error',
				// 'sort-imports': 'error',
				// 'sort-keys': 'error',
				// 'sort-vars': 'error',
				// strict: 'error',
			},
		},
	])
}
