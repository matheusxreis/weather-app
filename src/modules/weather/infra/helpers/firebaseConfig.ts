import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: 'AIzaSyDEN4RnHoqiqwnUoSCNgCKatxCUQJc6igI',
  authDomain: 'weather-app-62b88.firebaseapp.com',
  databaseURL: 'https://weather-app-62b88-default-rtdb.firebaseio.com',
  projectId: 'weather-app-62b88',
  storageBucket: 'weather-app-62b88.appspot.com',
  messagingSenderId: '217388962098',
  appId: '1:217388962098:web:fbb72742a43e0e4327872b'
});

export const db = getFirestore(app);
