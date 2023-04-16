import React from 'react'
import { ChatMessage } from 'app/chat/components/ChatContext'
import { DogImage } from '../../../ui/Image'

const ChatMessage: React.FC<ChatMessage> = (message) => {
  const isFromUser = message.sender === 'user'

  const containerClass = `flex ${isFromUser ? 'justify-end' : 'justify-start'}`

  const bubbleClass = `p-2 m-2 rounded-xl ${isFromUser ? 'bg-primary text-white' : 'bg-secondary'}`

  return (
    <div className={containerClass}>
      {message.type === 'image' ? (
        <DogImage src={message.data} />
      ) : (
        <div className={bubbleClass}>{message.data}</div>
      )}
    </div>
  )
}

export default ChatMessage
