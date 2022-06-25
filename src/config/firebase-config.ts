import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCN6Ttx0AnkN5npcgP16eNZ8h7bxxLNLYQ",
    authDomain: "tech-watchers.firebaseapp.com",
    projectId: "tech-watchers",
    storageBucket: "tech-watchers.appspot.com",
    messagingSenderId: "1081308009477",
    appId: "1:1081308009477:web:f7c13d7eaf3fc6dfb2f86c",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebase;
