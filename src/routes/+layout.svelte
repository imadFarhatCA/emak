<script>
	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<svelte:head>
	<script src="https://website-control-panel.pages.dev/tracker.js"></script>
</svelte:head>

<div class="app">
	<Header />

	<main class="main-content">
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.main-content {
		flex: 1;
	}
</style>
