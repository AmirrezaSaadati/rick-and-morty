import type { CharactersPage } from '../../app/types/rick-and-morty'
import { executeGraphQL } from './graphql-client'

interface CharactersQuery { characters: CharactersPage | null }

const charactersQuery = `
  query GetCharacters($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info { count pages next prev }
      results { id name image status species location { id name } }
    }
  }
`

export const characterDataSource = {
  async findMany(event: Parameters<typeof useRuntimeConfig>[0], page: number, name?: string) {
    const data = await executeGraphQL<CharactersQuery>(event, charactersQuery, { page, name: name || null })
    return data.characters ?? { info: { count: 0, pages: 0, next: null, prev: null }, results: [] }
  }
}
