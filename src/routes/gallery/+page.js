export async function load({ fetch }) {
  const endpoint = 'https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/?category=art-class'

  const response = await fetch(endpoint)
  const posts = await response.json()

  return { posts }
}
