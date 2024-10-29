import { Event as BkEvent, EventBus, displayData } from '@micro-lc/back-kit-engine'
import { type FetchDataPayload, fetchData } from '../events'
import { customElement, property } from 'lit/decorators.js'
import { BkHttpBase } from '@micro-lc/back-kit-engine/base'
import { Manifest } from '@micro-lc/compose-toolkit'
import { filter } from 'rxjs'

interface GetPokemonResult {
  count: number,
  next: string,
  previous?: string | null
  results?: { name: string, url?: string }[]
}

@customElement('wc-pokemon-api-client')
class PokemonApiClient extends BkHttpBase {
  static get __manifest(): Promise<Manifest> {
    return import('./manifest').then(({ default: manifest }) => manifest)
  }

  @property({ attribute: true, type: Number }) offset = 0
  @property({ attribute: true, type: Number }) pageSize = 25

  constructor() {
    super(fetchDataListener)
  }
}

function fetchDataListener(this: PokemonApiClient, eventBus: EventBus) {
  return eventBus
    .pipe(filter<BkEvent, BkEvent<FetchDataPayload>>(fetchData.is))
    .subscribe(() => {
      const url = new URL('https://pokeapi.co/api/v2/pokemon?offset=0&limit=25')
      url.searchParams.set('offset', String(this.offset))
      url.searchParams.set('limit', String(this.pageSize))

      this._httpClient
        .get<GetPokemonResult>(url.href)
        .then((res) => { this.eventBus?.next(displayData({ data: res.data?.results ?? [] })) })
    })
}
