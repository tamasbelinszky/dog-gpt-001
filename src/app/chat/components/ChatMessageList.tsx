'use client'
import React, { useEffect, useRef } from 'react'
import Message from './ChatMessage'
import { useChatContext } from './ChatContext'

const ChatMessageList: React.FC = () => {
  const {
    chatState: { messages },
  } = useChatContext()

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="sm:w-full md:max-w-4xl lg:max-w-6xl mx-auto">
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatMessageList
