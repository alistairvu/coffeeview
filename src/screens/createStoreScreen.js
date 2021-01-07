const styles = `
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .container {
    width: 60vw;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
  }
</style>`

class CreateStore extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <header-cafe></header-cafe>
    <div class="container">
      <h1 style="text-align: center;">ADD STORE</h1>
      <form-cafe></form-cafe>
    </div>`
  }
}

window.customElements.define("create-store-screen", CreateStore)
