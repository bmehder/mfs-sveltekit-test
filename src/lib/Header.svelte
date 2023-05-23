<script>
	export let logo = "Fallback"
</script>

<header>
	<div>		
		<p><a href="/">{logo}</a></p>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/gallery">Gallery</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		background-color: tomato;
		color: white;
	}
	
	div {
		max-width: 64em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5em;
		margin-inline: auto;
		padding-block: 1.5em;
		padding-inline: 3em;
	}
	
	p {
		font-size: 2rem;
		font-weight: bold;
	}
	
	p a {
		text-decoration: none;
	}
		
	ul {
		display: flex;
		gap: 1.5em;
		list-style: none;
	}
	
	a {
		color: white;
	}
</style>