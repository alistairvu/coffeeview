const styles = `
<style>
      * {
        margin: 0;
        padding: 0;
      }

      .container {
        width: 60vw;
        margin: 10px auto;
        padding: 5px;

      }
      h1{
        text-transform:uppercase;
      }
</style>`

import { fromNumberToDollar } from "../utils.js"

class Header extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <em>Loading...</em>
    </div>`

    const key = this.getAttribute("key")
    const collection = await firebase.firestore().collection("cafes")
    const res = await collection.doc(key).get()
    const { name, rating, address, price } = res.data()

    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <h1>${name}</h1>
      <div class="data">
        <p>Rating: ${rating} / 5.0 · ${fromNumberToDollar(price)}</p>
      </div>
      <p>${address}</p>
    </div>`
  }
}

window.customElements.define("store-header", Header)
