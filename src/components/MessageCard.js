import React, { useContext, useState } from 'react'
import mainContext from '../context/mainContext'

const MessageCard = ({message}) => {

      const {setShowMessageCard, messages,setMessages} = useContext(mainContext)

   
    function post() {
        setShowMessageCard(false)
    }

    function filter() {
        const delet = messages.filter(x => x.userMessageId !== message.userMessageId)
        console.log(delet);
        setMessages(delet)
    }

  return (
    
       <div className='messageCard d-flex space-btw'>
      <div onClick={post}  className='message'>Conversation with:   {message.user}</div>
      <div onClick={filter}>X</div>
    </div>    
   
  )
}

export default MessageCard
