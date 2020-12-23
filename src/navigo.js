var root = null
var useHash = true // Defaults to: false
var hash = "#!" // Defaults to: '#'
var router = new Navigo(root, useHash, hash)

const rootElement = document.getElementById("root")

router
  .on(function () {
    rootElement.innerHTML = `<result-screen></result-screen>`
  })
  .resolve()

router
  .on({
    "/cafe/:key": function ({ key }) {
      rootElement.innerHTML = `<cafe-screen key="${key}"></cafe-screen>`
    },
  })
  .resolve()

window.router = router
