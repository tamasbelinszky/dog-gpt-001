import Link from 'next/link'

export const generateMetadata = async () => {
  const breeds = await listAllBreeds()
  return {
    title: `Dog Breeds Collection`,
    description: `A collection of ${breeds.length} dog breeds from the dog.ceo API`,
  }
}

export default async function Page() {
  const breeds = await listAllBreeds()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Breeds</h1>
      {breeds.map((breed) => (
        <Link href={`/dog/${breed}`} key={breed} className="p-2 text-2xl">
          {breed}
        </Link>
      ))}
    </main>
  )
}

const listAllBreeds = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/list/all')
  const data = await res.json()
  return Object.keys(data.message)
}
