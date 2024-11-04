import { type Event as BkEvent, type ChangeQueryPayload, type EventBus, changeQuery, displayData, loadingData } from '@micro-lc/back-kit-engine'
import { BkHttpBase } from '@micro-lc/back-kit-engine/base'
import { type IProject } from '@mia-platform/console-types'
import { type Manifest } from '@micro-lc/compose-toolkit'
import { customElement } from 'lit/decorators.js'
import { filter } from 'rxjs'

@customElement('wc-console-projects-client')
class ConsoleProjectsClient extends BkHttpBase {
  static get __manifest(): Promise<Manifest> {
    return import('./manifest').then(({ default: manifest }) => manifest)
  }

  protected _wasDisconnected = false

  constructor() {
    super(fetchDataListener)
  }

  connectedCallback(): void {
    super.connectedCallback()

    if (this._wasDisconnected) {
      fetchData.call(this)
      this._wasDisconnected = false
    }
  }

  protected firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {
    super.firstUpdated(_changedProperties)
    fetchData.call(this)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this._wasDisconnected = true
  }
}

// eslint-disable-next-line no-unused-vars
function fetchData(this: ConsoleProjectsClient) {
  this.eventBus?.next(loadingData({ loading: true }))

  const url = new URL('/api/backend/projects/', window.location.origin)

  this._httpClient
    .get<IProject[]>(url.href)
    .then((res) => { this.eventBus?.next(displayData({ data: res.data ?? [] })) })
    .catch(() => { this.eventBus?.next(displayData({ data: [] })) })
    .finally(() => { this.eventBus?.next(loadingData({ loading: false })) })
}

function fetchDataListener(this: ConsoleProjectsClient, eventBus: EventBus) {
  return eventBus
    .pipe(filter<BkEvent, BkEvent<ChangeQueryPayload>>(changeQuery.is))
    .subscribe(() => { fetchData.call(this) })
}
