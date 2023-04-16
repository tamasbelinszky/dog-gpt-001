import Image from 'next/image'
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'DogGPT',
  description:
    'Welcome to DogGPT, the chatbot that creates dog breed images using dog-gpt-001. Want to see an image of your favorite breed? Just type its name!',
  themeColor: 'black',
  category: 'technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="relative">
          <Link href={'/'} className="">
            <Image src="/dog.png" alt="dog" width={50} height={50} className="absolute top-0 ml-8 mt-8" />
          </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
