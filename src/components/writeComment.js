const styles = `
<style>
      * {
        margin: 0;
        padding: 0;
      }

      .container {
        width: 60vw;
        margin: 10px auto;
        border: solid black 1px;
        text-align:center;
        display:border-box
      }

      .input {
        width: 55vw;
        resize: none;
        
      }

      .title {
        width: 55vw;
       
        height: 2rem;
        margin-bottom: 5px;
      }

      input, textarea {
        font-family: "Oswald";
        padding-left: 5px;
        padding-right: 5px;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type=number] {
        -moz-appearance: textfield;
      }
      textarea,button,input{
        font-family:Oswald;
        padding:5px;
      }
      h2{
        text-align:center;
        color:white;
       
      }
      p{
        color:white;
       
      }
      .container{
        background-color:black
      }
      button{
        background-color:white;
        border:none;
        font-size:150%;
      }
      button:hover{
        background-color:#9d9d9d;
        
      }

      @media (max-width: 729px) {
        .container {
          width: 100vw;
        }
      }
    </style>`

class WriteComment extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <form id="review-form">
        <h2>Write a Review!</h2>
       
        <input class="title" name="title" type="text" placeholder="Title" id="title"></input>
        <textarea rows="6" name="content" id="content" class="input" placeholder="Type your review..."></textarea>
        <p>Rating: <input type="number" min="1" max="5" name="rating" id="rating"></input></p>
        <div class="rating">
         
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>`

    const key = this.getAttribute("key")

    this._shadowRoot
      .getElementById("review-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault()
        const newComment = {
          author: JSON.parse(window.localStorage.getItem("user")).username,
          title: this._shadowRoot.getElementById("title").value,
          content: this._shadowRoot.getElementById("content").value,
          rating: parseInt(this._shadowRoot.getElementById("rating").value),
          time: new Date().toISOString(),
          isShown: true,
        }

        await firebase
          .firestore()
          .collection("cafes")
          .doc(key)
          .update({
            reviews: firebase.firestore.FieldValue.increment(1),
            totalRating: firebase.firestore.FieldValue.increment(
              parseInt(this._shadowRoot.getElementById("rating").value)
            ),
          })
          .then(async () => {
            const doc = await firebase.firestore().collection("cafes").doc(key)
            const res = await doc.get()
            const data = await res.data()
            const newReviews = data.reviews
            const newTotal = data.totalRating
            if (newReviews === 0) {
              doc.update({ rating: 0 })
            } else {
              doc.update({
                rating: newTotal / newReviews,
              })
            }
          })

        const collection = await firebase
          .firestore()
          .collection("cafes")
          .doc(key)
          .collection("comments")
        collection.add(newComment)
        alert("Your comment has been uploaded!")
        setTimeout(() => location.reload(), 500)
      })
  }
}

window.customElements.define("write-comment", WriteComment)
