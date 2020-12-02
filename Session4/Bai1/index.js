// import {School} from "./school"
// let container= document.getElementsByClassName("container");
// let fifTeen= new School();
// fifTeen.setStudentList();
// //đưa ra màn hình, nhác quá  nên ko làm hàm, chỉ lấy 1 cái làm ví dụ
// for(let i=0; i<fifTeen.length; i++)
// {
    
//     container[0].insertAdjacentHTML('beforeend', fifTeen[i].getInfo() );
// }
import {getDataFromDoc, getDataFromDocs} from "./utills.js"
import {Student} from "./student"
export class School {
    StudentList;
    constructor()
    {
        this.StudentList= []
    }
    async setStudentList()
    {
        let c= await firebase.firestore().collection("user").get();
        let list= getDataFromDocs(c);
        console.log(list);
        for(let i=0; i<list.length; i++)
        {
            this.StudentList.push(new Student(list[i].name, list[i].age, list[i].className, list[i].address))

        }
    }

}
let fifTeen= new School();
fifTeen.setStudentList();
console.log(fifTeen);
