import { uploadFileToStore } from "../utils.js"

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
  .container {
    width: 60vw;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 729px) {
    .container {
      width: 100%;
    }
  }
`

class CreatePot extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = `
        <style>${style}</style>
        <div class="container" style="text-align: center;">
            <form action="" id="create-post">
            Tên quán: <input type="text" name="" id="name">
            <br>
            Địa chỉ: <input type="text" name="" id="address">
            <br>
            Quận: <input type="text" name="" id="district">
            <br>
            Giờ mở cửa: <input type="text" name="" id="hours">
            <br>
            Số điện thoại:<input type="text" name="" id="phone">
            <br>
            <h4>Feature/trang bị</h4>
            <input type="radio" name="park" id="park"> Chỗ để xe
            <br>
            <input type="radio" name="floor" id="floor"> Không gian hai tầng
            <br>
            <input type="radio" name="outdoor" id="outdoor"> Ban công ngoài tròi
            <br>
            <input type="radio" name="workingspace" id="workingspace"> Không gian làm việc
            <br>
            <h4>Phong cách trang trí</h4>
            <input type="radio" name="style" id="vintage"> Vintage
            <br>
            <input type="radio" name="style" id="moderm"> Modern
            <br>
            <input type="file" name="file" id="file">
            <input type="file" name="file" id="file">
            <input type="file" name="file" id="file">
           <button class="post-btn">Post</button>
           </form>
          </div>
          
        `

    const postForm = this._shadowRoot.querySelector("#create-post")

    let name = this._shadowRoot.getElementById("name")
    let address = this._shadowRoot.getElementById("address")
    let district = this._shadowRoot.getElementById("district")
    let hours = this._shadowRoot.getElementById("hours")
    let fearture = this._shadowRoot.querySelectorAll(".style")
    let style1 = this._shadowRoot.querySelectorAll("#vintage")
    let style2 = this._shadowRoot.querySelectorAll("#modern")
    let phone = this._shadowRoot.getElementById("phone")
    let price = this._shadowRoot.getElementById("price")
    let rating = this._shadowRoot.getElementById("price")
    let review = this._shadowRoot.getElementById("review")
    let reviews = this._shadowRoot.getElementById("reviews")

    let stylecafe
    if (style1.checked) stylecafe = "vintage"
    if (style1.checked) stylecafe = "modern"
    postForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      //const currentUser = getItemLocalStorage('currentUser');
      let cafe = {
        address: address.value,
        district: district.value,
        hours: hours.value,
        style: stylecafe,
        phone: phone.value,
        price: price.value,
        rating: 0,
        review: 0,
        reviews: 0,
        name: name.value,
      }
      const respon = await firebase.firestore().collection("cafes").add(cafe)
      let img = postForm.file.files
      if (img.length > 0) {
        const image = img
        console.log(image)
        let url = await uploadFileToStore(image)
        this.updateListFile(url, respon.id)
      }
    })
  }
  updateListFile(url, res) {
    const dateUpdate = {
      file: firebase.firestore.FieldValue.arrayUnion(url),
    }
    firebase.firestore().collection("posts").doc(res).update(dateUpdate)
  }
}
window.customElements.define("form-cafe", CreatePot)
