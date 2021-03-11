<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import BlogPreview from "../../components/BlogPreview.svelte";
	export let posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Blog</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
				<li><BlogPreview {...post} /></li>
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
</style>