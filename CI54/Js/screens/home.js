class HomeScreen extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot= this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        
        <top-trend></top-trend>
        <button class="btn">show more</button>
        `
        
    }
}
window.customElements.define("home-screen", HomeScreen);