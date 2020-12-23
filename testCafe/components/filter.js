
const style=`
    <style>
    #filter-card{
        width:30%
       
    }
    </style>
`
import {TitleRanking} from './titleRanking.js'
import{getDataFromDocs}from './utils.js'
export class Filter extends HTMLElement{
    constructor(){
        super()
        this._shadowDom=this.attachShadow({mode:'open'})
    }
    connectedCallback(){
        this._shadowDom.innerHTML=`
        ${style}
        <form id="filter-card">
            <h1>Filter</h1>
            <div>
                <h3>Địa điểm</h3>
                <div><input type="checkbox" name="address" value="Hai Bà Trưng" id="Hai Bà Trưng"><label for="Hai Bà Trưng">Hai Bà Trưng</label></div>
                <div><input type="checkbox" name="address" value="Hoàn Kiếm" id="Hoàn Kiếm"><label for="Hoàn Kiếm">Hoàn Kiếm</label></div>
                <div><input type="checkbox" name="address" value="Đống Đa" id="Đống Đa"><label for="Đống Đa">Đống Đa</label></div>
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
        `
        let allCheckboxes = this._shadowDom.querySelectorAll('input[type=checkbox]');        
        allCheckboxes.forEach((box) => {
            box.checked = false;
            box.addEventListener("change", () => filterCards());
      });
        function grabCheckboxValues() {
        let criteria={}
        allCheckboxes.forEach((checkbox) => {
              if (checkbox.checked) 
              {
                 criteria[checkbox.name]=criteria[checkbox.name]?criteria[checkbox.name]:[]
                 criteria[checkbox.name].push(checkbox.value)
              }     
        })     
        return criteria
  }
  async function filterCards() {
    let checkboxValues = grabCheckboxValues();
    const result= await checkCafe()  
    let idList=[]
        for (let k of result.keys()){            
            let cafe=result[k] 
            for (let key in checkboxValues){
               if(key!=='feature' && checkboxValues[key].includes(cafe[key])){
                cafe.check=true
               }
               else if(key=='feature' && checkboxValues[key].every(function(val)
               {return cafe[key].includes(val)}    
               ))
               {
                cafe.check=true   
            }
               else{
                cafe.check=false
                break
               }
            } 
            if(cafe.check===true){               
                idList.push(cafe.id)
            }         
        }     
        console.log(idList)    
        TitleRanking.listenCollectionChange(idList)   
}
async function checkCafe(){
    const res=await firebase.firestore().collection('cafes').get()
    const cafe=getDataFromDocs(res) 
    return cafe
   }
}
}
window.customElements.define('filter-card',Filter)