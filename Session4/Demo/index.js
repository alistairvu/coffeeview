import {getDataFromDoc, getDataFromDocs} from "./utills.js"
import {School} from "./school.js"
import { Student } from "../Bai1/student.js";
// read one lấy bản ghi về
async function getoneDocument()
{
    // firebase.firestore().collection("users").doc("0QdwLZSTdYrjOIvplyzk").get().then ((res) => {
    //     console.log(res);
    // });
    //async await
    const c = await firebase.firestore().collection("users").doc("0QdwLZSTdYrjOIvplyzk").get();
    const users = c.id;
    console.log(users);
}
//get many document
async function getmanyDocument()
{
    const c= await firebase.firestore().collection("users").get();
    const user= getDataFromDoc(c.docs[0]);
    console.log(user);
    let list= getDataFromDocs(c);
    console.log(list);
    let Class= new School();
    for(let i=0; i<list.length;i++)
    {
        Class.addStudentList(new Student(list[i].name, list[i].age, list[i].className, list[i].address))
    }
    return Class;
}
//getmanyDocument();
let container= document.getElementsByClassName("container");
let fifTeen= new getmanyDocument();
for(let i=0; i<fifTeen.length; i++)
{
    
    container[0].insertAdjacentHTML('beforeend', fifTeen[i].getInfo() );
}