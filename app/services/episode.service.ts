import { episodeRepository } from '~/repositories/episode.repository'

export const episodeService = {
  async getEpisode(id: string) {
    const dto = await episodeRepository.getEpisode(id)
    return { ...dto }
  }
}
