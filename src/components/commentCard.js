const styles = `
<style>
      * {
        margin: 0;
        padding: 0;
      }

      .container {
        width: 60vw;
        border: 1px solid black;
        margin: 10px auto;
        padding: 5px;
      }
    </style>`

class Comment extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    const key = this.getAttribute("key")
    const store = this.getAttribute("store")
    const data = await firebase.firestore().collection("cafes").doc(store)
    const res = await data.collection("comments").doc(key).get()
    const { author, content, rating, title } = await res.data()

    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <h3>${title}</h3>
      <p class="small-info">
        Rating: ${rating} / 5.0 · by ${author}
      </p>
      <p>
        ${content}
      </p>
    </div>`
  }
}

window.customElements.define("comment-card", Comment)
