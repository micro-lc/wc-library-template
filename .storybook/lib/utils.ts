import { ReplaySubject } from "rxjs"
import { type Event as BkEvent, type EventBus } from '@micro-lc/back-kit-engine'
import { action } from '@storybook/addon-actions'

export const generateEventBus = (): EventBus => {
  const eventBus: EventBus = new ReplaySubject<BkEvent>()

  eventBus.subscribe((next) => action('New event on bus')(next))

  return eventBus
}
