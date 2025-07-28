import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'
import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'
import type { ESLintRules } from 'eslint/rules'
import type { ConfigWithExtends } from 'typescript-eslint'

import type { RuleOptions } from './types.rules'

export type { Linter }

export type Awaitable<T> = T | PromiseLike<T>

export interface Rules extends ESLintRules, RuleOptions {}

export interface LinterConfig extends Omit<Linter.Config<Linter.RulesRecord & Rules>, 'plugins'> {
	plugins?: Record<string, any>
}

export interface ConfigOptions extends BaseOptions, ConfigOptionsConfigs {}

export interface ConfigOptionsConfigs {
	/**
	 * Custom disables configuration
	 *
	 * @see https://github.com/prettier/eslint-config-prettier
	 * @default undefined
	 */
	disables?: ConfigGroupOptionsMap['disables']
	/**
	 * Custom ignores configuration
	 *
	 * @see https://github.com/un-ts/eslint-config-flat-gitignore
	 * @default undefined
	 */
	ignores?: ConfigGroupOptionsMap['ignores']
	/**
	 * Custom import configuration
	 *
	 * @see https://github.com/un-ts/eslint-plugin-import-x
	 * @default undefined
	 */
	import?: ConfigGroupOptionsMap['import']
	/**
	 * Custom JavaScript configuration
	 *
	 * @see https://eslint.org/docs/latest/rules
	 * @default undefined
	 */
	javascript?: ConfigGroupOptionsMap['javascript']
	/**
	 * Enable JSDoc rules
	 *
	 * @see https://github.com/gajus/eslint-plugin-jsdoc
	 * @default true
	 */
	jsdoc?: boolean | ConfigGroupOptionsMap['jsdoc']
	/**
	 * Enable JSON/JSON5/JSONC support
	 *
	 * @see https://github.com/ota-meshi/eslint-plugin-jsonc
	 * @default false
	 */
	json?: boolean | ConfigGroupOptionsMap['json']
	/**
	 * Enable Perfectionist rules
	 *
	 * @see https://perfectionist.dev/rules
	 * @default true
	 */
	perfectionist?: boolean | ConfigGroupOptionsMap['perfectionist']
	/**
	 * Enable React rules
	 *
	 * Requires packages:
	 * - `@eslint-react/eslint-plugin`
	 * - `eslint-plugin-react-hooks`
	 *
	 * @see https://eslint-react.xyz/docs/rules/overview
	 * @default false
	 */
	react?: boolean | ConfigGroupOptionsMap['react']
	/**
	 * Enable Stylistic rules
	 *
	 * Requires packages:
	 * - `@stylistic/eslint-plugin`
	 *
	 * @see https://eslint.style/rules
	 * @default true
	 */
	stylistic?: boolean | ConfigGroupOptionsMap['stylistic']
	/**
	 * Enable Svelte rules
	 *
	 * Requires packages:
	 * @see https://sveltejs.github.io/eslint-plugin-svelte/rules
	 * @default false
	 */
	svelte?: boolean | ConfigGroupOptionsMap['svelte']
	/**
	 * Enable TypeScript support
	 *
	 * @see https://typescript-eslint.io/rules
	 * @default true
	 */
	typescript?: boolean | ConfigGroupOptionsMap['typescript']
}

export type ConfigGroupFn<K extends ConfigGroupName> = (
	options?: ConfigGroupOptionsMap[K],
	context?: ConfigGroupFnContext,
) => ConfigGroupFnReturn

export interface ConfigGroupFnContext {
	enablePrettier?: boolean
	externalFormatter?: boolean
	rootOptions?: ConfigOptions
}

export type ConfigGroupFnReturn = Awaitable<LinterConfig[]>

export type ConfigGroupName = keyof ConfigGroupOptionsMap

export interface ConfigGroupOptionsMap {
	disables: DisablesOptions
	ignores: IgnoresOptions
	import: BaseOptionsWithRules
	javascript: BaseOptionsWithRules
	jsdoc: BaseOptionsWithRules
	json: JsonOptions
	perfectionist: BaseOptionsWithRules
	react: ReactOptions
	stylistic: StylisticOptions
	svelte: SvelteOptions
	typescript: TypeScriptOptions
}

export type FinalizeHookHandler = (configs: LinterConfig[]) => ConfigGroupFnReturn

export interface BaseOptions {
	/** Hook to apply final adjustments to the config array before it's finalized */
	onFinalize?: FinalizeHookHandler
}
export interface BaseOptionsWithRules extends BaseOptions, RulesOptions {}

export interface DisablesOptions extends BaseOptions {
	/**
	 * Whether to disable rules that conflict with Prettier
	 *
	 * @see https://github.com/prettier/eslint-config-prettier
	 * @default false
	 */
	prettier?: boolean
}

export interface FilesOptions {
	/** Additional glob patterns to apply to the config */
	files?: string[]
}

export interface IgnoresOptions extends BaseOptions {
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

export interface JsonOptions extends BaseOptionsWithRules, FilesOptions {
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

export interface ReactOptions extends BaseOptionsWithRules, FilesOptions {}

export interface RulesOptions {
	/** Rules to add or override */
	rules?: LinterConfig['rules']
}

export interface StylisticOptions
	extends BaseOptionsWithRules,
		Omit<StylisticCustomizeOptions, 'pluginName' | 'jsx'> {}

export interface SvelteOptions extends BaseOptionsWithRules, FilesOptions {
	/**
	 * Svelte configuration
	 */
	svelteConfig?: Record<string, any>
}

export interface TypeScriptOptions extends BaseOptionsWithRules, FilesOptions {
	parserOptions?: TSParserOptions
	typeAware?: TypeAwareOptions
}

export interface TypeAwareOptions extends FilesOptions, RulesOptions {
	ignores?: string[]
	parserOptions?: TSParserOptions
	tsconfigPath: string
}

type TSFlatConfig = Omit<ConfigWithExtends, 'extends'>
type TSLanguageOptions = Required<TSFlatConfig>['languageOptions']
export type TSParserOptions = Required<TSLanguageOptions>['parserOptions']
