import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import style from './style.css?inline'

@customElement('wc-title')
class _ extends LitElement {
  static styles = unsafeCSS(style)

  @state() protected _content?: string

  @property({ attribute: true })
  set content(text: string) { this._content = text }

  get content(): string | undefined { return this._content }

  protected render(): unknown {
    return html `
      <h1 class="wc-title">
        ${this._content}
      </h1>
    `
  }
}
