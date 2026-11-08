import type { EpisodeSummary } from '../../app/types/rick-and-morty'
import { executeGraphQL } from './graphql-client'

interface EpisodeQuery { episode: EpisodeSummary | null }

const episodeQuery = `
  query GetEpisode($id: ID!) {
    episode(id: $id) { id name episode air_date }
  }
`

export const episodeDataSource = {
  async findById(event: Parameters<typeof useRuntimeConfig>[0], id: string) {
    const data = await executeGraphQL<EpisodeQuery>(event, episodeQuery, { id })
    return data.episode
  }
}
