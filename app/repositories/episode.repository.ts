import type { EpisodeSummary } from '~/types/rick-and-morty'

export const episodeRepository = {
  getEpisode(id: string) {
    return $fetch<EpisodeSummary>(`/api/episodes/${id}`)
  }
}
