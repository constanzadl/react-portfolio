// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD70SBkM47G26kelb92EcQOn8wIe50ZRAU',
  authDomain: 'portfolio-db-107fc.firebaseapp.com',
  projectId: 'portfolio-db-107fc',
  storageBucket: 'portfolio-db-107fc.appspot.com',
  messagingSenderId: '493058159240',
  appId: '1:493058159240:web:9bca4bfe754804bac0253d',
  measurementId: 'G-VWWR8K2R8N'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
