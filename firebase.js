import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"


const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext)

const firebaseConfig = {
apiKey: "AIzaSyCPs9Ddb7wiERs12890DvI5S9R7rFwzLss",

authDomain: "otp-project-ee289.firebaseapp.com",

projectId: "otp-project-ee289",

storageBucket: "otp-project-ee289.appspot.com",

messagingSenderId: "663754897244",

appId: "1:663754897244:web:c25fcc93586495882f7399",

measurementId: "G-E56J6XD8TX"
};

const firebaseApp = initializeApp(firebaseConfig)

const firebaseAuth = getAuth(firebaseApp)


export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
    const setUpRecaptcha = (number) => {
        const recaptchaVerifier = new RecaptchaVerifier(firebaseAuth, 'recaptcha-container')
        recaptchaVerifier.render()
        return signInWithPhoneNumber(firebaseAuth, number, recaptchaVerifier)
    }
    return (
        <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, setUpRecaptcha }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}