import { NextRequest, NextResponse } from 'next/server'
import { dogGpt } from './dogGpt'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (typeof message !== 'string') {
      throw new Error('Message is not a string')
    }

    if (message.length < 3 || message.length > 300) {
      throw new Error('Message is not between 3 and 300 characters')
    }

    const randomBreedImg = await dogGpt(message)

    return NextResponse.json(randomBreedImg)
  } catch (err) {
    console.warn(`Could not find breed. Error: ${err}. Returning random dog.`)
    const randomDogImg = await fetch('https://dog.ceo/api/breeds/image/random')

    return NextResponse.json(randomDogImg)
  }
}
