const styles = `
<style>
      * {
        margin: 0;
        padding: 0;
      }

      .container {
        width: 60vw;
        margin: 10px auto;
        padding: 5px;
      }
    </style>`

class Login extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <h1>LOG IN</h1>
      <form id="login-form">
        <input type="text" id="username" placeholder="Username"></input>
        <br />
        <input type="password" id="password" placeholder="Password"></input>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>`

    this._shadowRoot
      .getElementById("login-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault()
        const username = this._shadowRoot.getElementById("username").value
        const passwordRaw = this._shadowRoot.getElementById("password").value

        if (username.length == 0 || passwordRaw.length == 0) {
          alert("Please fill in both fields")
          return
        }

        const password = CryptoJS.MD5(passwordRaw).toString(CryptoJS.enc.Base64)
        const collection = await firebase.firestore().collection("users")
        const res = await collection
          .where("username", "==", username)
          .where("password", "==", password)
          .get()

        if (res.empty) {
          alert("Incorrect username or password!")
          return
        }

        const currentUser = { username, password }
        window.localStorage.setItem("user", JSON.stringify(currentUser))
        window.localStorage.setItem("isLoggedIn", "true")
        alert("Login successful!")
        router.navigate("/")
      })
  }
}

window.customElements.define("login-comp", Login)
