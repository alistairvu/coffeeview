const style = `
    <style>
    @media (max-width: 729px) {
      #filter-card {
       padding:0;
       margin:0;

      }
       .container {
       padding:0;
       margin:0;
       width:100vw;
      }
    }
    #filter-card{
     margin:2vw;
     height:750px;
      
     padding:3vw;
     background-color:#f5f5f5;
    }
    .container{
      display:grid;
      margin-left:15vw;
      margin-right:15vw;
      grid-template-columns: 2fr 3fr;
     padding-top:2vh;
      color:black;
      background-color:white;
    }
    #result-list{

    }
    h3,h2{
      text-transform:uppercase;
      line-height:60%;
      padding-top:20px;
      
    }
    input,label{
      
      margin-left:10px;
    }
    input:checked {
    
    }
    </style>
`
class Filter extends HTMLElement {
  constructor() {
    super()
    this._shadowDom = this.attachShadow({ mode: "open" })
  }
  connectedCallback() {
    this._shadowDom.innerHTML = `
        ${style}
        <div class="container">
        <form id="filter-card">
            <div>
                <h3>Địa điểm</h3>
                <div><input type="checkbox" name="district" value="Cầu Giấy" id="Cầu Giấy"><label for="Cầu Giấy">Cầu Giấy</label></div>
                <div><input type="checkbox" name="district" value="Hoàn Kiếm" id="Hoàn Kiếm"><label for="Hoàn Kiếm">Hoàn Kiếm</label></div>
                <div><input type="checkbox" name="district" value="Đống Đa" id="Đống Đa"><label for="Đống Đa">Đống Đa</label></div>
                <div><input type="checkbox" name="district" value="Hai Bà Trưng" id="Hai Bà Trưng"><label for="Hai Bà Trưng">Hai Bà Trưng</label></div>
                <div><input type="checkbox" name="district" value="Tây Hồ" id="Tây Hồ"><label for="Tây Hồ">Tây Hồ</label></div>
            </div>
            <div>
                <h3>Mức giá</h3>
                <div><input type="checkbox" name="price" value="1" id="1"><label for="1">$</label></div>
                <div><input type="checkbox" name="price" value="2" id="2"><label for="2">$$</label></div>
                <div><input type="checkbox" name="price" value="3" id="3"><label for="3">$$$</label></div>
                <div><input type="checkbox" name="price" value="4" id="4"><label for="4">$$$$</label></div>
                <div><input type="checkbox" name="price" value="5" id="5"><label for="5">$$$$$</label></div>
              
            </div>
            <div>
                <h3>Style</h3>
                <div><input type="checkbox" name="style" value="modern" id="modern"><label for="modern">Modern</label></div>
                <div><input type="checkbox" name="style" value="vintage" id="vintage"><label for="vintage">Vintage</label></div>
            </div>
            <div>
                <h3>Feature</h3>
                <div><input type="checkbox" name="feature" value="Chỗ ngồi ngoài trời" id="hbt"><label for="starting">Chỗ ngồi ngoài trời</label></div>
                <div><input type="checkbox" name="feature" value="Chỗ để xe" id="Chỗ để xe"><label for="reserves">Chỗ để xe</label></div>
                <div><input type="checkbox" name="feature" value="Làm việc" id="Làm việc"><label for="reserves">Làm việc</label></div>
                <div><input type="checkbox" name="feature" value="Phòng họp" id="Phòng họp"><label for="reserves">Phòng họp</label></div>
                <div><input type="checkbox" name="feature" value="Hai tầng" id="Hai tầng"><label for="reserves">Hai tầng</label></div>
            </div>
        </form>
        <result-list id="result-list" id-list=""></result-list>
        
        </div>
        `
    const allCheckboxes = this._shadowDom.querySelectorAll(
      "input[type=checkbox]"
    )
    allCheckboxes.forEach((box) => {
      box.checked = false
      box.addEventListener("change", async () => {
        const idList = await this.filterCards()
        console.log(JSON.stringify(idList))
        this._shadowDom
          .getElementById("result-list")
          .setAttribute("id-list", JSON.stringify(idList))
      })
    })
  }

  async filterCards() {
    let checkboxValues = this.grabCheckboxValues()
    const result = await this.checkCafe()
    let idList = []
    for (let k of result.keys()) {
      let cafe = result[k]

      for (let key in checkboxValues) {
        console.log(cafe[key])
        if (key !== "feature" && checkboxValues[key].includes(cafe[key])) {
          cafe.check = true
        } else if (
          key == "feature" &&
          checkboxValues[key].every(function (val) {
            console.log(cafe[key])
            console.log(key)
            console.log(cafe)
            return cafe[key].includes(val)
          })
        ) {
          cafe.check = true
        } else {
          cafe.check = false
          break
        }
      }
      if (cafe.check === true) {
        idList.push(cafe.id)
      }
    }
    console.log(idList)
    return idList
  }

  grabCheckboxValues() {
    let criteria = {}
    const allCheckboxes = this._shadowDom.querySelectorAll(
      "input[type=checkbox]"
    )

    allCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        criteria[checkbox.name] = criteria[checkbox.name]
          ? criteria[checkbox.name]
          : []
        criteria[checkbox.name].push(checkbox.value)
      }
    })
    console.log(criteria)
    return criteria
  }

  async checkCafe() {
    const res = await firebase.firestore().collection("cafes").get()
    const docs = res.docs
    const cafe = docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    return cafe
  }
}
window.customElements.define("filter-screen", Filter)
