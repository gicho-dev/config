import { config } from './packages/config/src/eslint'

export default config(
	{
		disables: {
			prettier: true,
		},

		ignores: {
			customIgnores: ['**/.local'],
		},

		json: {
			sortPackageJson: true,
			sortTsconfigJson: true,
		},

		typescript: {
			rules: {
				'@typescript-eslint/explicit-function-return-type': [
					'error',
					{ allowExpressions: true, allowHigherOrderFunctions: true, allowIIFEs: true },
				],
			},
		},
	},

	{
		name: 'gicho/tests',
		files: ['**/*.{bench,fixture,spec,test}.ts', '**/tests/**/*.js'],
		rules: {
			'no-cond-assign': 'off',
			'no-object-constructor': 'off',
			'no-proto': 'off',
			'no-prototype-builtins': 'off',
			'no-restricted-properties': 'off',
			'no-useless-assignment': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-extraneous-class': 'off',
			'@typescript-eslint/no-unsafe-function-type': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
		},
	},
)
