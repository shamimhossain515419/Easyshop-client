
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGe4ejlD4wIxouQi_m-dloKAW4qA-zi-4",
  authDomain: "easyshop-e6d52.firebaseapp.com",
  projectId: "easyshop-e6d52",
  storageBucket: "easyshop-e6d52.appspot.com",
  messagingSenderId: "460932676599",
  appId: "1:460932676599:web:2cfdc464c04e0a6e708cf2",
  measurementId: "G-BEG29GTNQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;