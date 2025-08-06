import { exec, isCI } from '@gicho/cli'
import { runTasks } from '@gicho/cli/prompts'
import { color } from '@gicho/cli/terminal'

if (!isCI()) {
	let err = ''

	const _error = (
		e: any,
		exitFn: (message: string, code: number) => void,
		message: string,
	): void => {
		err = e.stderr.trim() || e.stdout.trim() || e.message || 'Unknown error'
		exitFn(color.bold.red(message), 2)
	}

	await runTasks([
		{
			title: 'Checking types',
			async task({ exit }) {
				await exec('pnpm types').catch((e) => _error(e, exit, 'Oops! Type check failed!'))
				return 'Type check passed.'
			},
		},
		{
			title: 'Building',
			async task({ exit }) {
				await exec('pnpm build').catch((e) => _error(e, exit, 'Oops! Build failed!'))
				return 'Build passed.'
			},
		},
		{
			title: 'Running tests',
			async task({ exit }) {
				await exec('pnpm test:r').catch((e) => _error(e, exit, 'Oops! Test failed!'))
				return 'Test passed.'
			},
		},
	])

	if (err) {
		const col = process.stdout.columns

		const startLine = `\n${`┄┄┄◀ Error ▶┄┄`.padEnd(col, '┄')}\n\n`
		const endLine = `\n\n${`┄`.repeat(col)}\n`

		console.log(color.dim(startLine + err.trim() + endLine))

		process.exit(1)
	}
}
