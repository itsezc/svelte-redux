<script>
	export let addArticle;
	export let articles;

	let articleTitle = "";

	onMount(() => {
		if ('function' === typeof addArticle) {
			addArticle('New president of the USA');
		}
	});
</script>

<input bind:value={articleTitle} />
<button on:click={() => addArticle(articleTitle)}>Create Article</button>
{#if articles.length}
	<ul>
		{#each articles as article}
			<li>{article.name}</li>
		{/each}
	</ul>
{:else}
	<p>No articles found</p>
{/if}
