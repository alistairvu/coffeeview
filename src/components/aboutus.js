const style= `@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

html {
  background-color: white;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
    }

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0px;
  padding: 0px;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  box-sizing:border-box;
}


.wrapper {
  display:flex;
  border:transparent solid;
  height:auto;
  justify-content:center;
}

.yo {
  background-image:url("https://www.flaticon.com/svg/static/icons/svg/924/924514.svg");
  background-repeat:no-repeat;
  width:100px;
  height:100px;
  margin:50px 10px 30px 50px;
  transition:0.3s ease;
  border:transparent solid;
  z-index:100;
}

.yo:hover ~ .bubble{
  transform:translateY(10px);
  transition:0.3s ease;
  opacity:0.3;
}

.bubble {
  background-image:url("https://image.flaticon.com/icons/svg/126/126501.svg");
  background-repeat:no-repeat;
  width:70px;
  height:auto;
  margin:0px 30px 0px 0px;
  transition:0.3s ease;
  border:transparent solid;
  transform:translateY(30px);
  opacity:0;
}

.text {
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  
  h1 {
    margin: 0 40px 0 0;
    color:#000000;
  }
  
  p {
    padding:0px 0px;
    margin:40px 100px;
    font-size:15px;
    line-height:30px;
    letter-spacing:1.2px;
    overflow:hidden;
    
  }
}

.credits {
  color:grey;
  font-size:10px;
  margin: 100px 0;
  
  a {
    color:grey;
  }
}`
class AboutUs extends HTMLElement{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: "open" })
      }
      connectedCallback(){
          this._shadowRoot.innerHTML = `
         <style> ${style}</style>
          <div class="wrapper">
  
          <span class="yo"></span>
          <div class="bubble"></div>
        </div>
        
        <div class="text">
          <h1>HELLO</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        
        
        
        <div class="credits">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>`
      }
}
window.customElements.define("about-us", AboutUs);