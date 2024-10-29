import '.'

import type { Meta, StoryObj } from '@storybook/web-components'

const meta: Meta = {
  title: 'Components/Title',
  component: 'wc-title',
  parameters: {
    docs: {
      description: {
        component: `A simple, presentational component build just using Lit. 

It accepts a property to control the text content, and showcases how a Web Component can be styled with CSS.`,
      },
    },
  },
}

export default meta

export const Default: StoryObj = {
  args: {
    content: 'Hello, World!',
  },
}
