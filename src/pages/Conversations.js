import React, { useContext, useRef } from 'react'
import MessageCard from '../components/MessageCard'
import mainContext from '../context/mainContext'

const Conversations = () => {

  const {messages, loginUsers, showMessageCard, setShowMessageCard, chat, setChat} = useContext(mainContext)

  const messRef = useRef()

  const msg = messages.find(x => x.userId === x.userId)
  console.log(msg);

  function goBack() {
    setShowMessageCard(true)
  }

  function sendMessage() {
      const msg = {
        message: messRef.current.value,
        user: loginUsers.username,
        id: messages.userMessageId
      }
      setChat([...chat, msg])
      console.log(msg);
  }
  


  return (
    <div>
      {showMessageCard ? <div className='conversations'>
      {messages.map((x, i) => <MessageCard message={x} index={x.userId} key={i}/>)}     
    </div>:
    <div>
      <button onClick={goBack}>Go back</button>
      <h2>{msg.user}: {msg.message}</h2>
      <input ref={messRef} type="text" placeholder="message"/>
      <button onClick={sendMessage}>Send Message</button>
    </div>
    }    

    </div>    
    
  )
}

export default Conversations
