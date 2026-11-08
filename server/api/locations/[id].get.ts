import { locationDataSource } from '../../graphql/location.data-source'

export default defineCachedEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || ''
  if (!/^\d+$/.test(id)) throw createError({ statusCode: 400, statusMessage: 'Invalid location ID' })
  const location = await locationDataSource.findById(event, id)
  if (!location) throw createError({ statusCode: 404, statusMessage: 'Location not found' })
  return location
}, {
  maxAge: 3600,
  staleMaxAge: 86_400,
  getKey: event => `location:${getRouterParam(event, 'id') || ''}`
})
