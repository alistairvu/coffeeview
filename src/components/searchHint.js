import { getDataFromDocs, getDataFromDoc } from "../utils.js";
const style = `
  .searchBar{
    
  }
  input{
    height:30px;
  }
  
  #submit-btn{
    border-radius:2em;
    
    
  }
  img{
    max-height: 30px;
    max-width: 30px;
  }
`;
class SearchHint extends HTMLElement {
  constructor() {
    super();
    this._shadowDom = this.attachShadow({ mode: "open" });
  }
  async connectedCallback() {
    this._shadowDom.innerHTML = `
            <style>
                ${style}
            </style>
                <div class='searchBar'>
                  <input type="text" id="myInput" placeholder="Search for names.." list="ProductsList" title="Type in a name">
                  
                  <button id= "submit-btn"> <img src="https://www.flaticon.com/svg/static/icons/svg/2089/2089805.svg" alt="icon search"></button>
                  <datalist id="ProductsList" id-list="">
    
                  </datalist>
                </div>
            `;
    const res = await firebase.firestore().collection("cafes").get();
    const data = getDataFromDocs(res);
    const listArr = [];

    for (const iterator of data) {
      listArr.push(iterator.name);
    }
    let html = "";
    let ProductsList = this._shadowDom.querySelector("#ProductsList");

    listArr.forEach((element) => {
      html += `
              <option value="${element}" />
            `;
    });
    ProductsList.innerHTML = `
            ${html}
          `;
    //   check and give result
    let textSearch = this._shadowDom.querySelector("#myInput");

    textSearch.addEventListener("keyup", async () => {
    try {
      const nameSearch = textSearch.value;
      console.log(nameSearch);
      // let firstRun = ''
      const result = await firebase
        .firestore()
        .collection("cafes")
        .where("name", "==", nameSearch)
        .get();

      const id = result.docs[0].id

      const searchBtn = this._shadowDom.getElementById("submit-btn")
      searchBtn.addEventListener("click", (e) => {
        e.preventDefault()
        router.navigate(`/cafe/${id}`)
      })
    } catch (e) {
      console.error(e)
    }
    });
    //   const result = await firebase.firestore().collection('cafes').where('name', '==' ,  textSearch).get()
  }
}
window.customElements.define("search-hint", SearchHint);
