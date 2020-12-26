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
        <input class="title" name="title" type="text" placeholder="Title"></input>
        <textarea rows="6" name="content" class="input" placeholder="Type your review..."></textarea>
        <div id="rating">
          <p>Rating: <input type="number" min="1" max="5" name="rating"></input></p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>`
  }
}

window.customElements.define("write-comment", WriteComment)
