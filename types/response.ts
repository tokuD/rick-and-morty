import { CharacterType } from './character'

export interface ApiResponseType {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: CharacterType[]
}
