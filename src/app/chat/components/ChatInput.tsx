'use client'
import React from 'react'
import { ChatMessage, useChatContext } from './ChatContext'

export default function ChatInput() {
  const inputValueRef = React.useRef<HTMLInputElement>(null)
  const { chatState, addMessage } = useChatContext()
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const inputValue = inputValueRef.current?.value

    if (!inputValue || typeof inputValue !== 'string') {
      console.error('Input value is empty or not a string')
      setIsLoading(false)
      return
    }

    if (inputValue.length < 3 || inputValue.length > 300) {
      console.error('Input value must be between 3 and 300 characters long')
      setIsLoading(false)
      return
    }

    const newMessage: ChatMessage = {
      id: `${chatState.messages.length}`,
      data: inputValue,
      sender: 'user',
      type: 'text',
    }

    addMessage(newMessage)

    inputValueRef.current.value = ''

    try {
      const response = await fetch('/dog/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      })

      const { message } = await response.json()

      const trueBotMessage: ChatMessage = {
        id: `${chatState.messages.length + 1}`,
        data: message,
        sender: 'bot',
        type: 'image',
      }

      addMessage(trueBotMessage)
    } catch (err) {
      console.warn(`dog api error: ${err}`)
      const trueBotMessage: ChatMessage = {
        id: `${chatState.messages.length + 1}`,
        data: 'something went wrong',
        sender: 'bot',
        type: 'text',
      }
      addMessage(trueBotMessage)
    }

    setIsLoading(false)
  }

  return (
    <div className="border-t-2 p-4 bg-white dark:bg-gray-800">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Send a message..."
            className="flex-grow border rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none"
            ref={inputValueRef}
          />
          <button
            type="submit"
            className={`ml-4 px-4 py-2 bg-primary text-white rounded-lg focus:outline-none ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  )
}
