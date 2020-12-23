class CafeScreen extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    const key = this.getAttribute("key")

    this._shadowRoot.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
    }
    </style>
    <div class="container">
      <info-cards key="${key}"></info-cards>
    </div>`
  }
}

window.customElements.define("cafe-screen", CafeScreen)
