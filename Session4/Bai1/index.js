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
