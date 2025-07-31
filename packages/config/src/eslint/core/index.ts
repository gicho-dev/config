/* ----------------------------------------
 *   Types
 * ------------------------------------- */

export type {
	ConfigOptions,
	DefaultRules,
	ESLintRules,
	FlatConfig,
	Linter,
	LinterConfig,
	RulesRecord,
} from './types'

/* ----------------------------------------
 *   Objects
 * ------------------------------------- */

export { tsPlugin } from '../configs/ts'
export * from './config'
export * from './constants'

/* ----------------------------------------
 *   External
 * ------------------------------------- */

export { default as globals } from 'globals'
