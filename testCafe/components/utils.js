export async function getOneDocument(email){
    //promise
    //const res=firebase.firestore().collection('users').doc('93gmjocDGbdrB6ir06cr').get().then(res=>{
        //console.log(res)})
    //console.log(res)
    //async await
    const res=await firebase.firestore().collection('cafe').doc(email).get()
    return res.data()
   
}

//getOneDocument()
async function getManyDocument(){
    const res=await firebase.firestore().collection('users').get()
    //console.log(res)
   const user=getDataFromDocs(res)
   
    
}
getManyDocument()

//add document
export function addDocument(data){
    
    firebase.firestore().collection('users').add(data)
}
//addDocument()

//update document
function updateDocument(){
    const docId='93gmjocDGbdrB6ir06cr'
    const data={
        
        phone:firebase.firestore.FieldValue.arrayUnion('0904')
    }
    firebase.firestore().collection('users').doc(docId).update(data)
}
//updateDocument()

//delete document
function deleteDocument(){
    const docId="93gmjocDGbdrB6ir06cr"
    firebase.firestore().collection('users').doc(docId).delete()
}
//deleteDocument()
export function getDataFromDoc(doc){
    const data=doc.data()
    data.id=doc.id
    return data
}
//lay du lieu tu get many document
export function getDataFromDocs(data){
    // const docs=data.docs
    // const listRes=[]
    // for(const item of docs){
       
    //   listRes.push(getDataFromDoc(item))
        

    // // }
    
    // //return listRes
    return data.docs.map(getDataFromDoc)
}
//luu du lieu vao local storage
export function saveToLocalStorage(key,value){
    localStorage.setItem(key,JSON.stringify(value))
}
export function getItemLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))
}
//14/12/2020 21:20
export function convertDate(dateStr){
    const date=new Date(dateStr)
    const day=date.getDate()
    const month=date.getMonth()+1>10?date.getMonth()+1:'0'+date.getMonth()+1
    const year=date.getFullYear()
    const hour=date.getHours()
    const minutes=date.getMinutes()>10? date.getMinutes():'0'+date.getMinutes()
    return `${day}/${month}/${year} ${hour}:${minutes}`
}
export async function uploadFileToStorage(file){
    //tao duong day den file day
    const fileName=file.name
    const filePath=`file/${fileName}`
    const ref=firebase.storage().ref().child(filePath)
    await ref.put(file)
    return getFileUrl(ref)
}

  export function getFileUrl(fileRef) {
    return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
  }
