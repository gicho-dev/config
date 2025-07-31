import { defineConfig } from './packages/config/src/eslint'

export default defineConfig({
	ts: {
		rules: {
			'@typescript-eslint/explicit-function-return-type': [
				'error',
				{ allowExpressions: true, allowHigherOrderFunctions: true, allowIIFEs: true },
			],
		},
	},

	json: {
		sortPackageJson: true,
		sortTsconfigJson: true,
	},

	extraConfigs: [
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

				// '@typescript-eslint/explicit-function-return-type': 'off',
				// '@typescript-eslint/no-extraneous-class': 'off',
				// '@typescript-eslint/no-unsafe-function-type': 'off',
				// '@typescript-eslint/no-unused-expressions': 'off',
			},
		},
	],

	onFinalize(items, _ctx) {
		// console.log(
		// 	ctx.rootOptions.prettier.enabled,
		// 	items.map((v) => v.name).filter((name) => name?.includes('/prettier')),
		// )

		return items
	},
})
