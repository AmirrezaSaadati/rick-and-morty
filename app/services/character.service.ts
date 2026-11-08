import type { CharacterDetail, CharactersPage } from '~/types/rick-and-morty'
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

function mapCharacterDetail(dto: CharacterDetail): CharacterDetail {
  return {
    ...dto,
    origin: { ...dto.origin },
    location: { ...dto.location },
    episode: dto.episode.map(episode => ({ ...episode }))
  }
}

export const characterService = {
  async getCharacters(page: number, name?: string) {
    const dto = await characterRepository.getCharacters(page, name)
    return mapCharactersPage(dto)
  },
  async getCharacter(id: string) {
    const dto = await characterRepository.getCharacter(id)
    return mapCharacterDetail(dto)
  }
}
