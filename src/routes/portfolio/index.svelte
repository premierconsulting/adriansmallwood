<script context="module">
	export function preload() {
		return this.fetch(`portfolio.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}
</script>

<script>
	export let projects;
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<h1>Portfolio</h1>
<ul>
	{#each projects as project}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="portfolio/{project.slug}" class="project-link">{project.title}</a></li>
	{/each}
</ul>

<style>
h1 {
	font-size: 3rem;
	color: var(--primary);
	text-align: left;
	margin-left: 1rem;
    font-weight: 300;
}
.project-link {
    color: #B9C6D5;
    font-weight: 300;
    font-size: 1.5rem;
}
ul {
    text-align: left;
    margin: 1rem;
}
</style>
