const style= `.post-item{
    border: 1px solid #dbdbdb;
    padding: 20px;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin-bottom: 15px;
}
.author-name {
    font-weight: bold;
    margin-bottom: 10px;
}
.time{
    font-size: 10px;
    margin-bottom: 10px;
}`
import { convertDate } from "../utils.js";
class PostItem extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }
   connectedCallback() {
       this.author= this.getAttribute("author");
       this.time= this.getAttribute("time");
       this.content= this.getAttribute("content");
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class="post-item">
        <div class="author-name">${this.author}</div>
        <div class="time">${convertDate(this.time)}</div>
        <div class="content">
           ${this.content}
        </div>
    </div>
        `

    }
}
window.customElements.define("post-item", PostItem);