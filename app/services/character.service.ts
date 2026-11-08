import type { CharactersPage } from '~/types/rick-and-morty'
import { characterRepository } from '~/repositories/character.repository'

function mapCharactersPage(dto: CharactersPage): CharactersPage {
  return {
    info: { ...dto.info },
    results: dto.results.map(character => ({
      ...character,
      location: { ...character.location }
    }))
  }
}

export const characterService = {
  async getCharacters(page: number, name?: string) {
    const dto = await characterRepository.getCharacters(page, name)
    return mapCharactersPage(dto)
  }
}
