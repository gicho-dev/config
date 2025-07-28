import { defineConfig } from 'tsdown'

export default defineConfig({
	dts: true,
	entry: {
		eslint: 'src/eslint/index.ts',
		prettier: 'src/prettier/index.ts',
	},
})
