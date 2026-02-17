<script>
	export let cols = 3;
	export let gap = 'lg';
</script>

<div class="grid cols-{cols} gap-{gap}">
	<slot />
</div>

<style>
	.grid { display: grid; }

	/* Column layouts */
	.cols-1 { grid-template-columns: 1fr; }
	.cols-2 { grid-template-columns: repeat(2, 1fr); }
	.cols-3 { grid-template-columns: repeat(3, 1fr); }
	.cols-4 { grid-template-columns: repeat(4, 1fr); }

	/* Gap sizes */
	.gap-sm { gap: var(--spacing-sm); }
	.gap-md { gap: var(--spacing-md); }
	.gap-lg { gap: var(--spacing-lg); }
	.gap-xl { gap: var(--spacing-xl); }

	/* Responsive breakpoints */
	@media (max-width: 1024px) {
		.cols-4 { grid-template-columns: repeat(2, 1fr); }
		.cols-3 { grid-template-columns: repeat(2, 1fr); }
	}

	@media (max-width: 768px) {
		.cols-4,
		.cols-3,
		.cols-2 { grid-template-columns: 1fr; }

		.gap-xl,
		.gap-lg { gap: var(--spacing-md); }
	}
</style>
