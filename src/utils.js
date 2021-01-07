export const getResultListFromArr = (cafeArr) => {
  let html = ""
  cafeArr.map((cafe) => {
    html += `
    <result-card key="${cafe}">
    </result-card>`
  })
  return html
}

export const fromNumberToDollar = (num) => {
  switch (num) {
    case "1":
      return "$"
    case "2":
      return "$$"
    case "3":
      return "$$$"
    case "4":
      return "$$$$"
    case "5":
      return "$$$$$"
  }
}

export function nonAccentVietnamese(str) {
  str = str.toLowerCase()
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i")
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
  str = str.replace(/đ/g, "d")
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")
  str = str.replace(/\u02C6|\u0306|\u031B/g, "")
  return str
}

export function getDataFromDoc(doc) {
  const data = doc.data()
  data.id = doc.id
  return data
}
// lay du lieu tu get many document
export function getDataFromDocs(docs) {
  return docs.docs.map(getDataFromDoc);
}
// tai file len file store
export async function uploadFileToStore(file) {
  // tao duong dan toi file
  let path= `file/${file.name}`
  let ref= firebase.storage().ref().child(path);
  await ref.put(file);
  let res= getFileUrl(ref);
  console.log(res);
  return(res);
}

function getFileUrl(fileRef) {
  return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
}
/**
 * 
 * @param {String} key 
 * @param {Object} value 
 */
export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getItemLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
export function removeItemLocalStorage(key) {
  localStorage.removeItem(key);
}


export function addDocumentPost(post) {
  firebase.firestore().collection('posts').add(post);
}
export async function getDocumentPostbyUserId(userId) {
  const res = await firebase.firestore()
    .collection('posts')
    .where('userId', '==', userId)
    .get();
  const post = getDataFromDocs(res.docs);
  return post;
}
/**
 * 
 * @param {*} dateStr
 * 14/12/2020 21:20 
 */
export function convertDate(dateStr) {
  const d = new Date(dateStr);
  const dd = validateNumber(d.getDate());
  const mm = validateNumber(d.getMonth() + 1);
  const yy = d.getFullYear();
  const hh = validateNumber(d.getHours());
  const mn = validateNumber(d.getMinutes());
  const s = `${dd}/${mm}/${yy}   ${hh}:${mn}`;
  return s;
}

function validateNumber(number) {
  return (number < 10) ? ('0' + number) : (number)
}