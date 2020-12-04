export function getDataFromDoc(doc)
{
    const data= doc.data();
    data.id= doc.id;
    return data; 
}
export function getDataFromDocs(docs)
{
//    const data= docs.docs;
//    const list= [];
//    console.log(data)
//    for(let i=0; i<data.length; i++)
//    list.push(getDataFromDoc(data[i]));
//    return list;
   return docs.docs.map(getDataFromDoc);
}