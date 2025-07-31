import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

export function findPackages(packageNames: string | string[]): string | undefined {
	const baseUrl = `${pathToFileURL(resolve(process.cwd(), 'packages.json')).href}`

	const pkgs = Array.isArray(packageNames) ? packageNames : [packageNames]
	for (const pkg of pkgs) {
		try {
			const pkgPath = import.meta.resolve(join(pkg, 'package.json'), baseUrl)
			return pkgPath
		} catch {}
	}
}

export function normalizeOptions<T extends Record<string, any>>(
	opts: boolean | T | undefined,
	defaultEnabled: boolean,
): T & { enabled: boolean } {
	if (typeof opts === 'boolean') {
		return { ...({} as T), enabled: opts }
	}
	const enabled = !!opts || defaultEnabled
	return { ...(opts as T), enabled }
}
