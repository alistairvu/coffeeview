import { getDataFromDocs } from "../utils.js";

const style = `* {
    margin: 0;
    padding: 0;
}

.list-post {
    width: 60%;
    margin: auto;
    
}`
class ListPost extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {
        const res = await firebase.firestore().collection('posts').where('isShow', '==', true).get();
        this.listenCollectionChange()
        const listPost = getDataFromDocs(res);
        let html = ``;

        listPost.forEach(Element => {
            html += `
            <post-item time="${Element.createdDate}" author="${Element.authorName}" content="${Element.content}"></post-item>
            `
        })
        console.log(listPost);
        this._shadowRoot.innerHTML = `
        <style>${style}</style>
        <div class='list-post'>
         ${html}
         
        `
    }
    listenCollectionChange()
    {
       let  firstRun= true;
        firebase.firestore().collection('posts').where('isShow', '==', true).onSnapshot((snapShot) => {
            if(firstRun)
            {
                firstRun = false;
                return;
            }
            console.log('Snap shot', snapShot.docChanges());
        });
    }
}
window.customElements.define("list-post", ListPost);