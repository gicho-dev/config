import type { ConfigGroupFn, LinterConfig } from '../core/types'

import { nodePlugin } from '../plugins'

/**
 * Node configuration
 *
 * @see https://github.com/eslint-community/eslint-plugin-n
 */
export const node: ConfigGroupFn<'node'> = async (opts, ctx) => {
	const { onFinalize = (v) => v, preset = 'default' } = opts

	const getPresetRules = (): LinterConfig['rules'] => {
		if (preset === false) {
			return
		}

		if (preset === 'default') {
			return {
				'n/no-deprecated-api': 'error',
				'n/no-exports-assign': 'error',
				'n/no-new-require': 'error',
				'n/no-path-concat': 'error',
				'n/prefer-global/buffer': 'error',
				'n/prefer-global/process': 'error',
				'n/prefer-node-protocol': 'error',
				'n/process-exit-as-throw': 'error',
			}
		}

		// other rules (from the plugin)
		return nodePlugin.configs[`flat/${preset}`]?.rules
	}

	const items: LinterConfig[] = [
		{
			name: 'gicho/node/rules',
			plugins: {
				n: nodePlugin,
			},
			rules: {
				...getPresetRules(),

				// Custom rules
				...opts.rules,
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
