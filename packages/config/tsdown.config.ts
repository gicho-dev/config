import { defineConfig } from 'tsdown'

export default defineConfig({
	dts: true,
	entry: {
		'eslint/index': 'src/eslint/index.ts',
		'eslint/plugins': 'src/eslint/plugins.ts',
		prettier: 'src/prettier/index.ts',
	},
})
