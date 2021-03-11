<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`portfolio/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { project: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let project;
</script>

<svelte:head>
	<title>{project.title}</title>
</svelte:head>

<h1>Portfolio</h1>
<h2>{project.title}</h2>
<p>{project.summary}</p>

<div class="buttons">
  <a role="button" href="/portfolio" class="port-btn bg-primary">View Github</a>
  <a role="button" href="/blog" class="port-btn bg-bronze">View Project</a>
</div>
<hr />

<!-- <div class="content">
	{@html project.html}
</div> -->

<style>
h1 {
	color: var(--primary);
	font-size: 3rem;
	margin-left: 1rem;
    text-align: left;
    font-weight: 300;
}
h2 {
    color: var(--silver);
	font-size: 1.5rem;
	margin-left: 1rem;
    text-align: left;
    font-weight: 300;
}
p {
    color: white;
    margin: 1.5rem 1.5rem;
    text-align: left;
}
.buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.port-btn {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
	width: 150px;
	height: 40px;
	font-size: 1.5rem;
	text-align: center;
}
.port-btn:first-of-type {
    margin-right: 0.5rem;
}
</style>
