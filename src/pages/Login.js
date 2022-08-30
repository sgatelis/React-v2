import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import mainContext from '../context/mainContext';
const Login = () => {

  const {users, loginUsers, setLoginUsers, setShowToolbar} = useContext(mainContext)
  console.log(users);

  const [loginError, setLoginError] = useState()
  const nav = useNavigate()

  const usernameRef = useRef()
  const passwordRef = useRef()

  function login() {
    const user = {
    username: usernameRef.current.value,
    password: passwordRef.current.value
  }
    const username = users.find(x => x.username === user.username);   
    if(!username){setLoginError("This user isn't exist")
    return
  }    
    
    const pass = users.find(x => x.pass1 === user.password);
    if(!pass){setLoginError("Password isn't correct")
    return
  }
    setLoginUsers(user)
    setShowToolbar(true)
    nav("/Profile")
    
  }
  
 
  
  return (
    <div className='login-user'>
      <input ref={usernameRef} type="text" placeholder='username 4...20 symbols' />
      <input ref={passwordRef} type="text" placeholder='password1 4...20 symbols' />

      <button onClick={login}>Login</button>
      
     <p>{loginError}</p>
     {/* <p>{users[0].pass1}</p> */}
    </div>
  )
}

export default Login
