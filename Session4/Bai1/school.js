import {getDataFromDocs} from "./utills.js"
import {Student} from "./student.js"
export class School {
    StudentList;
    constructor()
    {
        this.StudentList= []
    }
    async setStudentList()
    {
        let c= await firebase.firestore().collection("users").get();;
        let list= getDataFromDocs(c);
        for(let i=0; i<list.length; i++)
        {
            this.StudentList.push(new Student(list[i].name, list[i].age, list[i].className, list[i].address))
            
        }
    }

}