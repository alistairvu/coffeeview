class CardComponent extends HTMLElement {
    constructor() {
        super(); //khai báo shadow dom
        this._shadowDom = this.attachShadow({ mode: 'open' });
        this.imgSrc= this.getAttribute('imgscr')
        this.tittle= this.getAttribute("tit")
        this.des= this.getAttribute("des")
        this._shadowDom.innerHTML =
            `
            ${style}
    <div class="card">
             <img src="${this.imgSrc}" alt="">
             <div class="card-body">
            <div class="title">
                <h1>${this.tittle}</h1>
            </div>
            <div class="description">${this.des}</div>
        </div>
    </div>
        `
    }
}
const style = `
<style>
.card{
    font-family:  sans-serif;
    border: 5px solid #dbdbdb;
    color: grey;
}
card-body{
 boder-top: 3px solid #dbdbdb;
 padding: 20px;
}
.title{
    font-size: 1.5rem;
    font-weight: 600;
}
img{
    width: 100%;
}
    </style>
`
window.customElements.define('card-container', CardComponent);