// Signup.jsx
import React, { useEffect } from 'react';
// import { boxIcon } from 'boxicons'; // Make sure to import the appropriate boxicons library
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

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

const Signup = () => {
  useEffect(() => {
    const signUpButton = document.getElementById('sighUp');

    if (signUpButton) {
      signUpButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const username = document.getElementById('username').value;

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;

            set(ref(Database, 'users/' + user.uid), {
              username: username,
              email: email
            })
            .then(() => {
              alert("User created successfully");
              console.log(user);
            })
            .catch((error) => {
              console.error("Error writing user data to the database: ", error);
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
            console.log(errorMessage);
          });
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="singnup.css" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <title>Login</title>
      </head>
      <body>
        <div className="wrapper">
          <form action="">
            <h1 className='text-[20px] text-blue-950'>Welcome To the signup page</h1>
            <div className="input-box">
              <input type="text" placeholder="Name" id="username" name="username" required />
              {/* {boxIcon({ name: 'user', type: 'solid' })} */}
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" name="email" id="email" />
              {/* {boxIcon({ name: 'envelope', type: 'solid' })} */}
            </div>
            <div className="input-box">
              <input type="password" placeholder="password" id="password" name="password" />
              {/* {boxIcon({ name: 'lock-alt', type: 'solid' })} */}
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Agree all
                <a href="#">Term & Condition</a>
              </label>
            </div>
           
           <div className='flex'>

           <input type="submit" className='cursor-pointer bg-blue-500 rounded-[20px] text-[20px] px-[10px] py-[3px] bg-blue-500 hover:bg-blue-700 cursor-pointer' id="sighUp" name="signup submit" value="sign up" />
            <div className="have relative left-[100px]  ">Have account ?<a href='/'>Sign in</a></div>
           </div>
            
          </form>
        </div>
      </body>
    </html>
  );
};

export default Signup;
