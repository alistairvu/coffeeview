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
        padding: 5px;
      }

      .input {
        width: 100%;
        resize: none;
      }

      .title {
        width: 100%;
        height: 2rem;
        margin-bottom: 5px;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type=number] {
        -moz-appearance: textfield;
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
        <input class="title" name="title" type="text" placeholder="Title" id="title"></input>
        <textarea rows="6" name="content" id="content" class="input" placeholder="Type your review..."></textarea>
        <div class="rating">
          <p>Rating: <input type="number" min="1" max="5" name="rating" id="rating"></input></p>
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
          rating: this._shadowRoot.getElementById("rating").value + ".0",
          time: new Date().toISOString(),
          isShown: true,
        }
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
