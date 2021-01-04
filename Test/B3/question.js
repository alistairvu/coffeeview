class Question extends HTMLElement {
    
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        let question = this.getAttribute("question");
        let a = this.getAttribute('a');
        let b = this.getAttribute('b');
        let c = this.getAttribute('c');
        let d = this.getAttribute('d');
        let correct = this.getAttribute('correct');

        this._shadowRoot.innerHTML=`
        <h3>  ${question}</h3>
        <input type='radio' class='options' name='options' value='${a}'> ${a} <br>
        <input type='radio' class='options' name='options' value='${b}'> ${b} <br>
        <input type='radio' class='options' name='options' value='${c}'> ${c} <br>
        <input type='radio' class='options' name='options' value='${d}'> ${d} <br>`
        
      

        let options = this._shadowRoot.querySelectorAll(".options");
        for (let i = 0; i < options.length; i++) {
            let option;
            if (options[i].checked) {
                option = options[i].value;
            }

            if (option == correct) {
               alert("Ban da dung")
            }

        }
    }
}
window.customElements.define('question-item', Question)