import { ChatContextProvider } from './components/ChatContext'

export const metadata = {
  title: 'DogGPT-Chat',
  description: 'Start to chat with DogGPT right now.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ChatContextProvider>
      <div className="flex h-screen justify-center p-20">{children}</div>
    </ChatContextProvider>
  )
}
