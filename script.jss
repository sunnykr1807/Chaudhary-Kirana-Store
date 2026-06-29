import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1Z1z5obsXBS9mnrnoqnNNvcoH3_Qy_iY",
  authDomain: "chaudhary-kirana-store-29441.firebaseapp.com",
  projectId: "chaudhary-kirana-store-29441",
  storageBucket: "chaudhary-kirana-store-29441.firebasestorage.app",
  messagingSenderId: "82253252074",
  appId: "1:82253252074:web:f2c411407f9e21e8569e93"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = function () {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup Successful!");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });

};