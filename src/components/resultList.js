const styles = `
<style>
.container{
  padding: 2px;
}

</style>`

import { getResultListFromArr } from "../utils.js"
const collection = firebase.firestore().collection("cafes")

class ResultList extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    const idListString = this.getAttribute("id-list")

    if (idListString.length == 0) {
      const res = await collection.get()
      const docs = await res.docs
      const data = docs.map((doc) => ({
        id: doc.id,
        rating: doc.data().rating,
      }))
      const dataId = data
        .sort((a, b) =>
          a.rating === b.rating ? b.reviews - a.reviews : b.rating - a.rating
        )
        .map((doc) => doc.id)
      const display = getResultListFromArr(dataId)

      this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      ${display}
     </div>`
    } else {
      const idList = JSON.parse(idListString)
      const display = getResultListFromArr(idList)
      console.log(display)

      this._shadowRoot.innerHTML = `
      ${styles}
      <div class="container">
        ${display}
      </div>`
    }
  }

  static get observedAttributes() {
    return ["id-list"]
  }

  attributeChangedCallback(name, oldVal, newVal) {
    const idList = JSON.parse(newVal)
    const display = getResultListFromArr(idList)
    console.log(display)
    console.log(newVal)

    if (idList.length > 0) {
      this._shadowRoot.innerHTML = `
      ${styles}
      <div class="container">
        ${display}
      </div>`
    } else {
      this._shadowRoot.innerHTML = `
      ${styles}
      <div class="container">
        <p>No results.</p>
      </div>`
    }
  }
}

window.customElements.define("result-list", ResultList)
