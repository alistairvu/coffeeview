class PostComment extends HTMLElement {
    constructor() {
      super()
      this._shadowRoot = this.attachShadow({ mode: "open" })
    }
  
    async connectedCallback() {
      try {
  
        this._shadowRoot.innerHTML = `
      hello
      
      
      `
      } catch (e) {
        console.error(e)
      }
    }
  }
  
  window.customElements.define("post-comment", PostComment)
  