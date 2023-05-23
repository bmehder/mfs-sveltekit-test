<script>
  import '$lib/app.css'
  import Footer from '$lib/Footer.svelte'
  import Header from '$lib/Header.svelte'
</script>

<div class="wrapper">
  <Header logo="Art Class Gallery" />

  <main>
    <slot />
  </main>

  <Footer text="Anna Pollard" />
</div>

<style>
  .wrapper {
    min-height: 100dvh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    line-height: 1.5;
  }
</style>