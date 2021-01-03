const style = `
.container{
    width: 60vw;
        margin:  auto;
}
.row{
    display:flex;
    padding: 10px 0;
}
.column{
    width: 32.5%;
    padding-right: 1%;
}
img{
    width:100%;
}
`
class GridImg extends HTMLElement {
  constructor() {
    super()
    this._shadowDom = this.attachShadow({ mode: "open" })
  }
  async connectedCallback() {
    const key = this.getAttribute("key")
    const collection = await firebase.firestore().collection("cafes")
    const res = await collection.doc(key).get()
    const { images, img } = res.data()
    // console.log(images)
    // if (images) {
    //     images.map(img => display.push(img))
    // }
    // console.log(res)
    this._shadowDom.innerHTML = `
        <style>${style}</style>
        <div class="container"> 
            <div class="row">
                <div class="column">
                    <img src="${img}">
                    <img src="${images[1] || ""}">
                </div>
                <div class="column">
                    <img src="${images[0] || ""}">
                </div>
                <div class="column">
                    <img src="${images[2] || ""}">
                    <img src="${images[3] || ""}">
                </div>
            </div>
        </div>


        `
  }
}
window.customElements.define("grid-images", GridImg)
