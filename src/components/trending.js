const style= `

h4 {
    margin-top:0;
    margin-bottom:0;
    font-family: 'Oswald', sans-serif;
}
.image{
    display: block;
    max-width: 254px;
    max-height: 254px;
    width: auto;
    height: auto;
}
img{
    width:100%;
}

`


class Trending extends HTMLElement {
    constructor(){
        super();
        this._shadowRoot= this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.name= this.getAttribute("name");
        this.img= this.getAttribute("img");
        this.dis= this.getAttribute("district");
        this.price= this.getAttribute("price");
        this.ranking= this.getAttribute("ranking");
        let money= "";
        for(let i=0; i<parseInt(this.price); i++)
        {
            money= money + "$";
        }
        this._shadowRoot.innerHTML= `

        <style>${style}</style>
        <div class="item-trend"> 
            <div class='image'><img class='img' src="${this.img}" alt="ảnh"></div>
            <div class='content'>
                <h4>${this.name}</h4>
                <div class="location">${this.dis} </div>
                <div class="rank">${this.ranking} đánh giá</div>
                <div class="money">${money}</div>
            </div> 
        </div>

        `
    }
}
window.customElements.define('item-trend', Trending)
