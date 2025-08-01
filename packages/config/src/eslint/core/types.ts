import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type {
	FlatConfig,
	ParserOptions as TSParserOptions,
} from '@typescript-eslint/utils/ts-eslint'
import type { Linter } from 'eslint'
import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'

import type { DefaultRules } from './eslint.rules'

/* ----------------------------------------
 *   General types
 * ------------------------------------- */

export type Awaitable<T> = T | PromiseLike<T>
type Prettify<T> = { [K in keyof T]: T[K] } & {}

/* ----------------------------------------
 *   ESLint types
 * ------------------------------------- */

export type { ESLintRules } from 'eslint/rules'

export type { DefaultRules, FlatConfig, Linter, TSParserOptions }
export type RulesRecord = Record<any, Linter.RuleEntry>

export interface LinterConfig<TRules extends RulesRecord = DefaultRules>
	extends Omit<Linter.Config<RulesRecord & TRules>, 'plugins'> {
	plugins?: FlatConfig.Plugins
}

/* ----------------------------------------
 *   Gicho config options
 * ------------------------------------- */

export interface ConfigOptions<TRules extends RulesRecord>
	extends BaseOptions<TRules>,
		RootOptions<TRules>,
		GroupOptions<TRules> {}

interface RootOptions<TRules extends RulesRecord> {
	/**
	 * Whether to enable all config groups (js, ts, import, etc.) by default.
	 * Individual groups can still be disabled as needed.
	 *
	 * @default false
	 */
	enableAllGroups?: boolean

	/**
	 * Extra custom configs to append to the final configuration.
	 */
	extraConfigs?: LinterConfig<TRules>[]
}

interface GroupOptions<TRules extends RulesRecord> {
	/* ---------- Core ---------- */

	/**
	 * Custom disables configuration
	 */
	disables?: ConfigGroupOptionsMap<TRules>['disables']

	/**
	 * Custom ignores configuration
	 *
	 * @see https://github.com/un-ts/eslint-config-flat-gitignore
	 */
	ignores?: Prettify<ConfigGroupOptionsMap<TRules>['ignores']>

	/**
	 * Configure rules for import/export statements.
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x
	 */
	import?: ConfigGroupOptionsMap<TRules>['import']

	/**
	 * Configures JavaScript configuration
	 *
	 * @see https://eslint.org/docs/latest/rules
	 */
	js?: ConfigGroupOptionsMap<TRules>['js']

	/* ---------- Out-of-the-box ---------- */

	/**
	 * Enables JSDoc-related rules.
	 * Pass `true` for default options or an object for custom options.
	 *
	 * @default true
	 * @see https://github.com/gajus/eslint-plugin-jsdoc
	 */
	jsdoc?: boolean | ConfigGroupOptionsMap<TRules>['jsdoc']

	/**
	 * Enables rules related to JSON, JSON5 and JSONC.
	 * Pass `true` for default options or an object for custom options.
	 *
	 * @default false
	 * @see https://github.com/ota-meshi/eslint-plugin-jsonc
	 */
	json?: boolean | ConfigGroupOptionsMap<TRules>['json']

	/**
	 * Enables `perfectionist` plugin rules.
	 * Pass `true` for default options or an object for custom options.
	 *
	 * @default true
	 * @see https://perfectionist.dev/rules
	 */
	perfectionist?: boolean | ConfigGroupOptionsMap<TRules>['perfectionist']

	/**
	 * Integrates Prettier with ESLint and manages rule conflicts.
	 * Pass `true` for default options or an object for custom options.
	 *
	 * @default false
	 * @see https://github.com/prettier/eslint-config-prettier
	 */
	prettier?: boolean | ConfigGroupOptionsMap<TRules>['prettier']

	/**
	 * Enables `regexp` plugin rules.
	 * Pass `true` for default options or an object for custom options.
	 *
	 * @default false
	 * @see https://ota-meshi.github.io/eslint-plugin-regexp/rules/
	 */
	regexp?: boolean | ConfigGroupOptionsMap<TRules>['regexp']

	/**
	 * Enables `stylistic` plugin rules.
	 * Pass `true` for default options or an object for custom options.
	 *
	 * Requires packages:
	 * - `@stylistic/eslint-plugin`
	 *
	 * @default true
	 * @see https://eslint.style/rules
	 */
	stylistic?: boolean | ConfigGroupOptionsMap<TRules>['stylistic']

	/**
	 * Enables TypeScript support.
	 * Pass `true` for default options or an object for custom options.
	 *
	 * @default true
	 * @see https://typescript-eslint.io/rules
	 */
	ts?: boolean | ConfigGroupOptionsMap<TRules>['ts']

	/* ---------- Optional ---------- */

