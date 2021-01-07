const styles = `
<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>`

class CreateStore extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    <div class="container">
      <header-cafe></header-cafe>
      <h1>ADD STORE</h1>
    </div>`
  }
}

window.customElements.define("create-store-screen", CreateStore)
