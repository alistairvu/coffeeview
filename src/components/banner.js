const styles = `
<style>
* {
  margin: 0;
  padding: 0;
}
@media (max-width: 729px) {
  h1 {
    font-size:200%;
  }
}
.container {
  width: 100%;
  height: calc(100vh - 64px);
  position: relative;
  text-align: center;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/hanoi-coffee.appspot.com/o/anh-nguyen-HycIct9V-DM-unsplash.jpg?alt=media&token=6b885c13-e953-4603-a0ca-0d7e5080d897");
  background-size: cover;
  
  z-index: 1;
}

.content {
 
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5); 
  padding: 10px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  text-transform: uppercase;
  color: black;
  font-size:500%;
  z-index: 2;
  opacity:1 !important
}

.explore-btn {
  background-color: white;
  color: black;
  font-family: "Oswald";
  padding: 5px;
  font-size: 100%;
  background-color: #f5f5f5;
  border: none;

}

.explore-btn:hover {
  background-color: #ebebeb;
}

.explore-btn:focus, .explore-btn:active {
  outline: none;
}
</style>`

class Banner extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    ${styles}
    <div class="container">
      <div class="content">
        <h1>Tìm quán cafe <br /> trong mơ của bạn</h1>
        <button class="explore-btn"><b>KHÁM PHÁ</b></button> 
    </div>
    </div>`

    this._shadowRoot
      .querySelector(".explore-btn")
      .addEventListener("click", () => {
        router.navigate("/cafe")
      })
  }
}

window.customElements.define("intro-banner", Banner)
