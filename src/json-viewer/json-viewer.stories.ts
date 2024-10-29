import '.'
import type { Meta, StoryObj } from '@storybook/web-components'
import { displayData } from '@micro-lc/back-kit-engine'
import { generateEventBus } from '../../.storybook/lib/utils'
import { html } from 'lit'

const description = `A block to display json object data.

It showcases how to listen to a <a href="https://github.com/micro-lc/back-kit-engine" target="_blank">back-kit-engine</a> library event.
`

const meta: Meta = {
  title: 'Components/JSON Viewer',
  component: 'wc-json-viewer',
  parameters: {
    docs: {
      description: { component: description },
    },
  },
}

export default meta

export const Default: StoryObj = {
  render: () => {
    const eventBus = generateEventBus()
    eventBus.next(displayData({ data: [{ foo: 'bar' }] }))

    return html `<wc-json-viewer .eventBus=${eventBus}></wc-json-viewer>`
  },
}

export const WithoutData: StoryObj = {
  render: () => {
    const eventBus = generateEventBus()

    return html `<wc-json-viewer .eventBus=${eventBus}></wc-json-viewer>`
  },
}
