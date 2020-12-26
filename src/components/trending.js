const style= `
* {
    margin: 0;
    padding: 0;
  }
  .image {
    flex: 1;
    padding:5px;
  }
  img {
    width: 200px;
    max-height: 150px; 
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
