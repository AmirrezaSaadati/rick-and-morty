import { characterDataSource } from '../../graphql/character.data-source'

export default defineCachedEventHandler(async (event) => {
  const id = getRouterParam(event, 'id') || ''
  if (!/^\d+$/.test(id)) throw createError({ statusCode: 400, statusMessage: 'Invalid character ID' })
  const character = await characterDataSource.findById(event, id)
  if (!character) throw createError({ statusCode: 404, statusMessage: 'Character not found' })
  return character
}, {
  maxAge: 3600,
  staleMaxAge: 86_400,
  getKey: event => `character:${getRouterParam(event, 'id') || ''}`
})
