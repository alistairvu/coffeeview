const styles = `
<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 45vw;
  height: 150px;
 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  background-color:#f5f5f5;
  padding-bottom:20px;
  padding-top:20px;
  padding-left:20px;

}
.container:hover{
  background-color:#ebebeb;
}

.img {
  flex: 1;
  padding:5px;
}

img {
  width: 200px;
  max-height: 150px; 
}

.info {
  flex: 3;
  padding: 1vh 1vw;
}

.review {
  margin-top: 2vh;
}
h2{
  color:black;
  text-transform:uppercase;
  text-decoration: none;
  
}
a{
  text-decoration: none;
  color:black;
}
a:hover {
  color: #3c3a3b;
 
}

</style>
`

import { fromNumberToDollar } from "../utils.js"

class ResultCard extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    try {
      const key = this.getAttribute("key")
      const collection = firebase.firestore().collection("cafes")
      const res = await collection.doc(key).get()
      const data = await res.data()
      const {
        img,
        name,
        rating,
        reviews,
        address,
        review,
        price,
        totalRating,
      } = data

      this._shadowRoot.innerHTML = `
    ${styles}
    <a href="#!/cafe/${key}"><div class="container">
      <div class="img">
        <img
          src="${img}"
          alt="Image of ${name}"
        />
      </div>
      <div class="info">
        <h2>${name}</h2>
        <div class="rating">${
          reviews > 0
            ? `<b>${rating.toFixed(1)}/5.0</b> (${reviews})`
            : `<span>No reviews yet</span>`
        } · ${fromNumberToDollar(price)}</div> 
        <div class="address">
          ${address}
        </div>
        <div class="review">
          <em
            >"${review}"
          </em>
        </div>
      </div>
      
    </div></a>
    `
    } catch (e) {
      console.error(e)
    }
  }
}

window.customElements.define("result-card", ResultCard)
