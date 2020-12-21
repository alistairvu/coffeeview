import {redirect} from '../index.js'
import { removeItemLocalStorage } from '../utils.js'

const style= `<style>
*{
    margin: 0;
    padding: 0;
}
.container {
   background-color: #1976D2;
   display: flex;
   height: 40px;
   align-items: center;
   justify-content: space-between;
   padding: 0 5%;
}

.logo img {
    vertical-align: middle;
    width: 60px;
    height: 60px;
    border-radius: 50%;

}
.logo {
    display: flex;
    align-items: center;
}
.user-info{
    display: flex;
}
.branch{
    font-size: 1.5rem;
    color: #ffffff;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 600;
}
.btn{
    cursor: pointer;
    background-color: transparent;
    border:  none;
    margin-left: 20px;
    outline: none;
}
</style>`
class StoryHeader extends HTMLElement{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
      }
      connectedCallback() {
        this._shadowRoot.innerHTML = `
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,500;1,400;1,600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        ${style}
        <div class="container">
        <div class="logo">
            <img src="https://m1.behance.net/rendition/modules/119990519/disp/b0b34d5f217137f65db6f5ab21851439.png" alt="Ảnh logo">
            <div class="branch">Share story</div>
        </div>
        <div class="user-info">
            <div class="avatar"><i class="fa fa-user-circle-o" aria-hidden="true"></i></div>
            <button id="btn">Log out</button>
        </div>
    </div>
        `
         this._shadowRoot.getElementById("btn").addEventListener("click", (e) => {
             redirect("login");
             removeItemLocalStorage('currentUser', null);
         });
       
      }
      

}
window.customElements.define('story-header',StoryHeader)