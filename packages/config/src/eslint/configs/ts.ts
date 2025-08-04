import type { ConfigGroupFn, Linter, LinterConfig } from '../core/types'

import { GLOBS } from '../core/constants'
import { normalizeOptions } from '../core/utils'
import { tsPlugin } from '../plugins'

/** TypeScript parser */
export const tsParser = tsPlugin.parser

/**
 * TypeScript configuration
 *
 * @see https://typescript-eslint.io/rules/
 */
export const ts: ConfigGroupFn<'ts'> = async (opts, ctx) => {
	const {
		explicitFunctionReturnType = false,
		extraFiles = [],
		files = [GLOBS.TS, GLOBS.TSX, ...extraFiles].filter(Boolean),
		onFinalize = (v) => v,
		parserOptions,
		preset = 'default',
		stylisticPreset = false,
	} = opts

	Object.assign(opts, { files, preset, stylisticPreset })

	const getExplicitFunctionReturnTypeItem = (): LinterConfig | undefined => {
		const opts2 = normalizeOptions(explicitFunctionReturnType, false)
		const { enabled, files = [...(opts.files ?? [])].filter(Boolean), rules = {} } = opts2

		return enabled
			? {
					name: 'gicho/ts/explicit-function-return-type',
					files,
					rules: {
						'@typescript-eslint/explicit-function-return-type': [
							'error',
							{ allowExpressions: true, allowIIFEs: true },
						],

						...rules,
					},
				}
			: undefined
	}

	const getPresetRules = (): LinterConfig['rules'] => {
		if (preset === false) {
			return
		}

		if (preset === 'default') {
			return {
				// ref:
				// - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended-raw.ts
				// - https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/flat/strict.ts
				...tsPlugin.configs.eslintRecommended.rules,
				...tsPlugin.configs.strict.at(-1)?.rules,

				// 🎨 Enforce type definitions to consistently use either interface or type.
				'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
				// ✅ Disallow accidentally using the "empty object" type.
				'@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
				// ✅ Disallow the any type.
				'@typescript-eslint/no-explicit-any': 'off',
				// ✅ Disallow unused variables.
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
			}
		}

		// other rules (from the plugin)
		return tsPlugin.configs[presets[preset]].at(-1)?.rules
	}

	const items: LinterConfig[] = [
		{
			name: 'gicho/ts/setup',
			languageOptions: {
				parser: tsParser as Linter.Parser,
				sourceType: 'module',
				...parserOptions,
			},
			plugins: {
				'@typescript-eslint': tsPlugin.plugin,
			},
		},

		{
			name: 'gicho/ts/rules',
			files,
			rules: {
				...getPresetRules(),

				...(stylisticPreset ? tsPlugin.configs[presets[stylisticPreset]].at(-1)?.rules : undefined),

				// Custom rules
				...opts.rules,
			},
		},
	]

	const explicitFunctionReturnTypeItem = getExplicitFunctionReturnTypeItem()
	if (explicitFunctionReturnTypeItem) {
		items.push(explicitFunctionReturnTypeItem)
	}

	return onFinalize(items, ctx) ?? items
}

/* ----------------------------------------
 *   Internal
 * ------------------------------------- */

const presets = {
	default: 'default',
	'default-library': 'default-library',
	all: 'all',
	recommended: 'recommended',
	'recommended-type-checked': 'recommendedTypeChecked',
	'recommended-type-checked-only': 'recommendedTypeCheckedOnly',
	strict: 'strict',
	'strict-type-checked': 'strictTypeChecked',
	'strict-type-checked-only': 'strictTypeCheckedOnly',
	stylistic: 'stylistic',
	'stylistic-type-checked': 'stylisticTypeChecked',
	'stylistic-type-checked-only': 'stylisticTypeCheckedOnly',
} as const
