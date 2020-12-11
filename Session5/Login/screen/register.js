const style = `<style>
.register-container{
  width: 100vw;
  height: 100vh;
  background-image: url("https://images2.alphacoders.com/100/thumb-1920-1007550.jpg");
  background-size: conver;
  display: flex;
  justify-content:flex-end;
  background-repeat: no-repeat;
}
#register-form{
    width: 30%;
    height: 100vh;
    background-color: white;
}
h1{
    text-align: center;
    color: purple;
}
</style>`
class RegisterScreen extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this._shadowRoot.innerHTML = `
        ${style}
        <div class="register-container">
        <form id="register-form">
            <h1>CI Project</h1>
            <input-wrapper  id="first-name" type="text" placeholder="first name"></input-wrapper>
            <input-wrapper  id="last-name" type="text" placeholder="last name"></input-wrapper>
            <input-wrapper  id="email" type="email" placeholder="email"></input-wrapper>
            <input-wrapper  id="password" type="password"  placeholder="pass word"></input-wrapper>
            <input-wrapper  id="cfpassword" type="password"  placeholder="confirm pass word"></input-wrapper>
            <button>Register</button>
        </form>
      </div>
    
        `
        const registerForm = this._shadowRoot.getElementById("register-form");

        registerForm.addEventListener('submit', (e) => {
            e.preventDefault()
            let firstName = this._shadowRoot.getElementById("first-name").value;
            let lastName = this._shadowRoot.getElementById("last-name").value;
            let email = this._shadowRoot.getElementById("email").value;
            let password = this._shadowRoot.getElementById("password").value;
            let cf = this._shadowRoot.getElementById("cfpassword").value;
            let isValid = true;
            if (firstName.trim() === "") {
                isValid = false;
                this.setError("first-name", "Please input first name");
            }
            if (lastName.trim() === "") {
                isValid = false;
                this.setError("last-name", "Please input last name")
            }
            if (email.trim() === '') {
                isValid = false
                this.setError('email', 'Please input email')
            }
            if (password.trim() === '') {
                isValid = false
                this.setError('password', 'Please input password')
            }
            if (cf.trim() === '') {
                isValid = false
                this.setError('cfpassword', 'Please input confirm password')
            }
            if (password !== confirmPassword) {
                isValid = false
                this.setError('confirm-password', "Password didn't match")
            }
            if (!isValid) {
                return
            }
            const user = {
                fullName: firstName + ' ' + lastName,
                email: email,
                password: CryptoJS.MD5(password).toString()
            }
            // nếu email đã tồn tại rồi thì trả ra true
            const check = await this.checkEmailExist(email)
            if (check) {
                alert('Email đã được đăng ký')
            } else {
                firebase.firestore().collection('users').add(user)
                alert('Đăng ký thành công')
                redirect('login')
            }
        })
        this._shadowRoot.getElementById('redirect')
            .addEventListener('click', () => {
                redirect('login')
            })
    }
    setError(id, message) {
        this._shadowRoot.getElementById(id)
            .setAttribute('error', message)
    }
    async checkEmailExist(email) {
        const res = await firebase.firestore().collection('users')
            .where('email', '==', email).get()
        return !res.empty
    }




}
window.customElements.define("register-screen", RegisterScreen)

