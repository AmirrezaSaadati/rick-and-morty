interface GraphQLResponse<T> {
  data?: T
  errors?: Array<{ message: string }>
}

export async function executeGraphQL<T>(event: Parameters<typeof useRuntimeConfig>[0], query: string, variables: Record<string, unknown> = {}) {
  const config = useRuntimeConfig(event)
  const response = await $fetch<GraphQLResponse<T>>(config.public.graphqlEndpoint, {
    method: 'POST',
    body: { query, variables },
    retry: 2,
    timeout: 15_000
  })

  if (response.errors?.length) {
    throw createError({ statusCode: 502, statusMessage: response.errors[0]?.message || 'GraphQL service error' })
  }
  if (!response.data) throw createError({ statusCode: 502, statusMessage: 'GraphQL service returned no data' })
  return response.data
}
