import { redirect } from "..";
import { addDocumentPost, getItemLocalStorage } from "../utils";

class CreatePot extends HTMLElement{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
      }
      connectedCallback() {
        this._shadowRoot.innerHTML = `
        <form action="" id="create-post">
        <textarea name="content" onkeyup="checkInput()" cols="30" rows="4"></textarea>
        <button class="post-btn">Post</button>
        </form>
        `
        const postForm= this._shadowRoot.querySelectorAll("#create-post");
        const postContent= this._shadowRoot.querySelectorAll("#content");
        const btn= this._shadowRoot.querySelectorAll('#post-btn');
        postContent.onkeyup = () =>{
          const content = postContent.value.trim();
          if (content.length > 0)
             btn.removeAttribute('disabled');
          else
             btn.setAttribute('disabled', true);
        }
        btn.addEventListener("click", async (e) => {
          e.preventDefault();
          const currentUser= getItemLocalStorage('currentUser');
          const newPost = {
            "userId": currentUser.id,
            'content': postContent.value,
            'createDate': new Date().toISOString()
          }
          addDocumentPost(newPost);
          redirect('story');

        });
        
      }
      
}
window.customElements.define('create-post',CreatePot);