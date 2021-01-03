const style = `<style>
 ul {
     display: inline-grid;
     grid-auto-flow: row;
     grid-gap: 24px;
     justify-items: center;
     margin: auto;
 }

 @media (min-width: 500px) {
     ul {
         grid-auto-flow: column;
     }
 }

 a {
     color: white;
     text-decoration: none;
     box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
 }

 a:hover {
     box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
 }

 li:last-child {
     grid-column: 1 / 2;
     grid-row: 1 / 2;
 }

 li:hover~li p {
     animation: wave-animation 0.3s infinite;
 }

 /* below is just for demo styling */

 div {
     display: flex;
     height: 30vh;
     width: 100%;
     background-color: #000000;
     line-height: 1.3;
     font-family: Menlo, monospace;
     margin: 50 px
 }

 @keyframes wave-animation {

     0%,
     100% {
         transform: rotate(0deg);
     }

     25% {
         transform: rotate(20deg);
     }

     75% {
         transform: rotate(-15deg);
     }
 }
</style>`
class FooterCafe extends HTMLElement {
  constructor() {
    super()
    this._shadowDom = this.attachShadow({ mode: "open" })
  }
  connectedCallback() {
    this._shadowDom.innerHTML = `
          ${style}
          <footer>
        <div>
            <ul>
              <li><a href="https://www.facebook.com/Coffeeview-107183727985156">Facebook</a></li>
              <li><a href=>About us</a></li>
              <li><a href="nhathoangn06@gmail.com">Email</a></li>
              <li><a href="https://github.com/alistairvu/coffeeview">Github</a></li>
              <li><a href="#!/create">Admin page</a></li>
              <li>
                <p>👋</p>
              </li>
            </ul>
          </div>
    </footer>
          `
  }
}
window.customElements.define("footer-cafe", FooterCafe)
