import {School} from "./school.js"
let container= document.getElementsByClassName("container");
let fifTeen= new School();
fifTeen.setStudentList().then(()=>{console.log(fifTeen.StudentList[1].getInfo());
    for(let i=0; i<fifTeen.StudentList.length; i++)
    {
       console.log(fifTeen.StudentList[i].getInfo());
       container[0].insertAdjacentHTML('beforeend', fifTeen.StudentList[i].getInfo() );
    }
    }); // methol setStudent mat thoi gian chay nen caafn phai co .then de goi ham ra sau khi thuc hien xong method day
// function addDocument()
// {
//     const data = {
//         name: "Khuat Viet",
//         age: 11,
//         address: "Son Tay",
//         className: "A58"
//     }
//     firebase.firestore().collection("users").add(data);
// }
// addDocument();
function updateDocument()
{
    const id= "dADkD9wj1hDqun134UQI"
    const data = {
        address: "Xuan Mai",
        className: "PT05",
        name: "Long"
    }
    firebase.firestore().collection("users").doc(id).update(data);
    
}
//updateDocument();
// update them vao mot field
function updateDocumentField()
{
    const id= "0QdwLZSTdYrjOIvplyzk"
    const data = {
        friends: firebase.firestore.FieldValue.arrayUnion("Hoang111")
    }
    firebase.firestore().collection("users").doc(id).update(data);
    
}
//updateDocumentField();
//delete
function deleteDocument()
{
    const id= "OIpqsoFV8qC8lsXeNzB6";
    firebase.firestore().collection("users").doc(id).delete()

}
deleteDocument();