const styles = `
.container {
  width: 60vw;
  margin: 0 auto;
  text-align: center;
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
      Sign up <a href="#!/sign-up">here</a>
    </div>`
  }
}

window.customElements.define("login-screen", LoginScreen)
