const styles = `
.container {
  display: flex;
  justify-content: space-between;
  width: 60vw;
  margin: 0 auto;
}`

class LoginScreen extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    document.title = "coffeeview: Log In"
    this._shadowRoot.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
    }
    ${styles}
    </style>
    <header-cafe></header-cafe>
    <div class="container">
      <login-comp></login-comp>
      <register-comp></register-comp>
    </div>`
  }
}

window.customElements.define("login-screen", LoginScreen)