	/**
	 * Enables React rules.
	 * Pass `true` for default options or an object for custom options.
	 *
	 * Requires packages:
	 * - `@eslint-react/eslint-plugin`
	 * - `eslint-plugin-react-hooks`
	 *
	 * @default false
	 * @see https://eslint-react.xyz/docs/rules/overview
	 */
	react?: boolean | ConfigGroupOptionsMap<TRules>['react']

	/**
	 * Enables Svelte rules.
	 * Pass `true` for default options or an object for custom options.
	 *
	 * Requires packages:
	 * - `eslint-plugin-svelte`
	 *
	 * @default false
	 * @see https://sveltejs.github.io/eslint-plugin-svelte/rules
	 */
	svelte?: boolean | ConfigGroupOptionsMap<TRules>['svelte']
}

export type ResolvedConfigOptions<TRules extends RulesRecord> = {
	[K: string]: Record<string, unknown> & { enabled: boolean }
} & ({
	[K in ConfigGroupName]: ConfigGroupOptionsMap<TRules>[K] & { enabled: boolean }
} & Required<RootOptions<TRules>>)

/* ----------------------------------------
 *   Config groups
 * ------------------------------------- */

export type ConfigGroupFn<K extends ConfigGroupName, TRules extends RulesRecord = DefaultRules> = (
	opts: ConfigGroupOptionsMap<TRules>[K],
	ctx: ConfigGroupFnContext<TRules>,
) => ConfigGroupFnReturn<TRules>

// for string keyed config groups
export type IConfigGroupFn<TRules extends RulesRecord = DefaultRules> = (
	opts: Record<string, any>,
	ctx: ConfigGroupFnContext<TRules>,
) => ConfigGroupFnReturn<TRules>

export type ConfigGroupFnReturn<TRules extends RulesRecord> = Awaitable<LinterConfig<TRules>[]>

export interface ConfigGroupFnContext<TRules extends RulesRecord> {
	externalFormatter?: boolean
	rootOptions: ResolvedConfigOptions<TRules>
}

export type ConfigGroupName = keyof ConfigGroupOptionsMap<DefaultRules>

export interface ConfigGroupOptionsMap<TRules extends RulesRecord> {
	disables: BaseOptions<TRules> & {
		/**
		 * Whether to apply disable rules for test files.
		 *
		 * @default false
		 */
		tests?: boolean
	}

	ignores: BaseOptions<TRules> & {
		/**
		 * Custom ignore path patterns
		 */
		customIgnores?: string[]
		/**
		 * Enable gitignore support.
		 *
		 * Passing an object to configure the options.
		 *
		 * @see https://github.com/antfu/eslint-config-flat-gitignore
		 * @default false
		 */
		gitignore?: boolean | FlatGitignoreOptions
	}

	import: BaseOptionsWithRules<TRules>

	js: BaseOptionsWithRules<TRules> & {
		/**
		 * Specifies which rule preset to use from the `@eslint/js` plugin.
		 *
		 * - `false` - No rules are applied.
		 * - `'default'` - Enables the default (opinionated) rules.
		 * - `'all'` - Enables all eslint core rules.
		 * - `'recommended'` - Enables the recommended rules of `@eslint/js` plugin.
		 *
		 * @default 'default'
		 * @see https://eslint.org/docs/latest/rules
		 */
		preset?: false | 'default' | 'all' | 'recommended'
	}

	jsdoc: BaseOptionsWithRules<TRules>

	json: BaseOptionsWithRules<TRules> &
		FilesOptions & {
			/**
			 * Whether to apply sorting rules for `package.json` attribute keys.
			 * @default false
			 */
			sortPackageJson?: boolean | JsonSortPackageJsonOptions
			/**
			 * Whether to apply sorting rules for `tsconfig.json`, `tsconfig.*.json` attribute keys.
			 * @default false
			 */
			sortTsconfigJson?: boolean | JsonSortTsconfigJsonOptions
		}

	node: BaseOptionsWithRules<TRules> & {
		/**
		 * Specifies which rule preset to use from the `eslint-plugin-n` plugin.
		 *
		 * @default 'default'
		 * @see https://github.com/eslint-community/eslint-plugin-n
		 */
		preset?: false | 'default' | 'all' | 'recommended'
	}

	perfectionist: BaseOptionsWithRules<TRules> & {
		/**
		 * Specifies which rule preset to use from the `perfectionist` plugin.
		 *
		 * - `false` - No rules are applied.
		 * - `'default'` - Enables the default (opinionated) rules.
		 * - `Others` - Use a named preset from the `perfectionist` plugin.
		 *
		 * @default 'default'
		 * @see https://perfectionist.dev/configs
		 */
		preset?:
			| false
			| 'default'
			| 'recommended-alphabetical'
			| 'recommended-natural'
			| 'recommended-line-length'
			| 'recommended-custom'
	}

