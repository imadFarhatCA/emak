<script>
	export let level = 2;
	export let align = 'left';
</script>

<svelte:element this={`h${level}`} class="heading level-{level} align-{align}">
	<slot />
</svelte:element>

<style>
	.heading {
		margin-bottom: var(--space-lg);
		font-weight: var(--fw-semibold);
		line-height: 1.2;
		color: var(--color-primary);
		letter-spacing: -0.02em;
	}
	.level-1 { font-size: 3.5rem; margin-bottom: var(--space-xl); }
	.level-2 { font-size: 3rem; margin-bottom: var(--space-lg); }
	.level-3 { font-size: 2rem; margin-bottom: var(--space-md); }
	.level-4 { font-size: 1.5rem; }
	.level-5 { font-size: 1.25rem; }
	.level-6 { font-size: 1.1rem; }

	.align-left { text-align: left; }
	.align-center { text-align: center; }
	.align-right { text-align: right; }

	@media (max-width: 1024px) {
		.level-1 { font-size: 2.75rem; }
		.level-2 { font-size: 2.25rem; }
		.level-3 { font-size: 1.75rem; }
	}
	@media (max-width: 768px) {
		.level-1 { font-size: 2rem; }
		.level-2 { font-size: 1.75rem; }
		.level-3 { font-size: 1.5rem; }
	}
</style>
