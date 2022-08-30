import React, { useContext } from 'react'
import mainContext from '../context/mainContext'
import UserCard from '../components/UserCard'

const AllUsers = () => {

  const {users} = useContext(mainContext)

  console.log(users);

  return (
    <div className='user'>
      {users.map((x, i) => <UserCard user={x} index={x.id} key={i} />)}
    </div>
  )
}

export default AllUsers
