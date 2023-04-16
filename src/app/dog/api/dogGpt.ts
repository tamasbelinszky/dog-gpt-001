import { findBestMatch } from 'string-similarity'

export const dogGpt = async (input: string) => {
  console.info('Initiate dogGpt', { input })
  const res = await fetch('https://dog.ceo/api/breeds/list/all')
  const data = await res.json()
  const breeds = Object.keys(data.message)

  // dog-gpt-001 :P
  const matches = findBestMatch(input, breeds)

  const bestMatch = breeds[matches.bestMatchIndex]
  console.info({ bestMatch })

  const randomBreedImg = await fetch(`https://dog.ceo/api/breed/${bestMatch}/images/random`, {
    cache: 'no-store',
  })

  return randomBreedImg.json() as Promise<{ message: string; status: string }>
}
