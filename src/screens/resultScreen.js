class ResultScreen extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    <div class="results">
      <result-list></result-list>
    </div>`
  }
}

window.customElements.define("result-screen", ResultScreen)
