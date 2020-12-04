const style =`
`
class InputWrapper extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot= this.attachShadow({mode: 'open'});
    }
    connectedCallback()
    {
        this.type= this.getAttribute('type')
        this.placeholder= this.getAttribute("placeholder")
        this.error= this.getAttribute("error") || "" // ko truyen vao se co nhan gia tri rong
        this._shadowRoot.innerHTML=`
        ${style}
        <div class="input-wrapper">
             <input id= "input-main" type="${this.type}" id="" placeholder="${this.placeholder}">
             <div class="error">
             ${this.error}
          </div>
        </div>
        `
    }
    get value(){
        const value= this._shadowRoot.getElementById("input-main").value
        return value;
    }
}
window.customElements.define("input-wrapper", InputWrapper)