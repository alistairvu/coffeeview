
import { getItemLocalStorage } from "../utils.js";
import { redirect } from "../index.js";
class CreatePot extends HTMLElement{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
      }
      connectedCallback() {
        this._shadowRoot.innerHTML = `
            
            <div class="post-creator-container">
                <form id="post-form">
                    <textarea id="post-content" name="post-content" cols="50" rows="5" placeholder="Say something"></textarea> <br>
                    <button id="post-btn" type="submit" disabled>Post</button>
                </form>
            </div>
        `

        const postForm = this._shadowRoot.querySelector('#post-form');
        const postContentInput = this._shadowRoot.querySelector('#post-content');

        postContentInput.onkeyup = () => {
            const postContent = postContentInput.value.trim();
            if (postContent.length > 0)
                this._shadowRoot.querySelector('#post-btn').removeAttribute('disabled');
            else
               this._shadowRoot.querySelector('#post-btn').setAttribute('disabled', true);
        }

        postForm.addEventListener('submit', e => {
            e.preventDefault();
            const currentUser = getItemLocalStorage('currentUser');
            const newPost = {
                'userID': currentUser.id,
                'content': postContentInput.value,
                'createdDate': new Date().toISOString()
            }
            firebase.firestore().collection('posts').add(newPost);
            redirect('story');
        })
    }
      
}
window.customElements.define('create-post',CreatePot);