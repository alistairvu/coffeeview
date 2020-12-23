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
