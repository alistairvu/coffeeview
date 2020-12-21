
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