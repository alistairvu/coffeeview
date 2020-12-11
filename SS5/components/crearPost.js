class CreatePot extends HTMLElement{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
      }
      connectedCallback() {
        this._shadowRoot.innerHTML = `
        <form action="" id="create-post">
        <textarea name="content" id="" cols="30" rows="4"></textarea>
        <button>Post</button>
        </form>
        `
      }
}
window.customElements.define('create-post',CreatePot);