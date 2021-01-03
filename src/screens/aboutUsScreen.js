class AboutUsScreen extends HTMLElement {
    constructor() {
      super()
      this._shadowRoot = this.attachShadow({ mode: "open" })
    }
  
    connectedCallback() {
        this._shadowRoot.innerHTML=`
        <header-cafe></header-cafe>
        <about-us></about-us>
        <footer-cafe></footer-cafe>
        `
    }
}
window.customElements.define("about-screen", AboutUsScreen);