import { getResultListFromArr } from "../utils.js"
const collection = firebase.firestore().collection("cafes")

class ResultList extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    this._shadowRoot.innerHTML = `
    <em>Loading...</em>`

    const res = await collection.get()
    const docs = await res.docs
    const data = docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log(data)
    const display = getResultListFromArr(data)

    this._shadowRoot.innerHTML = `
    <div class="container">
      ${display}
     </div>`
  }
}

window.customElements.define("result-list", ResultList)
