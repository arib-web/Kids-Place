// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:import.meta.env.VITE_apiKey,
    authDomain:import.meta.env.VITE_authDomain,
    projectId:import.meta.env.VITE_projectId,
    storageBucket:import.meta.env.VITE_storageBucket,
    messagingSenderId:import.meta.env.VITE_messagingSenderId,
    appId:import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDHwNoe4xz6yErwIiYIsp1NFyPAPjD82vY",
//   authDomain: "kids-place-c28ce.firebaseapp.com",
//   projectId: "kids-place-c28ce",
//   storageBucket: "kids-place-c28ce.appspot.com",
//   messagingSenderId: "28503604046",
//   appId: "1:28503604046:web:65f14d3d4e3986d12e3c1f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;