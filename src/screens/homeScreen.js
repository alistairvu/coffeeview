const styles = `
<style>
h1{
  text-transform:uppercase;
  font-size:300%;
  color:white;
  background-color: #3c3a3b;
  text-align:center
 
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
        <header-cafe></header-cafe>
        <h1>TRENDING</h1>
        <top-trend></top-trend>
        <button class="btn">show more</button>
        `
    this._shadowRoot.querySelector(".btn").addEventListener("click", () => {
      router.navigate("/cafe")
    })
  }
}
window.customElements.define("home-screen", HomeScreen)
