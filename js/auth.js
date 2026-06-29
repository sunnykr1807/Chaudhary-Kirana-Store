const firebaseConfig = {
  apiKey: "AIzaSyD1Z1z5obsXBS9mnrnoqnNNvcoH3_Qy_iY",
  authDomain: "chaudhary-kirana-store-29441.firebaseapp.com",
  projectId: "chaudhary-kirana-store-29441",
  storageBucket: "chaudhary-kirana-store-29441.firebasestorage.app",
  messagingSenderId: "82253252074",
  appId: "1:82253252074:web:f2c4114079e93"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// SIGNUP
function signup() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!isValidEmail(email)) {
    alert("कृपया सही ईमेल फ़ॉर्मैट दर्ज करें। उदाहरण: user@example.com");
    return;
  }

  if (password.length < 6) {
    alert("पासवर्ड कम से कम 6 अक्षर होना चाहिए।");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)

    .then(() => {

      localStorage.setItem("username", name);
      localStorage.setItem("userEmail", email);

      alert("Signup Successful!");
      window.location.href = "index.html";

    })

    .catch((error) => {
      alert(error.message);
    });
};

function logout() {
  auth.signOut()
    .then(() => {
      localStorage.removeItem("username");
      localStorage.removeItem("userEmail");
      alert("Logout successful");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// LOGIN
function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)

    .then(() => {

      localStorage.setItem("userEmail", email);

      alert("Login Successful!");
      window.location.href = "index.html";

    })

    .catch((error) => {
      alert(error.message);
    });
};