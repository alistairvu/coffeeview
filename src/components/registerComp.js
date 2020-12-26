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

class Register extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <h1>SIGN UP</h1>
      <form id="register-form">
        <input type="text" id="firstName" placeholder="First name" />
        <br />
        <input type="text" id="lastName" placeholder="Last name" />
        <br />
        <input type="text" id="username" placeholder="Username" />
        <br />
        <input type="text" id="email" placeholder="Email" />
        <br />
        <input type="password" id="password" placeholder="Password" />
        <br />
        <input type="password" id="passwordCf" placeholder="Confirm password" />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>`

    this._shadowRoot
      .getElementById("register-form")
      .addEventListener("submit", async (e) => {
        e.preventDefault()

        const email = this._shadowRoot.getElementById("email").value
        const firstName = this._shadowRoot.getElementById("firstName").value
        const lastName = this._shadowRoot.getElementById("lastName").value
        const username = this._shadowRoot.getElementById("username").value
        const password = this._shadowRoot.getElementById("password").value
        const passwordCf = this._shadowRoot.getElementById("passwordCf").value

        if (
          !email ||
          !firstName ||
          !lastName ||
          !username ||
          !password ||
          !passwordCf
        ) {
          alert("Please enter all fields!")
          return
        }

        const newUser = {
          name: `${firstName} ${lastName}`,
          email,
          username,
          password: CryptoJS.MD5(password).toString(CryptoJS.enc.Base64),
        }
        const collection = await firebase.firestore().collection("users")
        collection.add(newUser)

        const currentUser = { username, password }
        window.localStorage.setItem("user", JSON.stringify(currentUser))
        window.localStorage.setItem("isLoggedIn", "true")
        alert("Sign up successful!")
        router.navigate("/")
      })
  }
}

window.customElements.define("register-comp", Register)
