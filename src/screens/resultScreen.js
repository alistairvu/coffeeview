const styles = `
* {
  margin: 0;
  padding: 0;
}

.results {
  display: flex;
  flex-direction: row-reverse;
}
@media (max-width: 729px) {
  .container {
   padding:0;
   margin:0;

  }
  
}
`

class ResultScreen extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    document.title = "coffeeview: Home"
    this._shadowRoot.innerHTML = `
    <header-cafe></header-cafe>
    <div class="results">
      <filter-screen></filter-screen>
    </div>`
  }
}

window.customElements.define("result-screen", ResultScreen)
