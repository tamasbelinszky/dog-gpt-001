import Link from 'next/link'

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Welcome</h1>
      <div className="flex space-x-4">
        <Link
          href="/dog"
          className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded"
        >
          Dog Breeds
        </Link>
        <Link
          href="/chat"
          className="bg-secondary hover:bg-secondary-light text-white font-bold py-2 px-4 rounded"
        >
          Chat with dogGPT
        </Link>
      </div>
    </div>
  )
}
