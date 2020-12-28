
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
import "./searchHint.js" 
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
            <search-hint></search-hint>


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
  
      }
  }
  

window.customElements.define("header-cafe", StoryHeader)
