import { Metadata } from 'next/types'

import { DogImage } from 'ui/Image'

export const revalidate = false
export const dynamicParams = false

export async function generateStaticParams() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all')
  const data = await res.json()
  return Object.keys(data.message).map((breed) => {
    breed
  })
}

type BreedProps = {
  params: { breed: string }
}

export function generateMetadata({ params: { breed } }: BreedProps): Metadata {
  return {
    title: `Fun ${breed} images`,
    description: `A collection of ${breed} images from the dog.ceo API`,
  }
}

export default async function Page(props: BreedProps) {
  const { breed } = props.params
  const images = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
  const { message } = await images.json()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{breed}</h1>
      {message.map((image: string, index: number) => (
        <DogImage key={image} src={image} loading={index < 2 ? 'eager' : 'lazy'} />
      ))}
    </main>
  )
}
