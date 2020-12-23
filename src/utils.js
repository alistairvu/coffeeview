export const getResultListFromArr = (cafeArr) => {
  let html = ""
  cafeArr.map((cafe) => {
    const { img, name, rating, reviews, address, review, id } = cafe
    html += `
    <result-card key="${id}" img="${img}" name="${name}" rating="${rating}" reviews="${reviews}" address="${address}" review="${review}">
    </result-card>`
  })
  return html
}
