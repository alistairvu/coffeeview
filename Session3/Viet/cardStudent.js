const style=`
<style>
.card{
    font-family: sans-serif;
    margin-right: 20px;
    border: 1px solid #dbdbdb;
    display: flex;
    justify-content: space-around;
}
.card-body{
    border: 3px solid #dbdbdb
    padding: 20px;
}
</style>
`



class CardStudent extends HTMLElement{
    constructor(){
        super()
        this._shadowDom = this.attachShadow({mode: 'open'})
        this.className = this.getAttribute("classN")
        this.fullName = this.getAttribute("name")
        this.age = this.getAttribute("age")
        this.address = this.getAttribute("address")
        this._shadowDom.innerHTML = `
        ${style}
        <div class = "card">
        <div class="card-body">
        <div class="className">${this.className}</div>
        <div class="fullName">${this.fullName}</div>
        <div class="age">${this.age}</div>
        <div class="address">${this.address}<div>
        </div>
        </div>
        `
    }
} 
window.customElements.define("card-container", CardStudent)