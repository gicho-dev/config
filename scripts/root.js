/*
 * Root path of the repository (general/monorepo)
 */

import { dirname, resolve } from 'node:path/posix'
import { fileURLToPath } from 'node:url'

const _dirname = import.meta.url ? dirname(fileURLToPath(import.meta.url)) : __dirname

export const ROOT_PATH = resolve(_dirname, '../')

/**
 * Return the resolved root path of the repository
 *
 * @param  {...string} paths
 * @returns {string} The resolved root path
 */
export const rootPath = (...paths) => resolve(ROOT_PATH, ...paths)
