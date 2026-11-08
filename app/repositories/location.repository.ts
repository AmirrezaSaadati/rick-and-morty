import type { LocationSummary } from '~/types/rick-and-morty'

export const locationRepository = {
  getLocation(id: string) {
    return $fetch<LocationSummary>(`/api/locations/${id}`)
  }
}
