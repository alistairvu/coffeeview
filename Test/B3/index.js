// async function getAPI(){
//     const  conn= await fetch(`https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`)
//     const data=  await conn.json();
//     let arr= data
//     return arr;
// }


// obj= Promise(getAPI());

// console.log(obj);
import "./question.js"
import "./screen.js"

document.getElementById("app").innerHTML=`<list-question></list-question>`