import type { Config } from 'prettier'

const baseConfig: Config = {
	semi: false,
	singleQuote: true,
}

const tabConfig: Config = {
	...baseConfig,
	useTabs: true,
}

const w100Config: Config = {
	...baseConfig,
	printWidth: 100,
}

const w100TabConfig: Config = {
	...w100Config,
	useTabs: true,
}

export const configs = {
	base: baseConfig,
	tab: tabConfig,
	w100: w100Config,
	'w100-tab': w100TabConfig,
}

export type ConfigName = keyof typeof configs
