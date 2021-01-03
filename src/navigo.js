var root = null
var useHash = true // Defaults to: false
var hash = "#!" // Defaults to: '#'
var router = new Navigo(root, useHash, hash)

const rootElement = document.getElementById("root")

router
  .on(function () {
    rootElement.innerHTML = `<home-screen></home-screen>`
  })
  .resolve()

router
  .on({
    "/cafe": function () {
      rootElement.innerHTML = `<result-screen></result-screen>`
    },
    "/cafe/:key": function ({ key }) {
      rootElement.innerHTML = `<cafe-screen key="${key}"></cafe-screen>`
    },
    "/login": function () {
      rootElement.innerHTML = `<login-screen></login-screen>`
    },
    "/create": function () {
      rootElement.innerHTML = `<create-store-screen></create-store-screen>`
    },
    "/sign-up": function () {
      rootElement.innerHTML = `<sign-up-screen></sign-up-screen>`
    },
    "/about-us": function (){
      rootElement.innerHTML = `<about-screen></about-screen>`
    },
  })
  .resolve()

window.router = router
