class CommentList extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    const store = this.getAttribute("store")
    const collection = await firebase.firestore().collection("cafes").doc(store)
    const res = await collection.collection("comments").get()
    const docs = await res.docs
    const data = docs.map((doc) => doc.id)

    let html = ``
    data.map(
      (key) =>
        (html += `<comment-card store="${store}" key="${key}"></comment-card>`)
    )
    this._shadowRoot.innerHTML = html
  }
}

window.customElements.define("comment-list", CommentList)
