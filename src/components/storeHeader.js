const styles = `
<style>
      * {
        margin: 0;
        padding: 0;
      }

      .container {
        width: 60vw;
        margin:  auto;
       

      }
      h1{
        text-transform:uppercase;
        font-size:300%
       
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
    let { name, rating, address, price } = res.data()
    
    document.title = `coffeeview: ${name}`

    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <br>
      <br>
      <h1>${name}</h1>
      <div class="data">
        <h3>Rating: ${rating.toFixed(1)}/5.0 · ${fromNumberToDollar(price)}</h3>
      </div>
      <h3>${address}</h3>
    </div>`
  }
}

window.customElements.define("store-header", Header)
