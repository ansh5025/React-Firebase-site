import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClSx5KhAUAbGt40V17jbncIENlqBpxuDk",
  authDomain: "bmi-app-cd2c4.firebaseapp.com",
  projectId: "bmi-app-cd2c4",
  storageBucket: "bmi-app-cd2c4.appspot.com",
  messagingSenderId: "926079832",
  appId: "1:926079832:web:24e45d4c24c149afb6e32d",
  measurementId: "G-ZHMPLX2K4P",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
