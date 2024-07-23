import { html, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import style from './style.css?inline'
import { BkBase } from "@micro-lc/back-kit-engine/base";
import { click } from "../events/click";
import { filter } from "rxjs";

@customElement('custom-counter')
class _ extends BkBase {
  static styles = unsafeCSS(style)

  @state() _counter = 0

  constructor () {
    super(
      (eventBus) =>
        eventBus.pipe(filter(click.is)).subscribe(() => {
          this._counter += 1
        })
    )
  }

  protected render(): unknown {
    return html`
      <span>
        ${this._counter}
      </span>
    `
  }
}
