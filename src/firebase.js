import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyABr-e_LW40lNse3RsaI5QkY2hn53q_nQc",
    authDomain: "osint-ruangbawah.firebaseapp.com",
    projectId: "osint-ruangbawah",
    storageBucket: "osint-ruangbawah.appspot.com",
    messagingSenderId: "994097356010",
    appId: "1:994097356010:web:ba4d62eabc5074e47a4b93",
    measurementId: "G-4QD8NZ9QHL"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}