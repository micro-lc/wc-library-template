import '.'
import { type Event as BkEvent, type EventBus } from '@micro-lc/back-kit-engine'
import type { Meta } from '@storybook/web-components'
import { ReplaySubject } from 'rxjs'
import { action } from '@storybook/addon-actions'
import { html } from 'lit'

const eventBus: EventBus = new ReplaySubject<BkEvent>()

eventBus.subscribe((next) => action('Event sent')(next))

const description = `A button that emits a \`refresh\` event on click.
        
It showcases:

- how to build a Web Component upon a React component using <a href="https://ant.design/" target="_blank">Ant Design</a>,
- how to use <a href="https://github.com/micro-lc/back-kit-engine" target="_blank">back-kit-engine</a> library to scaffold a component, and
- how to emit an event through <a href="https://micro-lc.io/docs/guides/applications/compose/#eventbus" target="_blank">micro-lc \`eventBus\`</a>.
`

const meta: Meta = {
  title: 'Refresh button',
  component: 'wc-refresh',
  parameters: {
    docs: {
      description: { component: description },
    },
  },
}

export default meta

const Template = () => html `<wc-refresh .eventBus=${eventBus}></wc-refresh>`

export const Default = Template.bind({})
