import { locationRepository } from '~/repositories/location.repository'

export const locationService = {
  async getLocation(id: string) {
    const dto = await locationRepository.getLocation(id)
    return { ...dto }
  }
}
