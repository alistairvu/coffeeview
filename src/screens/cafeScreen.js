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
    h1{
      font-size:150%
    }
    </style>
    <header-cafe></header-cafe>
    <div class="container">
      <store-header key="${key}"></store-header>
      <info-cards key="${key}"></info-cards>
      ${
        window.localStorage.getItem("isLoggedIn") === "true"
          ? `<write-comment key="${key}"></write-comment>`
          : `<please-log-in></please-log-in>`
      }
      <comment-list store="${key}"></comment-list>
    </div>`
  }
}

window.customElements.define("cafe-screen", CafeScreen)
