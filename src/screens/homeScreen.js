class HomeScreen extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot= this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        <header-cafe></header-cafe>
        <top-trend></top-trend>
        <button class="btn">show more</button>
        `
        this._shadowRoot.querySelector('.btn').addEventListener('click',()=>{
            router.navigate('/cafe')
        })
    }
}
window.customElements.define("home-screen", HomeScreen);