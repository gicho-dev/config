const SRC_EXT = '?([cm])[jt]s?(x)'

export const GLOBS = {
	SRC: `**/*.${SRC_EXT}`,
	SRC_EXT,

	JS: '**/*.?([cm])js',
	JSX: '**/*.?([cm])jsx',
	TS: '**/*.?([cm])ts',
	TSX: '**/*.?([cm])tsx',

	ASTRO: '**/*.astro',
	ASTRO_TS: '**/*.astro/*.ts',
	MD: '**/*.md',
	SVELTE: '**/*.svelte',
	SVELTE_JS: '**/*.svelte.js',
	SVELTE_TS: '**/*.svelte.ts',

	JSON: '**/*.json',
	JSON5: '**/*.json5',
	JSONC: '**/*.jsonc',

	TESTS: [`**/{__tests__,tests}/**/*.${SRC_EXT}`, `**/*.{bench,benchmark,spec,test}.${SRC_EXT}`],
	TESTS_FIXTURE: [`**/fixtures/**/*.${SRC_EXT}`, `**/*.{fixture}.${SRC_EXT}`],

	EXCLUDE: [
		'**/node_modules',
		'**/package-lock.json',
		'**/pnpm-lock.yaml',
		'**/yarn.lock',
		'**/bun.lockb',

		'**/build',
		'**/dist',
		'**/output',
		'**/{temp,.temp,tmp,.tmp}',
		'**/.next',
		'**/.nuxt',
		'**/.svelte-kit',
		'**/.vercel',
		'**/*.min.*',

		'**/.changeset',
		'**/.idea',
		'**/.cache',
		'**/.turbo',
		'**/.yarn',

		'**/CHANGELOG.md',
		'**/LICENSE*',

		'**/__snapshots__',
		'**/coverage',

		'**/eslint.rules.d.ts',
	],
} as const
