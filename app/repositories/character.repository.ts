import type { CharactersPage } from '~/types/rick-and-morty'

export const characterRepository = {
  getCharacters(page: number, name?: string) {
    return $fetch<CharactersPage>('/api/characters', {
      query: { page, ...(name ? { name } : {}) }
    })
  }
}
