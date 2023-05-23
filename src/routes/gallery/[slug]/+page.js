export async function load({ fetch, params }) {
  const res = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/repo995752852.wordpress.com/posts/slug:${params.slug}`
  )
  const post = await res.json()

  return { post }
}
