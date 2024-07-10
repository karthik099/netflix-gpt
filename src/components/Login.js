import React, { useRef, useState } from "react";
import { loginValidator } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [errorMessage, setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    // console.log(email.current.value, password.current.value)
    setErrorMessage(
      loginValidator(email.current.value, password.current.value)
    );
    if (!errorMessage) {
      // Sign Up
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log('>>>>', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // setting error
        setErrorMessage(errorCode + ' : ' + errorMessage);
      });
  }

    }
  const handleSignIn = () => {
      // Sign Up
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        // const user = userCredential.user;
        // ...
        console.log('>>>>', userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // setting error
        setErrorMessage(errorCode + ' : ' + errorMessage);
      });

    }

    

  return (
    <div>
      {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg
" alt="background_image"/> */}
      <form onSubmit={(e) => e.defaultPrevented()}>
        email: <input ref={email} type="text" name="email" />
        Password: <input ref={password} type="password" name="password" />
        <button
          onClick={handleSignIn}
          type="button"
          className="text-white my-5 bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-700 dark:border-blue-700"
        >
          Sign In
        </button>
        <br/>
        <button
          onClick={handleSignUp}
          type="button"
          className="text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700"
        >
          Sign Up
        </button>
        <p className="text-red-700 text-xs w-3/12">{errorMessage}</p>
      </form>
    </div>
  );
}

export default Login;
