import '.'
import type { Meta } from '@storybook/web-components'
import { generateEventBus } from '../../.storybook/lib/utils'
import { html } from 'lit'

const description = `A button that emits a \`fetch-data\` event on click.
        
It showcases:

- how to build a Web Component upon a React component using <a href="https://ant.design/" target="_blank">Ant Design</a>,
- how to use <a href="https://github.com/micro-lc/back-kit-engine" target="_blank">back-kit-engine</a> library to scaffold a component, and
- how to emit a custom event through <a href="https://micro-lc.io/docs/guides/applications/compose/#eventbus" target="_blank">micro-lc \`eventBus\`</a>.
`

const meta: Meta = {
  title: 'Components/Fetch data button',
  component: 'wc-fetch-data-button',
  parameters: {
    docs: {
      description: { component: description },
    },
  },
}

export default meta

const Template = () => html `<wc-fetch-data-button .eventBus=${generateEventBus()}></wc-fetch-data-button>`

export const Default = Template.bind({})
