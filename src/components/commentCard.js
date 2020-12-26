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

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <h3>Lunch</h3>
      <p class="small-info">
        Rating: 5.0 / 5.0 · Reviewed 09/03/2020 by Phoebesmum10
      </p>
      <p>
        Went to Starbucks twice for lunch, Great service, great food. The first
        day was pretty crowded but got seats on the second day there. So popular
        with the crowd.
      </p>
      <p><b>Date of visit:</b> 02/2020</p>
    </div>`
  }
}

window.customElements.define("comment-card", Comment)
