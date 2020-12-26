const style = `
<style>
 <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
  .btn{
    position: absolute;
		  left: 50%;
		  margin-left: -50px;
  }
</style>
`
class HomeScreen extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot= this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this._shadowRoot.innerHTML=`
        ${style}
        <header-cafe></header-cafe>
        <div class="container"> 
        <top-trend></top-trend>
        
        </div>
        <button class="btn">show more</button>
        `
        this._shadowRoot.querySelector('.btn').addEventListener('click',()=>{
            router.navigate('/cafe')
        })
    }
}

window.customElements.define("home-screen", HomeScreen);