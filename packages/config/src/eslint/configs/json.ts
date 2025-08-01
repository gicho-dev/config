import type {
	ConfigGroupFn,
	JsonSortPackageJsonOptions,
	JsonSortTsconfigJsonOptions,
	LinterConfig,
} from '../core/types'

import { GLOBS } from '../core/constants'
import { unwrapDefault } from '../core/utils'

/**
 * JSON configuration
 *
 * @see https://github.com/ota-meshi/eslint-plugin-jsonc
 */
export const json: ConfigGroupFn<'json'> = async (opts, ctx) => {
	const {
		files = [GLOBS.JSON, GLOBS.JSON5, GLOBS.JSONC],
		onFinalize = (v) => v,
		sortPackageJson,
		sortTsconfigJson,
	} = opts

	const jsoncPlugin = await unwrapDefault(import('eslint-plugin-jsonc'))

	const languageOptions = jsoncPlugin.configs['flat/base'][1].languageOptions

	const items: LinterConfig[] = [
		{
			name: 'gicho/json/setup',
			plugins: {
				jsonc: jsoncPlugin,
			},
		},
		{
			name: 'gicho/json/rules',
			files,
			languageOptions,
			rules: {
				// Custom rules
				...opts.rules,
			},
		},
	]

	if (sortPackageJson) {
		items.push(getSortPackageJsonItem(sortPackageJson === true ? {} : sortPackageJson))
	}

	if (sortTsconfigJson) {
		items.push(getSortTsconfigJsonItem(sortTsconfigJson === true ? {} : sortTsconfigJson))
	}

	return onFinalize(items, ctx) ?? items
}

/* ----------------------------------------
 *   Internal
 * ------------------------------------- */

function getSortPackageJsonItem(options: JsonSortPackageJsonOptions = {}): LinterConfig {
	const {
		order = 'top-asc',
		topKeys = [
			'name',
			'displayName',
			'version',
			'private',
			'packageManager',
			'description',
			'keywords',
			'license',
			'author',
			'contributors',
			'funding',
			'repository',
			'bugs',
			'homepage',

			'sideEffects',
			'type',

			'exports',
			'imports',
			'main',
			'module',
			'types',
			'typesVersions',
			'bin',
			'icon',
			'files',
			'jsdelivr',
			'unpkg',

			'engines',
			'activationEvents',
			'contributes',
			'scripts',

			'dependencies',
			'optionalDependencies',
			'devDependencies',
			'peerDependencies',
			'peerDependenciesMeta',
			'bundleDependencies',
			'bundledDependencies',
		],
	} = options

	return {
		name: 'gicho/json/sort-package-json',
		files: ['**/package.json'],
		rules: {
			'jsonc/sort-array-values': [
				'error',
				{
					order: { caseSensitive: false, type: 'asc' },
					pathPattern: '^files$',
				},
			],
			'jsonc/sort-keys': [
				'error',
				{
					order:
						order === 'top-asc'
							? [...topKeys, { order: { caseSensitive: false, type: 'asc' } }]
							: { caseSensitive: false, type: 'asc' },
					pathPattern: '^$',
				},
				{
					order: ['types', 'import', 'require', 'default'],
					pathPattern: '^exports.*$',
				},
				{
					order: { caseSensitive: false, type: 'asc' },
					pathPattern: '^(?:bundle|bundled|dev|optional|peer)?[Dd]ependencies(Meta)?$',
				},
				{
					order: [
						'pre-commit',
						'prepare-commit-msg',
						'commit-msg',
						'post-commit',
						'pre-rebase',
						'post-rewrite',
						'post-checkout',
						'post-merge',
						'pre-push',
						'pre-auto-gc',
					],
					pathPattern: '^(?:gitHooks|husky|simple-git-hooks)$',
				},
			],
		},
	}
}

function getSortTsconfigJsonItem(options: JsonSortTsconfigJsonOptions = {}): LinterConfig {
	const {
		compilerOptionsOrder = 'top-asc',
		compilerOptionsTopKeys = [
			'target',
			'module',
			'moduleResolution',
			'lib',
			'rootDir',
			'rootDirs',
			'baseUrl',
		],
	} = options

	return {
		name: 'gicho/json/sort-tsconfig-json',
		files: ['**/tsconfig.json', '**/tsconfig.*.json'],
		rules: {
			'jsonc/sort-keys': [
				'error',
				{
					order: ['extends', 'compilerOptions', 'references', 'files', 'include', 'exclude'],
					pathPattern: '^$',
				},
				{
					order:
						compilerOptionsOrder === 'top-asc'
							? [...compilerOptionsTopKeys, { order: { caseSensitive: false, type: 'asc' } }]
							: { caseSensitive: false, type: 'asc' },
					pathPattern: '^compilerOptions$',
				},
			],
		},
	}
}
