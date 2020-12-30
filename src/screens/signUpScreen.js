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
    document.title = "coffeeview: Sign Up"
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
      <register-comp></register-comp>
      Log in <a href="#!/login">here</a>
    </div>`
  }
}

window.customElements.define("sign-up-screen", LoginScreen)
