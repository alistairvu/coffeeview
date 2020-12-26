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

      .delete {
        margin-top: 0.3rem;
        font-size: 0.7rem;
        cursor: pointer;
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
        Rating: ${rating.toFixed(1)} / 5.0 · by ${author}
      </p>
      <p>
        ${content}
      </p>
      ${
        localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user")).username === author
            ? `<p class="delete" id="delete">Delete</p>`
            : ""
          : ""
      }
      
    </div>`

    this._shadowRoot
      .getElementById("delete")
      .addEventListener("click", async () => {
        const confirmDelete = confirm("Do you want to delete this comment?")

        if (confirmDelete) {
          await firebase
            .firestore()
            .collection("cafes")
            .doc(store)
            .update({
              reviews: firebase.firestore.FieldValue.increment(-1),
              totalRating: firebase.firestore.FieldValue.increment(-1 * rating),
            })
            .then(async () => {
              const doc = await firebase
                .firestore()
                .collection("cafes")
                .doc(store)
              const res = await doc.get()
              const data = await res.data()
              const newReviews = data.reviews
              const newTotal = data.totalRating
              doc.update({
                rating: newTotal / newReviews,
              })
            })

          await data
            .collection("comments")
            .doc(key)
            .update({
              isShown: false,
            })
            .then(() => {
              alert("Comment is deleted!")
              setTimeout(() => location.reload(), 500)
            })
        }
      })
  }
}

window.customElements.define("comment-card", Comment)
