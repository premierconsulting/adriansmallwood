<script>

</script>

<svelte:head>
  <title>Adrian Smallwood</title>
</svelte:head>

<div class="me">
  <h1>Adrian Smallwood</h1>
  <h2>Web Developer</h2>
  <h3>Building tomorrow today</h3>
</div>
<div class="buttons">
  <a role="button" href="/portfolio" class="btn bg-gold">Portfolio</a>
  <a role="button" href="/blog" class="btn bg-bronze">Blog</a>
  <a role="button" href="/about" class="btn bg-silver">About</a>
</div>

<style>
.me {
	flex: 1;
}
.buttons {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
h1 {
	color: var(--primary);
	font-size: 3rem;
	font-weight: 300;
	margin: 0;
}
h2 {
	color: var(--silver);
	font-size: 2.25rem;
	font-weight: 300;
	margin: 0;
}
h3 {
	color: white;
	font-size: 2rem;
	font-weight: 300;
	margin: 0;
}
</style>
