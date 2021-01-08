class FormScreen extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    async connectedCallback() {
        this._shadowRoot.innerHTML=`
        <form-cafe></form-cafe>
        `
    }
}
window.customElements.define("form-screen", FormScreen)