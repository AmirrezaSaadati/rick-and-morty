import { characterDataSource } from '../../graphql/character.data-source'

export default defineCachedEventHandler(async (event) => {
  const params = getQuery(event)
  const page = Math.max(1, Number(params.page) || 1)
  const name = typeof params.name === 'string' ? params.name.trim() : ''
  return characterDataSource.findMany(event, page, name)
}, {
  maxAge: 600,
  staleMaxAge: 3600,
  getKey: event => {
    const params = getQuery(event)
    return `characters:${Math.max(1, Number(params.page) || 1)}:${typeof params.name === 'string' ? params.name.trim().toLowerCase() : ''}`
  }
})
