import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserCard = ({user, index}) => {

    const nav = useNavigate()

  return (
    <div className='userCard' onClick={() => (nav("/user/" + index))}>

      <div  >
        <img src={user.photo} alt=""/>
         <h2>{user.username}</h2>
      </div>        

    </div>
  )
}

export default UserCard
