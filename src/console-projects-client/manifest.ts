import { type FetchFactory, type Manifest } from '@micro-lc/compose-toolkit'
import { type IProject } from '@mia-platform/console-types'

const mockProjects: IProject[] = [
  {
    _id: '000000000000000000000000',
    'name': 'Project 1',
    'projectId': 'project-1',
    'tenantId': 'tenant-1',
    'tenantName': 'Tenant 1',
  },
  {
    _id: '000000000000000000000001',
    'name': 'Project 2',
    'projectId': 'project-2',
    'tenantId': 'tenant-2',
    'tenantName': 'Tenant 2',
  },
]

const fetchMock: FetchFactory = () => {
  return [
    {
      url: { pathname: '/api/backend/projects/' },
      method: 'GET',
      handler: () => {
        const response = new Response(
          JSON.stringify(mockProjects),
          { headers: { 'Cache-Control': 'no-cache', 'Content-Type': 'application/json' }, status: 200 }
        )

        return Promise.resolve(response)
      },
    },
  ]
}

/** @see https://docs.mia-platform.eu/docs/microfrontend-composer/external-components/manifest */
const manifest: Manifest = {
  label: 'Console Projects Client',
  description: 'Client to interact with Mia-Platform Console projects API.',
  type: 'connector',
  example: JSON.stringify({ 'tag': 'wc-console-projects-client' }),
  mocks: { fetch: fetchMock },
}

export default manifest
