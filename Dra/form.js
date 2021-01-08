
import { getItemLocalStorage, uploadFileToStore } from "./utils.js";

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
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this._shadowRoot.innerHTML = `
        <style>${style}</style>
            <form action="" id="create-post">
            name <input type="text" name="" id="name">
            <br>
            address <input type="text" name="" id="address">
            <br>
            district: <input type="text" name="" id="district">
            <br>
            gio mo cua <input type="text" name="" id="hours">
            <br>
            phone<input type="text" name="" id="phone">
            <br>
            review <input type="text" name="" id="review">
            <br>
            reviews <input type="number" name="reviews" id="reviews">
            <br>
            price<input type="number" name="reviews" id="price">
            <br>
            rating<input type="number" name="reviews" id="rating">
            <br>
            <h4>Fearture/trang bị</h4>
            <input type="radio" name="park" id="park" class="style> Chỗ để xe
            <br>
            <input type="radio" name="floor" id="floor" class="style> Không gian hai tầng
            <br>
            <input type="radio" name="outdoor" id="outdoor" class="style> Ban công ngoài tròi
            <br>
            <input type="radio" name="workingspace" id="workingspace" class="style> Khong gian làm viec
            <br>
            <h4>Decor/phong cách trang trí</h4>
            <input type="radio" name="style" id="vintage"> Vintage
            <br>
            <input type="radio" name="style" id="moderm"> Moderm
            <br>
            <input type="file" name="file" id="file">
            <input type="file" name="file" id="file">
            <input type="file" name="file" id="file">
           <button class="post-btn">Post</button>
           </form>
        `


        const postForm = this._shadowRoot.querySelector('#create-post');
        const postContentInput = this._shadowRoot.querySelector('#content');

        let namess = this._shadowRoot.getElementById("name");
        let address = this._shadowRoot.getElementById("address")
        let district = this._shadowRoot.getElementById("district")
        let hours = this._shadowRoot.getElementById("hours");
        let fearture= this._shadowRoot.querySelectorAll(".style");
        let style1= this._shadowRoot.querySelectorAll("#vintage")
        let style2= this._shadowRoot.querySelectorAll("#modern")
        let phone = this._shadowRoot.getElementById("phone");
        let price = this._shadowRoot.getElementById("price");
        let rating = this._shadowRoot.getElementById("price");
        let review = this._shadowRoot.getElementById("review");
        let reviews = this._shadowRoot.getElementById("reviews");

        let stylecafe
        if(style1.checked) stylecafe= "vintage"
        if(style1.checked) stylecafe= "modern"
        postForm.addEventListener('submit', async(e) => {
            e.preventDefault();
           
           
            //const currentUser = getItemLocalStorage('currentUser');
            let cafe = {
                address: address.value,
                district: district.value,
                hours: hours.value,
                style: stylecafe,
                phone: phone.value,
                price: price.value,
                rating: rating.value,
                review: review.value,
                reviews: reviews.value,
                name: namess.value
            }
            const respon= await firebase.firestore().collection('posts').add(cafe);
            let img= postForm.file.files;
            if(img.length > 0)

            {
                const image= img;
                console.log(image);
                let url = await uploadFileToStore(image);
                this.updateListFile(url, respon.id);
            }
          
          


        })
       
    }
    updateListFile(url, res)
    {
        const dateUpdate= {
            file: firebase.firestore.FieldValue.arrayUnion(url)

        }
        firebase.firestore().collection('posts').doc(res).update(dateUpdate);
    }

}
window.customElements.define('form-cafe', CreatePot);