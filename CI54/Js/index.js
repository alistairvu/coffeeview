

import './screens/register.js'
import './screens/login.js'
import './screens/story.js'
import './components/crearPost.js'
import './components/Header.js'
import './components/inputWrapper.js'
import './components/listPost.js'
import './components/postItem.js'
import { getItemLocalStorage } from "./utils.js";
checkAuthen();
async function checkAuthen() {
  const user = getItemLocalStorage('currentUser');
  if (user) {
    ///login lai cho nguoi dung tu  thong in currenUser o local storage
    const res = await firebase.firestore()
      .collection('users')
      .where('email', '==', user.email)
      .where('password', '==', user.password)
      .get()
    if (res.empty) {
      redirect("login")
    } else {
      redirect("story");

    }
  }
  else {
    redirect("login");
  }
}

redirect("register");
export function redirect(screenName) {
  if (screenName === 'register') {
    document.getElementById('app').innerHTML = `
      <register-screen></register-screen>
    `
  } 
  else if (screenName === 'login') {
    document.getElementById('app').innerHTML = `
      <login-screen></login-screen>
    `
  }
  else if (screenName === "story") {
  document.getElementById('app').innerHTML = `<story-screen></story-screen>`
  }
}

