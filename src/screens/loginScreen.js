class LoginScreen extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
    }
    </style>
    <header-cafe></header-cafe>
    <div class="container">
      <h1>The Login Screen</h1>
    </div>`
  }
}

window.customElements.define("login-screen", LoginScreen)
