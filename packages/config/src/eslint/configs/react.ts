import type { Linter } from 'eslint'

import type { ConfigGroupFn } from '../core/types'

import { GLOBS } from '../core/constants'
import { pluginTs } from '../core/plugins'

/**
 * React configuration
 *
 * @see https://eslint-react.xyz/docs/rules/overview
 */
export const react: ConfigGroupFn<'react'> = async (options = {}, context = {}) => {
	const { typescript: enableTypescript } = context.rootOptions ?? {}

	const { files = [GLOBS.SRC], onFinalize = (v) => v } = options

	const [pluginReact, pluginReactHooks] = await Promise.all([
		import('@eslint-react/eslint-plugin').then((v) => v.default),
		import('eslint-plugin-react-hooks').then((v) => v.default),
	])

	return onFinalize([
		{
			name: 'gicho/react/setup',
			plugins: {
				...pluginReact.configs.all.plugins,
				'react-hook': pluginReactHooks,
			},
			settings: { ...pluginReact.configs.recommended.settings },
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
					? pluginReact.configs['recommended-typescript'].rules
					: pluginReact.configs.recommended.rules),

				// recommended rules eslint-plugin-react-hooks
				// -> https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks/src/rules
				'react-hooks/exhaustive-deps': 'warn',
				'react-hooks/rules-of-hooks': 'error',

				// Custom rules
				...options.rules,
			},
		},
	])
}
