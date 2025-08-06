import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		// coverage: {
		// 	exclude: ['./src/types/**'],
		// 	reporter: ['text', 'html', 'json'],
		// },
		printConsoleTrace: true,
	},
})
