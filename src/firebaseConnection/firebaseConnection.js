import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyByuYlCeTkdswtSsOi8InI5LfF_w9BKgZQ",
    authDomain: "apptcc-2b963.firebaseapp.com",
    databaseURL: "https://apptcc-2b963.firebaseio.com",
    projectId: "apptcc-2b963",
    storageBucket: "apptcc-2b963.appspot.com",
    messagingSenderId: "386017494942",
    appId: "1:386017494942:web:0e08a4cb6370732da6b88f",
    measurementId: "G-QD9LM731ZP"
};

if(!firebase.apps.length){
    //abrir conexão
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