	prettier: BaseOptionsWithRules<TRules> & {
		/**
		 * Whether to disable rules that conflict with Prettier formatting.
		 *
		 * @default false
		 * @see https://github.com/prettier/eslint-config-prettier
		 */
		disableConflictingRules?: boolean
	}

	react: BaseOptionsWithRules<TRules> & FilesOptions

	regexp: BaseOptionsWithRules<TRules> & {
		/**
		 * Specifies which rule preset to use from the `regexp` plugin.
		 *
		 * @default 'default'
		 * @see https://ota-meshi.github.io/eslint-plugin-regexp/user-guide/
		 */
		preset?: false | 'default' | 'all' | 'recommended'
	}

	stylistic: BaseOptionsWithRules<TRules> & Omit<StylisticCustomizeOptions, 'pluginName' | 'jsx'>

	svelte: BaseOptionsWithRules<TRules> &
		FilesOptions & {
			/**
			 * Svelte configuration
			 */
			svelteConfig?: Record<string, any>
		}

	ts: BaseOptionsWithRules<TRules> &
		FilesOptions & {
			/**
			 * Enables `explicit-function-return-type` rule to specified files.
			 * Pass `true` for default options or an object for custom options.
			 *
			 * @default false
			 * @see https://typescript-eslint.io/rules/explicit-function-return-type
			 *
			 * Default rule options:
			 * ```ts
			 * {
			 *   allowExpressions: true,
			 *   allowIIFEs: true,
			 * }
			 * ```
			 */
			explicitFunctionReturnType?: boolean | (FilesOptions & RulesOptions<TRules>)
			/**
			 * Additional glob patterns to apply to the config
			 */
			extraFiles?: string[]
			parserOptions?: TSParserOptions
			/**
			 * Specifies which rule preset to use from the `typescript-eslint` plugin.
			 *
			 * - `false` - No rules are applied.
			 * - `'default'` - Enables the default (opinionated) rules.
			 * - `'default-library'` - Enables the default (opinionated) rules for library files.
			 * - `Others` - Use a named preset from the `typescript-eslint` plugin.
			 *
			 * @default 'default'
			 * @see https://typescript-eslint.io/users/configs
			 */
			preset?:
				| false
				| 'default'
				| 'all'
				| 'recommended'
				| 'recommended-type-checked'
				| 'recommended-type-checked-only'
				| 'strict'
				| 'strict-type-checked'
				| 'strict-type-checked-only'

			/**
			 * Specifies which stylistic rule preset to use from the `typescript-eslint` plugin.
			 *
			 * @default false
			 * @see https://typescript-eslint.io/users/configs
			 */
			stylisticPreset?:
				| false
				| 'stylistic'
				| 'stylistic-type-checked'
				| 'stylistic-type-checked-only'
		}
}

/* ----------------------------------------
 *   Each group options
 * ------------------------------------- */

interface BaseOptions<TRules extends RulesRecord> {
	/**
	 * Hook to apply final adjustments to the config array before it's finalized
	 */
	onFinalize?(
		items: LinterConfig<TRules>[],
		ctx: ConfigGroupFnContext<TRules>,
	): ConfigGroupFnReturn<TRules>
}
type BaseOptionsWithRules<TRules extends RulesRecord> = BaseOptions<TRules> & RulesOptions<TRules>

export interface FilesOptions {
	/**
	 * Specifies glob patterns to apply to the config
	 */
	files?: string[]
}

export interface RulesOptions<TRules extends RulesRecord> {
	/**
	 * Specifies rules to add or override.
	 */
	rules?: LinterConfig<TRules>['rules']
}

/* ----------------------------------------
 *   Sub-options
 * ------------------------------------- */

export interface JsonSortPackageJsonOptions {
	/**
	 * Sorting order type.
	 *
	 * `asc` - Sort in ascending order.
	 * `top-asc` - Sort in ascending order, but keep the top keys first.
	 * @default 'top-asc'
	 */
	order?: 'asc' | 'top-asc'
	/**
	 * List of keys to keep at the top for readability.
	 */
	topKeys?: string[]
}

export interface JsonSortTsconfigJsonOptions {
	/**
	 * Sorting order type for the `compilerOptions` section.
	 *
	 * `asc` - Sort in ascending order.
	 * `top-asc` - Sort in ascending order, but keep the top keys first.
	 * @default 'top-asc'
	 */
	compilerOptionsOrder?: 'asc' | 'top-asc'
	/**
	 * List of `compilerOptions` keys to keep at the top for readability.
	 * @default ['target', 'module', 'moduleResolution', 'lib', 'rootDir', 'rootDirs', 'baseUrl']
	 */
	compilerOptionsTopKeys?: string[]
}
