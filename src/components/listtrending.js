import { getDataFromDocs, getDataFromDoc } from "../utils.js"
const style = `
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">

.wrapper {
	padding: 5px;
	max-width: 960px;
  width: 95%;
  color: #666;
	margin: 20px auto;
}

.columns {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
  margin: 5px 0;
    
}

.column {
	flex: 1;
	border: 1px solid gray;
	margin: 2px;
	padding: 10px;
	&:first-child { margin-left: 0; }
	&:last-child { margin-right: 0; }
	
}

  .wrapper:hover{
    background-color:#ebebeb;
  }

`
class TopTrend extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }
  async connectedCallback() {
    const res = await firebase
      .firestore()
      .collection("cafes")
      .orderBy("rating", "desc")
      .limit(6)
      .get()
    const cafeList = await res.docs.map((doc) => doc.id)
    let html = ``
    for (const iterator of cafeList) {
      html += `
        <div class="column">
            <item-trend class="swiper-slide" key="${iterator}"></item-trend>
        </div>
            `
    }
    this._shadowRoot.innerHTML = `
         <style>${style}</style>

         <div class="wrapper">
         <section class="columns">
            ${html}
          </section>
         </div>
        `
  }
}
window.customElements.define("top-trend", TopTrend)
