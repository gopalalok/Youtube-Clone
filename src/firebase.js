import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyCNzvn9VTrcuuDaouVLEs26_N3BQm6yFRU",
   authDomain: "clone-42cd2.firebaseapp.com",
   projectId: "clone-42cd2",
   storageBucket: "clone-42cd2.appspot.com",
   messagingSenderId: "1072518058263",
   appId: "1:1072518058263:web:21c0d7d7194b40e8dd6752"
 };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
