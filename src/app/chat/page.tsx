import React from 'react'
import ChatMessageList from './components/ChatMessageList'
import ChatInput from './components/ChatInput'

export default function ChatWindow() {
  return (
    <div className="flex flex-col">
      <div className="flex-grow overflow-y-auto">
        <ChatMessageList />
      </div>
      <div className="mt-8">
        <ChatInput />
      </div>
    </div>
  )
}
