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

import {
	disables,
	ignores,
	importFn,
	js,
	jsdoc,
	json,
	perfectionist,
	prettier,
	react,
	stylistic,
	svelte,
	ts,
} from '../configs'
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
		perfectionist,
		prettier,
		react,
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
		perfectionist: true,
		stylistic: true,

		// optional
		json: false,
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
