import { episodeDataSource } from '../../graphql/episode.data-source'

export default defineCachedEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || ''
  if (!/^\d+$/.test(id)) throw createError({ statusCode: 400, statusMessage: 'Invalid episode ID' })
  const episode = await episodeDataSource.findById(event, id)
  if (!episode) throw createError({ statusCode: 404, statusMessage: 'Episode not found' })
  return episode
}, {
  maxAge: 3600,
  staleMaxAge: 86_400,
  getKey: event => `episode:${getRouterParam(event, 'id') || ''}`
})
