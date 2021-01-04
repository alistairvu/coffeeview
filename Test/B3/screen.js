function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
   
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
   
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
   
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
   
    return array;
  }
class Screen extends HTMLElement{
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
    }
    async connectedCallback() {
        const  conn= await fetch(`https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`)
        const data=  await conn.json();
        const quiz= shuffle(data.results);
        let html= ``;
        for(let i=0; i<quiz.length; i++)
        
        {
            let option= quiz[i].incorrect_answers;
            option.push(quiz[i].correct_answer);
            option= shuffle(option);
            html+=`<question-item question="${quiz[i].question}" a= "${option[0]}" b= "${option[2]}" c= "${option[1]}" d= "${option[3]}" correct="${quiz[i].correct_answer}"></question-item>`
        }
        this._shadowRoot.innerHTML= `
        div
        ${html}`
    }
}
window.customElements.define("list-question", Screen);