import { defineConfig } from './packages/config/src/eslint'

export default defineConfig({
	json: {
		sortPackageJson: true,
		sortTsconfigJson: true,
	},
})
