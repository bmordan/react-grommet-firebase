import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAP8LxEiz9jd-vYaBNLyuwbFS7RspO-bVs",
    authDomain: "restaurants-app-34dee.firebaseapp.com",
    databaseURL: "https://restaurants-app-34dee.firebaseio.com",
    projectId: "restaurants-app-34dee",
    storageBucket: "restaurants-app-34dee.appspot.com",
    messagingSenderId: "446257543849",
    appId: "1:446257543849:web:ec3b357368de9991be47b8"
}

firebase.initializeApp(config)

export class User {
    static create = async function ({name, email, password}) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({ displayName: name })
    }
    static onAuth = function (sub) {
        return firebase.auth().onAuthStateChanged(sub)
    }
    static signOut = function () {
        return firebase.auth().signOut()
    }
    static signIn = async function ({email, password}) {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    }
}

