import type { CharacterDetail, CharactersPage } from '~/types/rick-and-morty'

export const characterRepository = {
  getCharacters(page: number, name?: string) {
    return $fetch<CharactersPage>('/api/characters', {
      query: { page, ...(name ? { name } : {}) }
    })
  },
  getCharacter(id: string) {
    return $fetch<CharacterDetail>(`/api/characters/${id}`)
  }
}
