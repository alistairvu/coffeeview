const style= ``
class Story extends HTMLElement{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
      }
      connectedCallback() {
        this._shadowRoot.innerHTML = `
        <story-header></story-header>
        <create-post></create-post>
        <list-post></list-post>
        `
      }
      

}
window.customElements.define('story-screen',Story)