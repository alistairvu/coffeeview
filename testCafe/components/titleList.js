import { getDataFromDoc, getDataFromDocs } from "./utils.js"

export class titleList extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot=this.attachShadow({mode:'open'})
    }
    async connectedCallback(){
        const res=await firebase.firestore().collection('posts').where('isShow','==',true).get()
        this.listenCollectionChange()
        const listPost=getDataFromDocs(res)
        let html=''
        listPost.forEach(element=>{
           
            html+=`
        
            <post-item time="${element.createdAt}" author="${element.authorName}" content="${element.content}" img="${imgSrc}"></post-item>`
        })
        
        this._shadowRoot.innerHTML=`
        <div class="list-posts">${html}</div>
        `
    }
    static listenCollectionChange(idList){
        for (let id in idList){
          console.log(id)  
        }
    }
    appendPostItem(data){
        const postItem=document.createElement('post-item')
        postItem.setAttribute('time',data.createdAt)
        postItem.setAttribute('author',data.authorName)
        postItem.setAttribute('content',data.content)
        const parent=this._shadowRoot.querySelector('.list-posts')
        parent.insertBefore(postItem,parent.firstChild)
    }
}
window.customElements.define('title-list',TitleList)