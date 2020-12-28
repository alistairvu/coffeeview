const styles = `
<style>
      * {
        margin: 0;
        padding: 0;
      }

      .container {
        width: 60vw;
        margin:  auto;
        

      }
      h1{
        text-transform:uppercase;
        font-size:300%;
        color:white;
        background-color: black;
        text-align:center
       
      }
      .data{
        color:white;
        background-color:black;
        text-align:center
       
      }
      @media (max-width: 729px) {
        
         .container {

         width:100vw;
        }
       
      }
      a:hover{
        color:#5c5b5b
      }
      .back-arrow {
        color: black;
        text-decoration: none;
      }
</style>`

import { fromNumberToDollar } from "../utils.js"

class Header extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <em>Loading...</em>
    </div>`

    const key = this.getAttribute("key")
    const collection = await firebase.firestore().collection("cafes")
    const res = await collection.doc(key).get()
    const { name, rating, address, price, reviews } = res.data()

    document.title = `coffeeview: ${name}`

    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
    <br>
      <a href="#!/cafe" class="back-arrow">
        <h3>← Return to results</h3>
      </a>
      <br>
      <h1>${name}</h1>
      <div class="data">
        <h3>${
          reviews <= 0 ? "No reviews yet" : `Rating: ${rating.toFixed(1)}/5.0`
        } · ${fromNumberToDollar(price)}</h3>
        <h3>${address}</h3>
      </div>
     
    </div>`
  }
}

window.customElements.define("store-header", Header)
