type Query = undefined | string | string[]

export function getAsString(query: Query): string {
  if (typeof query === 'undefined') {
    return ''
  }

  if (Array.isArray(query)) {
    return query.join('')
  }

  return query
}
