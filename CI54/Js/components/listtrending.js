import { getDataFromDocs, getDataFromDoc } from "../utils.js";
const style=``;
class TopTrend extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    async connectedCallback(){
        const res = await firebase.firestore().collection('cafes').get();
        const listcafe= getDataFromDocs(res);
        let html= ``;
        console.log(listcafe);
        for (const iterator of listcafe) {
            html += `
            <item-trend img='${iterator.img}' district='${iterator.district}' name='${iterator.name}' price='${iterator.price}' ranking='${iterator.reviews}'></item-trend>
            `
        }
        console.log(listcafe);
        this._shadowRoot.innerHTML=`
        <style>${style}</style>
        <div class='top-trend'>
         ${html}
         </div>
        `

    }

}
window.customElements.define("top-trend", TopTrend);