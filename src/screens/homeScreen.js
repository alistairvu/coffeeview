const styles = `
<style>
* {
  margin: 0;
  padding: 0;
}

h1{
  text-transform:uppercase;
  font-size:300%;
  color:white;
  background-color: black;
  text-align:center;
 
}
</style>`

class HomeScreen extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
        <header-cafe></header-cafe>
        <intro-banner></intro-banner>
        <h1>TRENDING</h1>
        <top-trend></top-trend>
        
        </div>
        <footer-cafe></footer-cafe>
        `
  }
}
window.customElements.define("home-screen", HomeScreen)
