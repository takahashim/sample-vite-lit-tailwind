import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import globalStyles from './index.css?inline'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div class="flex max-w-screen-xl my-0 mx-auto p-8 place-content-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="h-36 p-6 hover:drop-shadow-3xl" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="h-36 p-6 hover:drop-shadow-3xl-lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="p-8">
        <button @click=${this._onClick} class="rounded-lg border border-solid border-transparent text-base bg-slate-100 dark:bg-slate-800 px-5 py-3 cursor-pointer duration-300 hover:border-violet-700">
          count is ${this.count}
        </button>
      </div>
      <p class="text-slate-600">${this.docsHint}</p>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = [unsafeCSS(globalStyles), css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  `]
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
