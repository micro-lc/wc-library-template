import { Manifest } from '@micro-lc/compose-toolkit'

/** @see https://docs.mia-platform.eu/docs/microfrontend-composer/external-components/manifest */
const manifest: Manifest = {
  label: 'Pokemon Api Client',
  properties: {
    offset: {
      default: 0,
      description: 'Offset to send in the request',
      title: 'Offset',
      type: 'number',
    },
    pageSize: {
      default: 0,
      description: 'Page size to send in the request',
      title: 'Page size',
      type: 'number',
    },
  },
  type: 'connector',
}

export default manifest
