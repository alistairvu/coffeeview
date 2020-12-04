
// class CardStudent extends HTMLElement{
//     constructor(){
//         super()
//         this._shadowDom = this.attachShadow({mode: 'open'})
//         this.className = this.getAttribute("classN")
//         this.fullName = this.getAttribute("name")
//         this.age = this.getAttribute("age")
//         this.address = this.getAttribute("address")
//         this._shadowDom.innerHTML = `
       
//         <div class = "card">
//         <div class="card-body">
//         <div class="className">${this.className}</div>
//         <div class="fullName">${this.fullName}</div>
//         <div class="age">${this.age}</div>
//         <div class="address">${this.address}<div>
//         </div>
//         </div>
//         `
//     }
// } 
// window.customElements.define("card-container", CardStudent)

class CardComponent extends HTMLElement {
    constructor() {
        super(); //khai báo shadow dom
        this._shadowDom = this.attachShadow({mode: 'open'})
        this.className = this.getAttribute("classN")
        this.name = this.getAttribute("name")
        this.age = this.getAttribute("age")
        this.placeofBirth = this.getAttribute("address")
        this._shadowDom.innerHTML =
            `
            ${style}
        
        <p>---------------------------------------------</p>
        <p>    Class: ${this.className}</p>
        <p>    Name: ${this.name}</p>
        <p>    Age: ${this.age}</p>
        <p>    Place of birth: ${this.placeofBirth}</p>
        <p>---------------------------------------------</p>
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