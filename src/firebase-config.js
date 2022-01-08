import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBbedBBLIULELSvOo05nkdpJ97k38Pcav0",
    authDomain: "pfhenry14-ba9e7.firebaseapp.com",
    projectId: "pfhenry14-ba9e7",
    storageBucket: "pfhenry14-ba9e7.appspot.com",
    messagingSenderId: "252807859140",
    appId: "1:252807859140:web:9b481e4fb946ae709cb291"
  };
  
  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)

  const provider = new GoogleAuthProvider()

  export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName
            const email = result.user.email

            localStorage.setItem("name", name)
            localStorage.setItem("email", email)

        })
        .catch((error) =>{
            console.log(error)
        })
}