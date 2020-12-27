
const style = `
*{
    margin: 0;
    padding: 0;
}

.branch {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.container{
    background-color:#3c3a3b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    padding: 0 10%;
}
.logo, .user-infor{
    display: flex;
    align-items: center;
    color: #fff;
}
.logo img{
    height: 50px;
    /* color: #fff; */
    
}
.btn{
    background-color: transparent;
    border: none;
    color: #fff;
    outline: none;
    cursor: pointer;
}
.avatar{
    cursor: pointer;
    padding-right: 10px;
}
.username {
  color: white;
}

`
import { getDataFromDocs ,getDataFromDoc} from "../utils.js"
class StoryHeader extends HTMLElement {
  constructor() {
    super()
    this._shadowDom = this.attachShadow({ mode: "open" })
  }

  async connectedCallback() {
    this._shadowDom.innerHTML = `
        <style>
            ${style}
        </style>
        <div class="container">
            <div class="logo">
              <a href="#!/"><div class="branch">coffeeview</div></a>
            
            </div>
            <div class='searchBar'>
              <input type="text" id="myInput" placeholder="Search for names.." list="ProductsList" title="Type in a name">
              <input type="submit">
              <datalist id="ProductsList">

              </datalist>
            </div>


            ${
              window.localStorage.getItem("isLoggedIn") === "true"
                ? `<div class="user-info">
                <p class="username">Hello, ${
                  JSON.parse(window.localStorage.getItem("user")).username ||
                  "user"
                }!</p>
                <button class="btnLogOut" id="btnLogOut">Log Out</button>
            </div>`
                : `<div class="user-info">
              <a href="#!/login">
                <button class="buttonLogIn id="btnLogIn">Log In</button>
              </a>
            </div>`
            }
        </div>
        `
    // this._shadowDom
    //   .querySelector(".btnLogOut")
    //   .addEventListener("click", () => {
    //     localStorage.removeItem("user")
    //     localStorage.removeItem("isLoggedIn")
    //     location.reload()
    //   })

      const res = await firebase.firestore().collection('cafes').get()
      const data = getDataFromDocs(res)
      const listArr = []

      for (const iterator of data) {
        listArr.push(iterator.name)
        
      }
      console.log(listArr)
      let html =''
      let ProductsList = this._shadowDom.querySelector('#ProductsList')

      listArr.forEach(element =>{
        html+=`
          <option value="${element}" />
        `
      })
      ProductsList.innerHTML=`
        ${html}

      `
      console.log(ProductsList)

        
      }
  }
  

window.customElements.define("header-cafe", StoryHeader)
