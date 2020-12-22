class ResultList extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
    <div class="container">
      <result-card 
        img="https://images.foody.vn/res/g69/688220/prof/s/foody-mobile-21463229_17672929133-461-636409132441098086.jpg"
        name="Starbucks Charmvit"
        rating="4.0"
        reviews="116"
        address="Charm Vit Tower A, 117 Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội"
        review="It's Starbucks as usual but in a lousy environment. Recommend for
        take away only."></result-card>
      <result-card 
        img="https://images.foody.vn/res/g69/688220/prof/s/foody-mobile-21463229_17672929133-461-636409132441098086.jpg"
        name="Starbucks Charmvit"
        rating="4.0"
        reviews="116"
        address="Charm Vit Tower A, 117 Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội"
        review="It's Starbucks as usual but in a lousy environment. Recommend for
        take away only."></result-card>
     </div>`
  }
}

window.customElements.define("result-list", ResultList)
