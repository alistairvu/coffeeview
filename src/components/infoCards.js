const styles = `
<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 60vw;
  margin: 0 auto;
  margin-top: 5vh;
}

.cards {
  margin-top: 5vh;
  display: flex;
  justify-content: space-between;
}

.card {
  width: 25vw;
  height: 25vh;
  padding: 5px;
  border: 1px solid black;
}

.card-section {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
`

class InfoCards extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    this._shadowRoot.innerHTML = `
    <div class="container">
      <em>Loading...</em>
    </div>`

    const key = this.getAttribute("key")
    const collection = firebase.firestore().collection("cafes")
    const res = await collection.doc(key).get()
    const data = await res.data()
    const { rating, reviews, address, phone, hours } = data

    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <div class="cards">
        <div class="rating-card card">
          <h2>Ratings and reviews</h2>
          <h3>${rating} / 5.0</h3>
          <p><em>${reviews} ${reviews == 1 ? "review" : "reviews"}</em></p>
        </div>
        <div class="details-card card">
          <h2>Details</h2>
          <div class="address-card card-section">
            <b>ADDRESS</b>
            <p>
              ${address}
            </p>
          </div>
          <div class="phone-card card-section">
            <b>PHONE NUMBER</b>
            <p>${phone}</p>
          </div>
          <div class="hours-card card-section">
            <b>HOURS</b>
            <p>${hours}</p>
          </div>
        </div>
      </div>
    </div>`
  }
}

window.customElements.define("info-cards", InfoCards)
