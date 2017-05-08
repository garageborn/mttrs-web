export const rootPath = '/'

export function categoryPath (slug) {
  return `/${slug}`
}

export function tagPath (categorySlug, tagSlug) {
  return `/${categorySlug}/${tagSlug}`
}

export function publisherPath (slug) {
  return `/${slug}`
}

export function linkPath (slug) {
  return `/link/${slug}`
}
