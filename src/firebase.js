import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAF718DShnGnjYjajV6EDe5QZqZRV16Mmc",
  authDomain: "ecommerce-app-d855d.firebaseapp.com",
  databaseURL: "https://ecommerce-app-d855d.firebaseio.com",
  projectId: "ecommerce-app-d855d",
  storageBucket: "ecommerce-app-d855d.appspot.com",
  messagingSenderId: "255164231922",
  appId: "1:255164231922:web:4d418010e457f78a51606b",
  measurementId: "G-HYL6DV1V48"

});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };