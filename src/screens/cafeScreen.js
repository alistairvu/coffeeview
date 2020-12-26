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
    <header-cafe></header-cafe>
    <div class="container">
      <store-header key="${key}"></store-header>
      <info-cards key="${key}"></info-cards>
      <write-comment key="${key}"></write-comment>
      <comment-list store="${key}"></comment-list>
    </div>`
   
  }
}

window.customElements.define("cafe-screen", CafeScreen)
