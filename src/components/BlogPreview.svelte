<script>
    export let title;
    export let date;
    export let blurb;
    export let slug;
</script>

<div class="blog-preview">
<h2>{title}</h2>
<h3>{date}</h3>
<p>{blurb}</p>
<a role="button" href="/blog/{slug}" class="btn btn-small btn-blog-link bg-bronze">Read</a>
<hr />
</div>

<style>
.blog-preview {
    text-align: left;
    padding: 1rem 1rem;
    margin: 0.7rem 0;
}
h2 {
    color: var(--silver);
}
h3 {
    color: var(--gold);
    font-weight: 300;
}
p {
    color: white;
    margin: 0.7rem 0;
}
a {
    text-align: right;
}
</style>