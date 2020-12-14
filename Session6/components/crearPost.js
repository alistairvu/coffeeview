
import { getItemLocalStorage } from "../utils.js";
import { redirect } from "../index.js";
const style = `
#create-post textarea {
    width:  100%;
    border: 1px solid #dbdbdb ;
    border-radius:  10px;
    outline: none;
  }
  #create-post {
    width: 60%;
    margin:  auto;
    margin-top: 20px;
    text-align: right;
  }
  .post-btn{
    background-color: #1976D1;
    color: #fff;
    padding:  10px 15px;
    border-radius: 5px;
  }
`

class CreatePot extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this._shadowRoot.innerHTML = `
        <style>${style}</style>
            <form action="" id="create-post">
            <textarea name="content" id="content" cols="30" rows="6" placeholder="Say something"></textarea> <br>
           <button class="post-btn">Post</button>
           </form>
        `


        const postForm = this._shadowRoot.querySelector('#create-post');
        const postContentInput = this._shadowRoot.querySelector('#content');



        postForm.addEventListener('submit', e => {
            e.preventDefault();
            const content = postForm.content.value;
            if (content.trim() === "") {
                alert("Vui lòng nhập nội dung");
            }
            else {
                const currentUser = getItemLocalStorage('currentUser');
                const newPost = {
                    'userID': currentUser.id,
                    'content': content,
                    'createdDate': new Date().toISOString(),
                    'comment': [],
                    'authorName': currentUser.fullName ,
                    'isShow': true,
                }
                firebase.firestore().collection('posts').add(newPost);
                postForm.content.value= '';
            }
            
        })
    }

}
window.customElements.define('create-post', CreatePot);