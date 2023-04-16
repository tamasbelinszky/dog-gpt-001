'use client'
import React, { PropsWithChildren, useContext, useState } from 'react'

export type ChatMessage = {
  id: string
  data: string
  sender: 'user' | 'bot'
  type: 'text' | 'image'
}

type ChatState = {
  messages: ChatMessage[]
  breed: string
}

export const initialState: ChatState = {
  messages: [
    {
      id: '0',
      data: 'Welcome to DogGPT, the chatbot that creates dog breed images using dog-gpt-001. Want to see an image of your favorite breed? Just type its name!',
      sender: 'bot',
      type: 'text',
    },
  ],
  breed: 'hound',
}

type ChatContextProps = {
  chatState: ChatState
  setChatState: React.Dispatch<React.SetStateAction<ChatState>>
}

export const ChatContext = React.createContext<ChatContextProps>({
  chatState: initialState,
  setChatState: () => {},
})

export const useChatContext = () => {
  const { chatState, setChatState } = useContext(ChatContext)

  const addMessage = (message: ChatMessage) => {
    setChatState((prevState) => {
      return {
        ...prevState,
        messages: [...prevState.messages, message],
      }
    })
  }

  return { chatState, setChatState, addMessage }
}

export const ChatContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [chatState, setChatState] = useState<ChatState>(initialState)

  return <ChatContext.Provider value={{ chatState, setChatState }}>{children}</ChatContext.Provider>
}
