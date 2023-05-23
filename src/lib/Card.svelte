<script>
	export let post
	export let buttonText = "Something"
	
	const { featured_image, title, excerpt, slug } = post
	console.log(post)
</script>

<li>
	<a href="/gallery/{slug}"><img src="{featured_image}" alt="placeholder"></a>
	<div>
		<a href="/gallery/{slug}"><h2>{@html title}</h2></a>
		<p>{@html excerpt}</p>
		<a href="/gallery/{slug}">{buttonText}</a>
	</div>
</li>

<style>
	li {
		margin-inline: auto;
		background-color: white;
		list-style: none;
	}
	
	img {
		display: block;
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}
	
	h2 {
		line-height: 1.25;
	}
	
	div {
		display: grid;
		gap: 1em;
		padding: 1.5em;
	}
	
	div a:last-child {
		padding: 1em;
		background-color: tomato;
		color: white;
		text-align: center;
		text-transform: uppercase;
		font-weight: bold;
		letter-spacing: 1px;
		border: none;
		cursor: pointer;
	}
	
	div a:last-child:hover {
		background-color: transparent;
		color: tomato;
		outline: 0.25em solid tomato;
		text-decoration: none;
	}
</style>