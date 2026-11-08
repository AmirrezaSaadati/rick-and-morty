import type { CharacterDetail, CharactersPage } from '../../app/types/rick-and-morty'
import { executeGraphQL } from './graphql-client'

interface CharactersQuery { characters: CharactersPage | null }
interface CharacterQuery { character: CharacterDetail | null }

const charactersQuery = `
  query GetCharacters($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info { count pages next prev }
      results { id name image status species location { id name } }
    }
  }
`

const characterQuery = `
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id name image status species type gender
      origin { id name type dimension }
      location { id name type dimension }
      episode { id name episode air_date }
    }
  }
`

export const characterDataSource = {
  async findMany(event: Parameters<typeof useRuntimeConfig>[0], page: number, name?: string) {
    const data = await executeGraphQL<CharactersQuery>(event, charactersQuery, { page, name: name || null })
    return data.characters ?? { info: { count: 0, pages: 0, next: null, prev: null }, results: [] }
  },
  async findById(event: Parameters<typeof useRuntimeConfig>[0], id: string) {
    const data = await executeGraphQL<CharacterQuery>(event, characterQuery, { id })
    return data.character
  }
}
