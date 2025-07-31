import type { Linter } from 'eslint'

import type { ConfigGroupFn, LinterConfig } from '../core/types'

import { GLOBS } from '../core/constants'
import { pluginTs } from '../core/plugins'

/**
 * React configuration
 *
 * @see https://eslint-react.xyz/docs/rules/overview
 */
export const react: ConfigGroupFn<'react'> = async (options, ctx) => {
	const { ts: enableTypescript } = ctx.rootOptions

	const { files = [GLOBS.SRC], onFinalize = (v) => v } = options

	const [reactPlugin, reactHooksPlugin] = await Promise.all([
		import('@eslint-react/eslint-plugin').then((v) => v.default),
		import('eslint-plugin-react-hooks').then((v) => v.default),
	])

	const items: LinterConfig[] = [
		{
			name: 'gicho/react/setup',
			plugins: {
				...reactPlugin.configs.all.plugins,
				'react-hooks': reactHooksPlugin,
			},
			settings: { ...reactPlugin.configs.recommended.settings },
		},

		{
			name: 'gicho/react/rules',
			files,
			languageOptions: {
				...(enableTypescript
					? {
							parser: pluginTs.parser as Linter.Parser,
							parserOptions: {
								projectService: true,
							},
						}
					: undefined),
			},
			rules: {
				...(enableTypescript
					? reactPlugin.configs['recommended-typescript'].rules
					: reactPlugin.configs.recommended.rules),

				// recommended rules eslint-plugin-react-hooks
				// -> https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks/src/rules
				'react-hooks/exhaustive-deps': 'warn',
				'react-hooks/rules-of-hooks': 'error',

				// Custom rules
				...options.rules,
			},
		},
	]

	return onFinalize(items, ctx) ?? items
}
