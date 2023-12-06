<script>
	import ParserForm from '../ParserForm.svelte';
</script>

<svelte:head>
	<title>Additives</title>
	<meta name="description" content="Experimental for Additives" />
</svelte:head>

<section>
	<h1>
		Analisador de ingredientes
	</h1>

	<ParserForm />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
