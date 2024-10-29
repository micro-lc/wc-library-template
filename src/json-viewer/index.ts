import { type Event as BkEvent, type DisplayDataPayload, displayData } from '@micro-lc/back-kit-engine'
import { customElement, state } from 'lit/decorators.js'
import { html, unsafeCSS } from 'lit'
import { BkBase } from '@micro-lc/back-kit-engine/base'
import { filter } from 'rxjs'
import style from './style.css?inline'

@customElement('wc-json-viewer')
class _ extends BkBase {
  static styles = unsafeCSS(style)

  @state() _content = '{ }'

  constructor() {
    super(
      (eventBus) => {
        return eventBus
          .pipe(filter<BkEvent, BkEvent<DisplayDataPayload>>(displayData.is))
          .subscribe((nextEvent) => {
            const data = nextEvent.payload.data[0] ?? {}
            this._content = JSON.stringify(data, null, 2)
          })
      }
    )
  }

  protected render(): unknown {
    return html `
      <div class="json-viewer-container">
        <pre>${this._content}</pre>
      </div>
    `
  }
}
