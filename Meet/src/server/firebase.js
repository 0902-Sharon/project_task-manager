import firebase from "firebase";

var firebaseConfig = {
  apiKey: "1:682570244089:web:ee03c941426078cc5de728", // Add API Key
  databaseURL:"https://myapp-790b6-default-rtdb.firebaseio.com/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
