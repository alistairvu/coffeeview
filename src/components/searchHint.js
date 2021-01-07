import { getDataFromDocs } from "../utils.js"
const style = `
@import url(https://fonts.googleapis.com/css?family=Open+Sans);



.searchBar {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #000000;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #010101;
}

.searchTerm:focus{
  color: #010101;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 3px solid #000000;
  
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap{
  width: 100%;
  
}
`
class SearchHint extends HTMLElement {
  constructor() {
    super()
    this._shadowDom = this.attachShadow({ mode: "open" })
  }
  async connectedCallback() {
    this._shadowDom.innerHTML = `
            <style>
                ${style}
            </style>
            <div class="wrap">
                <div class='searchBar'>
                  <input type="text" class="searchTerm" id="myInput" list="ProductsList" title="Type in a name" placeholder="Nhập tên quán">
                  <button type="submit" class="searchButton" id= "submit-btn"><img src="https://www.flaticon.com/svg/static/icons/svg/751/751463.svg" alt="icon search"></button>
                  <datalist id="ProductsList" id-list="">
    
                  </datalist>
                </div>
                </div>
            `
    let html2 = `<div class="wrap">
    <div class="search">
       <input type="text" class="searchTerm" placeholder="What are you looking for?">
       <button type="submit" class="searchButton">
         <i class="fa fa-search"></i>
      </button>
    </div>
 </div>`
    const res = await firebase.firestore().collection("cafes").get()
    const data = getDataFromDocs(res)
    const listArr = []

    for (const iterator of data) {
      listArr.push(iterator.name)
    }
    let html = ""
    let ProductsList = this._shadowDom.querySelector("#ProductsList")

    listArr.forEach((element) => {
      html += `
              <option value="${element}" />
            `
    })
    ProductsList.innerHTML = `
            ${html}
          `
    //   check and give result
    let textSearch = this._shadowDom.querySelector("#myInput")

    textSearch.addEventListener("keyup", async () => {
      try {
        const nameSearch = textSearch.value
        console.log(nameSearch)
        // let firstRun = ''
        const result = await firebase
          .firestore()
          .collection("cafes")
          .where("name", "==", nameSearch)
          .get()

        const id = result.docs[0].id

        const searchBtn = this._shadowDom.getElementById("submit-btn")
        searchBtn.addEventListener("click", (e) => {
          e.preventDefault()
          router.navigate(`/cafe/${id}`)
        })
      } catch (e) {
        console.error(e)
      }
    })
    //   const result = await firebase.firestore().collection('cafes').where('name', '==' ,  textSearch).get()
  }
}
window.customElements.define("search-hint", SearchHint)
