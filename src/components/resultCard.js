const styles = `
<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 60vw;
  height: 150px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.img {
  flex: 1;
}

img {
  width: 15vw;
  max-height: 15vh; 
}

.info {
  flex: 3;
  padding: 1vh 1vw;
}

.review {
  margin-top: 2vh;
}
</style>`

class ResultCard extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    const img = this.getAttribute("img")
    const key = this.getAttribute("key")
    const name = this.getAttribute("name")
    const rating = this.getAttribute("rating")
    const reviews = this.getAttribute("reviews")
    const address = this.getAttribute("address")
    const review = this.getAttribute("review")

    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <div class="img">
        <img
          src="${img}"
          alt="Image of ${name}"
        />
      </div>
      <div class="info">
        <h3><a href="#!/cafe/${key}">${name}</a></h3>
        <div class="rating"><b>${rating}</b> (${reviews})</div>
        <div class="address">
          ${address}
        </div>
        <div class="review">
          <em
            >"${review}"
          </em>
        </div>
      </div>
    </div>`
  }
}

window.customElements.define("result-card", ResultCard)
