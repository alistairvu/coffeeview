import { getDataFromDocs, getDataFromDoc } from "../utils.js";

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
         </div>
        `
    }
    listenCollectionChange() {
        let firstRun = true;
        firebase.firestore().collection('posts').where('isShow', '==', true).onSnapshot((snapShot) => { // khi isShow chuyen sang true se dc day ve, khi false se khong thao man dk lang nghe
            if (firstRun) {
                firstRun = false;
                return;
            }
            let docChange = snapShot.docChanges();
            for (const iterator of docChange) {
                if (iterator.type === 'added') {
                    console.log(getDataFromDoc(iterator.doc));
                    this.appendPostitem(getDataFromDoc(iterator.doc))
                }
            }
        });
    
    }
    appendPostitem(data){
        // them bai viet vao lisst
        const postitem= document.createElement("post-item") // tao mot element <post-item>
        postitem.setAttribute("time", data.createdDate);
        postitem.setAttribute("author",data.authorName);
        postitem.setAttribute("content", data.content);
        // const parent=this._shadowRoot.querySelector(".list-post")
        // parent.insertBefore(postitem, parent.firstChild);
        this._shadowRoot.querySelector(".list-post").insertBefore(postitem, this._shadowRoot.querySelector(".list-post").firstChild);

    }
}
window.customElements.define("list-post", ListPost);