import {useContext, useRef, useState} from 'react'
import mainContext from '../context/mainContext'

const Profile = () => {

  const {users, setUsers, loginUsers, setLoginUsers} = useContext(mainContext)
  const [getShowError, setShowError] = useState(null)
  console.log(users);
  console.log(loginUsers);
  const [changeImage, setChangeImage] = useState(false)

  const newImgRef = useRef()
  const passwordRef = useRef()
    

  function changeImg() {
    const loginUser = {...loginUsers}
    const newUserPhoto = newImgRef.current.value
    loginUser.photo = newUserPhoto
   
    setLoginUsers(loginUser) 
    
    setChangeImage(true)  
    
    const newArr = users.find(x => x.username === loginUser.username)
    newArr.photo = newUserPhoto;

    // const userInd = users.findIndex(x => x.id === loginUser.id)
    // console.log(userInd);

    // users.splice(userInd, 1, newArr)   
    
    setUsers(users)
    console.log(users);      
   
  }

    function changePassword() {

      const password = passwordRef.current.value
      const validatePassword = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/);

   
      if (password.length < 4 || password.length > 20) return setShowError("password is to short or big")
   

      if (!validatePassword.test(password)) return setShowError("password is bad")
      
      const loginUser = {...loginUsers}
      
      const user = users.map((x) => {
        if(x.username === loginUser.username){ 
          return { ...x, pass1: passwordRef.current.value, pass2: passwordRef.current.value};
      }
      return x;
      })
      console.log(user);     

      setUsers(user)
      
      console.log(users);
    }    
  

  return (
    <div className='profile'>

        <div className='profile-change'>
          {!changeImage ? <img src={users[0].photo} alt="standart"/> : <img src={loginUsers.photo} alt="new"/>}
          
          <p>{loginUsers.username}</p>

          <input ref={newImgRef} type="text" placeholder="user profile change"/>
          <button onClick={changeImg}>Change Image</button>
        </div>
       

        <div className='input-change'>
          <input ref={passwordRef} type="text" placeholder="password change"/>
          
          <button onClick={changePassword}>Change password</button>
        </div>
      {getShowError && <p>{getShowError}</p>} 
    </div>
  )
}

export default Profile
