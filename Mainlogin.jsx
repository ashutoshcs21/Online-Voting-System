// Login.jsx
import React, { useEffect } from 'react';

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import './Mainlogin.css'
const firebaseConfig = {
  apiKey: "AIzaSyCW-LRfDyX-jNYs71kKBKAozSJMBwsTXEA",
  authDomain: "login-b6c34.firebaseapp.com",
  databaseURL: "https://login-b6c34-default-rtdb.firebaseio.com",
  projectId: "login-b6c34",
  storageBucket: "login-b6c34.appspot.com",
  messagingSenderId: "124620468325",
  appId: "1:124620468325:web:983b5b3809ffc991a4168c",
  measurementId: "G-MMT8FD8HBV"
};

const app = initializeApp(firebaseConfig);
const Database = getDatabase(app);
const auth = getAuth();

const Mainlogin = () => {
  useEffect(() => {
    const signInButton = document.getElementById('loginButton'); // Renamed to loginButton

    if (signInButton) {
      signInButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            const dt = new Date();
            update(ref(Database, 'users/' + user.uid), {
              last_login: dt,
            }).then(() => {
              console.log("You voted")
              window.location.href = 'app';
            })
            .catch((error) => {
              console.error("Error updating last_login: ", error);
            });
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
          });
      });
    }
  }, []);

  return (
    <div className="wrapper" id="login">
      <form id="loginform">
        <h1 className='text-purple-500 text-[20px]'>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Email" name="email" id="email" required />
          {/* {boxIcon({ type: 'solid', name: 'user' })} */}
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" id="password" name="password" />
          {/* {boxIcon({ type: 'solid', name: 'lock-alt' })} */}
        </div>
        <input className='bg-blue-500 rounded-[20px] text-[20px] m-[10px] w-[90px] hover:bg-blue-700 cursor-pointer' type="submit" id="loginButton" name="login" value="login" />
        <a href="signup" className='relative left-[160px] bg-blue-500 rounded-[20px] text-[20px] px-[10px] py-[5px] bg-blue-500 hover:bg-blue-700 cursor-pointer'>sign up</a>
      </form>
    </div>
  );
};

export default Mainlogin;
