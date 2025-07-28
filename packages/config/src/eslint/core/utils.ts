export function normalizeOptions<T extends Record<string, any>>(
	options: boolean | T | undefined,
	defaultValue: boolean | T,
): T | undefined {
	if (options === undefined) options = defaultValue
	return options === true ? ({} as T) : options === false ? undefined : options
}
