import type { ConfigGroupFn, Linter, LinterConfig, TSParserOptions } from '../core/types'

import { GLOBS } from '../core/constants'
import { pluginTs } from '../core/plugins'

/**
 * TypeScript configuration
 *
 * @see https://typescript-eslint.io/rules/
 */
export const ts: ConfigGroupFn<'ts'> = async (opts, ctx) => {
	const {
		extraFiles = [],
		files = [GLOBS.TS, GLOBS.TSX, '**/*.d.ts', ...extraFiles].filter(Boolean) as string[],
		onFinalize = (v) => v,
		parserOptions,
		typeAware,
	} = opts

	const typeAwareFiles = typeAware?.files ?? [GLOBS.TS, GLOBS.TSX]
	const typeAwareIgnores = typeAware?.ignores ?? [`${GLOBS.ASTRO_TS}`, `${GLOBS.MD}`]

	const createParserItem = ({
		files,
		ignores,
		isTypeAware,
		parserOptions,
		tsconfigPath,
	}: {
		files: string[]
		ignores?: string[]
		isTypeAware: boolean
		parserOptions?: TSParserOptions
		tsconfigPath?: string
	}): LinterConfig => {
		return {
			name: `gicho/ts/${isTypeAware ? 'parser-type-aware' : 'parser'}`,
			files,
			...(ignores ? { ignores } : {}),
			languageOptions: {
				parser: pluginTs.parser as Linter.Parser,
				parserOptions: {
					sourceType: 'module',
					...(isTypeAware
						? {
								projectService: {
									allowDefaultProject: ['./*.js'],
									defaultProject: tsconfigPath,
								},
							}
						: {}),
					...parserOptions,
				} satisfies TSParserOptions,
			},
		}
	}

	const parserItems = [createParserItem({ files, isTypeAware: false, parserOptions })]
	if (typeAware) {
		parserItems.push(
			createParserItem({
				files: typeAwareFiles,
				isTypeAware: true,
				ignores: typeAwareIgnores,
				parserOptions: typeAware.parserOptions,
				tsconfigPath: typeAware.tsconfigPath,
			}),
		)
	}

	const items: LinterConfig[] = [
		{
			name: 'gicho/ts/setup',
			plugins: {
				'@typescript-eslint': pluginTs.plugin,
			},
		},

		...parserItems,

		{
			name: 'gicho/ts/rules',
			files,
			rules: {
				...pluginTs.configs.eslintRecommended.rules,
				...pluginTs.configs.strict.at(-1)?.rules,

				// Disallow @ts-<directive> comments or require descriptions after directives.
				'@typescript-eslint/ban-ts-comment': [
					'error',
					{ 'ts-expect-error': 'allow-with-description' },
				],
				// Enforce type definitions to consistently use either interface or type.
				'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
				// Enforce consistent usage of type imports.
				'@typescript-eslint/consistent-type-imports': [
					'error',
					{
						disallowTypeAnnotations: false,
						fixStyle: 'separate-type-imports',
						prefer: 'type-imports',
					},
				],
				// Enforce using a particular method signature syntax.
				// '@typescript-eslint/method-signature-style': ['error', 'property'],
				// Disallow using the delete operator on computed key expressions.
				'@typescript-eslint/no-dynamic-delete': 'off',
				// Disallow accidentally using the "empty object" type.
				'@typescript-eslint/no-empty-object-type': [
					'error',
					{ allowInterfaces: 'always', allowObjectTypes: 'always' },
				],
				// Disallow the any type.
				'@typescript-eslint/no-explicit-any': 'off',
				// Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
				'@typescript-eslint/no-import-type-side-effects': 'error',
				// Disallow void type outside of generic or return types.
				'@typescript-eslint/no-invalid-void-type': 'off',
				// Disallow non-null assertions using the ! postfix operator.
				'@typescript-eslint/no-non-null-assertion': 'off',
				// Disallow unused expressions.
				'@typescript-eslint/no-unused-expressions': [
					'error',
					{ allowShortCircuit: true, allowTaggedTemplates: true, allowTernary: true },
				],
				// Disallow unused variables.
				'@typescript-eslint/no-unused-vars': [
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
				// Disallow the use of variables before they are defined.
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': 'off',
				// Disallow certain triple slash directives in favor of ES6-style import declarations.
				'@typescript-eslint/triple-slash-reference': 'off',
				// Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
				'@typescript-eslint/unified-signatures': 'off',

				// Custom rules
				...opts.rules,
			},
		},
	]

	if (typeAware) {
		items.push({
			name: 'gicho/ts/rules-type-aware',
			files: typeAwareFiles,
			ignores: typeAwareIgnores,
			rules: {
				// Disallow awaiting a value that is not a Thenable.
				'@typescript-eslint/await-thenable': 'error',
				// Enforce dot notation whenever possible.
				'dot-notation': 'off',
				'@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
				// Require Promise-like statements to be handled appropriately.
				'@typescript-eslint/no-floating-promises': 'error',
				// Disallow iterating over an array with a for-in loop.
				'@typescript-eslint/no-for-in-array': 'error',
				// Disallow the use of eval()-like functions.
				'no-implied-eval': 'off',
				'@typescript-eslint/no-implied-eval': 'error',
				// Disallow Promises in places not designed to handle them.
				'@typescript-eslint/no-misused-promises': 'error',
				// Disallow type assertions that do not change the type of an expression.
				'@typescript-eslint/no-unnecessary-type-assertion': 'error',
				// Disallow calling a function with a value with type any.
				'@typescript-eslint/no-unsafe-argument': 'error',
				// Disallow assigning a value with type any to variables and properties.
				'@typescript-eslint/no-unsafe-assignment': 'error',
				// Disallow calling a value with type any.
				'@typescript-eslint/no-unsafe-call': 'error',
				// Disallow member access on a value with type any.
				'@typescript-eslint/no-unsafe-member-access': 'error',
				// Disallow returning a value with type any from a function.
				'@typescript-eslint/no-unsafe-return': 'error',
				// Disallow throwing non-Error values as exceptions.
				'no-throw-literal': 'off',
				'@typescript-eslint/only-throw-error': 'error',
				// Require any function or method that returns a Promise to be marked async.
				'@typescript-eslint/promise-function-async': 'error',
				// Require both operands of addition to be the same type and be bigint, number, or string.
				'@typescript-eslint/restrict-plus-operands': 'error',
				// Enforce template literal expressions to be of string type.
				'@typescript-eslint/restrict-template-expressions': 'error',
				// Enforce consistent awaiting of returned promises.
				'@typescript-eslint/return-await': ['error', 'in-try-catch'],
				// Require switch-case statements to be exhaustive.
				'@typescript-eslint/switch-exhaustiveness-check': 'error',
				// Enforce unbound methods are called with their expected scope.
				'@typescript-eslint/unbound-method': 'error',

				// Custom rules
				...typeAware.rules,
			},
		})
	}

	return onFinalize(items, ctx) ?? items
}
