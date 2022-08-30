import React, { useContext, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import mainContext from '../context/mainContext'

const ParticularUserProfile = () => {

  const {users, loginUsers, messages, setMessages} = useContext(mainContext)

  const messageRef = useRef()

  const nav = useNavigate()

  const {id} = useParams()

  const myUser = users.find(x => x.id === Number(id))


  function send() {
    const myMessage = {
      message: messageRef.current.value,
      user: myUser.username,
      userId: myUser.id,
      userMessageId: Date.now()
    }
    setMessages([...messages, myMessage])
    nav("/Conversations")
  }

  return (
    <div className='profileUser'>
      <img src={myUser.photo} alt =""/>
      <h2>{myUser.username}</h2>
      <input ref={messageRef} type="text" placeholder='type message' />
      <button onClick={send}>Send message</button>
    </div>
  )
}

export default ParticularUserProfile
