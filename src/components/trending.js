const style = `

h4 {
    margin-top:0;
    margin-bottom:0;
    font-family: 'Oswald', sans-serif;
}
.image{
    display: block;
    max-height: 150px;
    width: auto;
    
}

img{
    width:100%;
    max-height: 150px;
    object-fit: cover;
}

a{
    text-decoration: none;
    color:black;
  }
  a:hover {
    color: #3c3a3b;
   
  }
`

class Trending extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    const key = this.getAttribute("key")
    const collection = await firebase.firestore().collection("cafes")
    const res = await collection.doc(key).get()
    const { name, price, img, district, rating, reviews } = res.data()

    let money = ""
    for (let i = 0; i < parseInt(price); i++) {
      money = money + "$"
    }
    this._shadowRoot.innerHTML = `

        <style>${style}</style>
        <a href="#!/cafe/${key}">
        <div class="item-trend"> 
            <div class='image'><img class='img' src="${img}" alt="ảnh"></div>
            <div class='content'>
                <a href="#!/cafe/${key}"><h4>${name}</h4></a>
                <div class="location">${district} </div>
                <div class="rank">${
                  reviews <= 0
                    ? "No reviews yet"
                    : `<b>${rating.toFixed(1)} / 5.0</b> (${reviews})`
                }</div>
                <div class="money">${money}</div>
            </div> 
        </div>
       </a>
        `
  }
}
window.customElements.define("item-trend", Trending)