import Button, { type FetchDataButtonProps } from './FetchDataButton'
import { customElement, query } from 'lit/decorators.js'
import { BkComponent } from '@micro-lc/back-kit-engine/base'
import type { PropsWithChildren } from 'react'
import { fetchData } from '../events'
import { html } from 'lit'

@customElement('wc-fetch-data-button')
class _ extends BkComponent<PropsWithChildren<FetchDataButtonProps>> {
  @query('#button-container') container!: HTMLDivElement

  constructor() {
    super(
      Button,
      () => ({
        children: 'Fetch data',
        onClick: () => { this.eventBus?.next(fetchData({})) },
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
