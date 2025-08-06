import { cleanAll, exec } from '@gicho/cli'
import { log } from '@gicho/cli/prompts'

await cleanAll()
log.success('Removed all build, cache, node_modules.')
await exec('pnpm i')
log.success('All dependencies installed again.')
