import type { LocationSummary } from '../../app/types/rick-and-morty'
import { executeGraphQL } from './graphql-client'

interface LocationQuery { location: LocationSummary | null }

const locationQuery = `
  query GetLocation($id: ID!) {
    location(id: $id) { id name type dimension }
  }
`

export const locationDataSource = {
  async findById(event: Parameters<typeof useRuntimeConfig>[0], id: string) {
    const data = await executeGraphQL<LocationQuery>(event, locationQuery, { id })
    return data.location
  }
}
