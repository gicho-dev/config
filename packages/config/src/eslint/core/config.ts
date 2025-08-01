import type {
	ConfigGroupFnContext,
	ConfigGroupFnReturn,
	ConfigGroupName,
	ConfigOptions,
	DefaultRules,
	IConfigGroupFn,
	LinterConfig,
	ResolvedConfigOptions,
	RulesRecord,
} from './types'

import { disables } from '../configs/disables'
import { ignores } from '../configs/ignores'
import { importFn } from '../configs/import'
import { js } from '../configs/js'
import { jsdoc } from '../configs/jsdoc'
import { json } from '../configs/json'
import { jsx } from '../configs/jsx'
import { node } from '../configs/node'
import { perfectionist } from '../configs/perfectionist'
import { prettier } from '../configs/prettier'
import { react } from '../configs/react'
import { regexp } from '../configs/regexp'
import { stylistic } from '../configs/stylistic'
import { svelte } from '../configs/svelte'
import { ts } from '../configs/ts'
import { findPackages, normalizeOptions } from './utils'

export async function defineConfig<TRules extends RulesRecord = DefaultRules>(
	options: ConfigOptions<TRules> = {},
): Promise<LinterConfig<TRules>[]> {
	const { enableAllGroups = false, extraConfigs = [], onFinalize = (v) => v } = options

	const detected = {
		ts: !!findPackages(['typescript', 'typescript-eslint']),
		react: !!findPackages(['react', '@eslint-react/eslint-plugin', 'eslint-plugin-react-hooks']),
		svelte: !!findPackages(['svelte', 'eslint-plugin-svelte']),
		prettier: !!findPackages('prettier'),
	}

	const groups = {
		disables,
		ignores,
		import: importFn,
		js,
		jsdoc,
		json,
		jsx,
		node,
		perfectionist,
		prettier,
		react,
		regexp,
		stylistic,
		svelte,
		ts,
	} satisfies Record<ConfigGroupName, IConfigGroupFn<DefaultRules>> as unknown as Record<
		ConfigGroupName,
		IConfigGroupFn<TRules>
	>

	const defaultEnabled: Record<string, boolean> = {
		// core
		ignores: true,
		js: true,
		import: true,

		// semi-core
		ts: detected.ts,
		jsdoc: true,
		node: true,
		perfectionist: true,
		regexp: true,
		stylistic: true,

		// optional
		json: false,
		jsx: false,
		react: detected.react,
		svelte: detected.svelte,

		// finish step
		prettier: detected.prettier,
		disables: true,
	} satisfies Record<ConfigGroupName, boolean>

	if (enableAllGroups) {
		for (const key in defaultEnabled) {
			defaultEnabled[key] = true
		}
	}

	// ordered keys
	const keys = Object.keys(defaultEnabled) as ConfigGroupName[]

	const opts = { ...options, enableAllGroups, extraConfigs } as ResolvedConfigOptions<TRules>
	for (const key of keys) {
		opts[key] = normalizeOptions((options as Record<string, any>)[key], defaultEnabled[key])
	}
	opts.js.enabled = true // `js` is always enabled

	const externalFormatter = opts.prettier.enabled

	const ctx: ConfigGroupFnContext<TRules> = {
		externalFormatter,
		rootOptions: opts,
	}

	const configs: ConfigGroupFnReturn<TRules>[] = []

	for (const key of keys) {
		if (opts[key].enabled) {
			configs.push(groups[key](opts[key], ctx))
		}
	}

	const flatConfigs = (await Promise.all(configs)).flat()

	if (extraConfigs.length) {
		flatConfigs.push(...extraConfigs)
	}

	return onFinalize(flatConfigs, ctx) ?? flatConfigs
}
