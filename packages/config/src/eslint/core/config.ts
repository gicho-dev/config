import type {
	ConfigGroupFnContext,
	ConfigGroupFnReturn,
	ConfigOptions,
	LinterConfig,
} from './types'

import {
	disables,
	ignores,
	importFn,
	javascript,
	jsdoc,
	json,
	perfectionist,
	react,
	stylistic,
	svelte,
	typescript,
} from '../configs'
import { normalizeOptions } from './utils'

export async function config(
	options: ConfigOptions = {},
	...customConfigs: LinterConfig[]
): Promise<LinterConfig[]> {
	const { onFinalize = (v) => v } = options

	const opt = {
		disables: normalizeOptions(options.disables, true),
		ignores: normalizeOptions(options.ignores, true),
		import: normalizeOptions(options.import, true),
		javascript: normalizeOptions(options.javascript, true),
		jsdoc: normalizeOptions(options.jsdoc, true),
		json: normalizeOptions(options.json, false),
		perfectionist: normalizeOptions(options.perfectionist, true),
		react: normalizeOptions(options.react, false),
		stylistic: normalizeOptions(options.stylistic, true),
		svelte: normalizeOptions(options.svelte, false),
		typescript: normalizeOptions(options.typescript, true),
	}

	const { prettier: enablePrettier = false } = opt.disables ?? {}
	const externalFormatter = !!enablePrettier

	const context: ConfigGroupFnContext = {
		enablePrettier,
		externalFormatter,
		rootOptions: { ...options, ...opt },
	}

	const configs: ConfigGroupFnReturn[] = [
		ignores(opt.ignores, context),
		javascript(opt.javascript, context),
		importFn(opt.import, context),
	]

	if (opt.jsdoc) configs.push(jsdoc(opt.jsdoc, context))
	if (opt.typescript) configs.push(typescript(opt.typescript, context))
	if (opt.stylistic) configs.push(stylistic(opt.stylistic, context))
	if (opt.perfectionist) configs.push(perfectionist(opt.perfectionist, context))

	if (opt.json) configs.push(json(opt.json, context))
	if (opt.react) configs.push(react(opt.react, context))
	if (opt.svelte) configs.push(svelte(opt.svelte, context))

	configs.push(disables(opt.disables, context))

	const flatConfigs: LinterConfig[] = (await Promise.all(configs)).flat()
	const finalConfigs = customConfigs.length ? [...flatConfigs, ...customConfigs] : flatConfigs

	return onFinalize(finalConfigs)
}
