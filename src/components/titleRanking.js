const style = `
<style>
</style>`
export class TitleRanking extends HTMLElement {
  constructor() {
    super()
    this._shadowDom = this.attachShadow({ mode: "open" })
  }
  connectedCallback() {
    this.name = this.getAttribute("name")
    console.log(this.name)
    //this.rank=this.getAttribute('rank')
    this.address = this.getAttribute("address")
    this.price = this.getAttribute("price")
    this.feature = this.getAttribute("feature")
    this._shadowDom.innerHTML = ``
  }
  static async listenCollectionChange(idList) {
    for (let id in idList) {
      let cafe = await getOneDocument(idList[id])
      const postItem = document.createElement("title-ranking")
      postItem.setAttribute("name", cafe.name)
      postItem.setAttribute("price", cafe.price)
      postItem.setAttribute("address", cafe.address)
      console.log(postItem)
    }
  }
}
window.customElements.define("title-ranking", TitleRanking)
