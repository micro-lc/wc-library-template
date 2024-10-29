import { factory } from '@micro-lc/back-kit-engine'

interface RefreshPayload {}

const refresh = factory<RefreshPayload>('refresh')

export type { RefreshPayload }
export { refresh }
