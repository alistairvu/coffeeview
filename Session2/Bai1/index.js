import {Student} from './module.js'
import {Class} from './List.js'

const Hoang = new Student("Hoang", 15, "Vinh")
const MAnh = new Student("Khuat Quang Viet", 18, "Ha Noi");
MAnh.showInfo();
const PT05 = new Class();
PT05.addStudent(Hoang);
PT05.addStudent(MAnh);
let eighTeenplus = PT05.findbyAgeAndPlaceofBirth(18, "Ha Noi");
let fifTeen = PT05.findbyAge(15);
console.log(fifTeen)
console.log(eighTeenplus)

//nhập dữ liệu
const getAge = document.getElementById("age");
const getName = document.getElementById("name");
const getPlaceofBirth = document.getElementById("placeofBirth");

const save = document.getElementsByClassName("save");
const find = document.getElementsByClassName("find");

save[0].addEventListener("click", (e) => {
    console.log(e);
    let input = new Student(getName.value, getAge.value, getPlaceofBirth.value);
    PT05.addStudent(input);
    console.log(PT05);
})
find[0].addEventListener("click", (e) => {
    let input = getName.value;
    let res = PT05.findbyName(input);
    let container = document.getElementsByClassName("container")
    for (let i = 0; i < res.length; i++) {
        container[0].insertAdjacentHTML("beforeend", `
        <p>---------------------------------------------</p>
        <p>    Name: ${res[i].name}</p>
        <p>    Age: ${res[i].age}</p>
        <p>    Place of birth: ${res[i].placeofBirth}</p>
        <p>---------------------------------------------</p>
        `)
    }
})
