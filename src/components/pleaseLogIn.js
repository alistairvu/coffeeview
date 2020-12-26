const styles = `
<style>
      * {
        margin: 0;
        padding: 0;
      }

      .container {
        width: 60vw;
        margin: 10px auto;
        border: solid black 1px;
        padding: 5px;
      }
</style>
`

class LogInNotify extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <h2>You aren't logged in!</h2>
      <p>Please log in before leaving a comment</p>
      <a href="#!/login"><button type="button" class="login-btn">Log In</button></a>
    </div>`
  }
}

window.customElements.define("please-log-in", LogInNotify)
