import Button, { type ButtonProps } from './RefreshButton'
import { customElement, query } from 'lit/decorators.js'
import { BkComponent } from '@micro-lc/back-kit-engine/base'
import type { PropsWithChildren } from 'react'
import { html } from 'lit'
import { refresh } from '../events'

@customElement('wc-refresh')
class _ extends BkComponent<PropsWithChildren<ButtonProps>> {
  @query('#button-container') container!: HTMLDivElement

  constructor() {
    super(
      Button,
      () => ({
        onClick: () => { this.eventBus?.next(refresh({})) },
        container: this,
      })
    )
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this
  }

  protected render(): unknown {
    return html `<div id='button-container'></div>`
  }
}
