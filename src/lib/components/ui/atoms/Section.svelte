<script>
	export let bg = 'white';
	export let size = 'default';
</script>

<section class="section {bg} {size}">
	<slot />
</section>

<style>
	.section { padding: var(--space-3xl) 0; }
	.sm { padding: var(--space-2xl) 0; }
	.lg { padding: 120px 0; }
	.white { background-color: var(--color-bg); }
	.gray { background-color: var(--color-gray); }
	.dark { background-color: var(--color-gray); color: var(--color-text); }
</style>
