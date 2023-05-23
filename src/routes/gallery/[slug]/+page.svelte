<script>
  import PageTitle from '../../../lib/PageTitle.svelte'

  export let data
  console.log(data)
</script>

<div class="post">
  <PageTitle title={data.post.title} />

  <img src={data.post.featured_image} alt={data.post.title} />

  <div class="content">
    {@html data.post.excerpt}
  </div>
</div>

<style>
  .post {
    display: grid;
    gap: 1.5rem;
    max-width: 64rem;
    margin-block-end: 4rem;
    margin-inline: auto;
    color: white;
    overflow: auto;
  }
</style>
