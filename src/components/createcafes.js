class CreateCafe extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot= this.attachShadow({mode: 'open'});
    }
    async connectedCallback(){
        this._shadowRoot.innerHTML= `
        
        `
    }
}