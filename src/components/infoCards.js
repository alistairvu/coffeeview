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
      h1{
        font-size:400%;
      }
      .rating-card{
        
       width:20vw;
      }
      .details-card{
        
        width:40vw;
       
      }

      @media (max-width: 729px) {
        .container {
          width: 100vw;
          margin:5vw;
        }
        .rating-card{
        
         padding:0
         }
         .details-card{
           
          padding:0
          
         }
      }

      .cards {
        margin-top: 5vh;
        display: flex;
        justify-content: space-between;
      }

      @media (max-width: 480px) {
        .cards {
          flex-direction: column;
        }
      }

      .card {
        
        padding: 5px;
       
      }

      @media (max-width: 729px) {
        .card {
          width: 45vw;
        }
      }

      @media (max-width: 480px) {
        .card {
          width: 100vw;
          margin-top: 10px;
          margin-bottom: 10px;
        }
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
    ${styles}
    <div class="container">
      <em>Loading info...</em>
    </div>`

    try {
      const key = this.getAttribute("key")
      const collection = firebase.firestore().collection("cafes")
      const res = await collection.doc(key).get()
      const data = await res.data()
      const { rating, reviews, address, phone, hours, feature } = data
      let features=''
      for(let feat of feature){
        if(!features){
          features+=feat
        }
        else{features+=`, ${feat}`}
      }
      this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <div class="cards">
        <div class="rating-card card">
          <h2>Ratings and reviews</h2>
          ${
            reviews <= 0
              ? `<b>No reviews yet.</b>
            <p><em>Be the first to add a review!</em></p>`
              : `<h1>${rating.toFixed(1)}/5.0</h1>
          <p><em>${reviews} ${reviews == 1 ? "review" : "reviews"}</em></p>`
          }
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
          <div class="feature-card card-section">
            <b>FEATURES</b>
            <p>${features}</p>
          </div>
        </div>
      </div>
    </div>
    <br>`
    } catch (e) {
      this._shadowRoot.innerHTML = `
      ${styles}
      <div class="container">
        <h1>404 Not Found</h1>
      </div>`
    }
  }
}

window.customElements.define("info-cards", InfoCards)
