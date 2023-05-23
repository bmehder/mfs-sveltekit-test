<script>
	export let text = ''
	
	const year = new Date().getFullYear()
</script>

<footer>
	<div>© Copyright {year} {text} All rights reserved.</div>
</footer>

<style>
	footer {
		background-color: #555;
		color: white;						
	}
	div {
		max-width: 64em;
		margin-inline: auto;
		padding-block: 2em;	
		padding-inline: 1.5em;	
		text-align: center;
	}
</style>