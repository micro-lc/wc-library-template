import { factory } from '@micro-lc/back-kit-engine'

interface FetchDataPayload {}

const fetchData = factory<FetchDataPayload>('fetch-data')

export type { FetchDataPayload }
export { fetchData }
