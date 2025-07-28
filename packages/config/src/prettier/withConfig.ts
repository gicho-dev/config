import type { Config } from 'prettier'

import type { ConfigName } from './configs'

import { configs } from './configs'

/**
 * Return a Prettier configuration merged with the base config.
 *
 * Base config:
 * - semi: false
 * - singleQuote: true
 *
 * @param customConfig - Custom configuration to override or extend the base config.
 * @returns The merged Prettier configuration.
 */
export function withBaseConfig(customConfig: Config = {}): Config {
	return { ...configs.base, ...customConfig }
}

/**
 * Return a Prettier configuration merged with a specific shared config.
 *
 * @param configName - The name of the shared config to merge.
 * @param customConfig - Custom configuration to override or extend the shared config.
 * @returns The merged Prettier configuration.
 */
export function withSharedConfig(configName: ConfigName, customConfig: Config = {}): Config {
	return { ...configs[configName], ...customConfig }
}
