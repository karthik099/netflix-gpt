import React, { useRef } from 'react'

function Login() {


  const email = useRef(null);
  const password = useRef(null);


  const  handleLogin = () => {
    console.log(email.current.value, password.current.value)
  };

  return (
    <div> 
      {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg
" alt="background_image"/> */}


xx
    <form action="">
      email: <input ref={email} type="text" name="email"/>
      Password: <input ref={password} type="password" name="password"/>
      <button onClick={handleLogin} type="button" className="text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-700 dark:border-blue-700">SignIn</button>
    </form>
    </div>
  )
}

export default Login