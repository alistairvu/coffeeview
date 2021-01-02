const styles = `
<style>
      * {
        margin: 0;
        padding: 0;
      }

      .container {
        width: 55vw;
       background-color:#F5F5F5;
        margin: 2vh auto;
        padding: 2vw;
      }

      @media (max-width: 729px) {
        .container {
          width: 100vw;
        }
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
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
    <div class="container">
<<<<<<< Updated upstream
      <h3>${title}</h3>
      <p class="small-info">
        Rating: ${rating.toFixed(1)} / 5.0 • by ${author}
=======
    <p class="small-info">
    ${
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")).username === author
          ? `<p class="delete" id="delete" style="float:right;width:5vw;text-align:center;background-color:#ebe8e8">Delete</p>`
          : ""
        : ""
    }
    <i class="fa fa-user-o" aria-hidden="true"></i> <small>${author}</small>
    
>>>>>>> Stashed changes
      </p>
      <h3>${title} (${rating.toFixed(1)}<small>/5.0</small>)</h3> 
     
      <p>
        ${content}
      </p>
      
      
    </div>
    `

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
