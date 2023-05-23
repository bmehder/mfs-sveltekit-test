<script>
  import PageTitle from '$lib/PageTitle.svelte'
  import Card from '$lib/Card.svelte';

  export let data
</script>

<PageTitle title="Student Posts" />

<ul>
	{#each data.posts.posts as post}
		<Card {post} buttonText="Read More" />
	{/each}
</ul>

<style>
  ul {
		max-width: 64em;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16em, 1fr));
		gap: 3em;
		margin-inline: auto;
		padding: 3em;
		line-height: 1.5;
	}
</style>