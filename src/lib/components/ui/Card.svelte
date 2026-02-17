<script>
	export let title = '';
	export let description = '';
	export let image = '';
	export let link = null;
</script>

<div class="card">
	{#if image}
		<div class="card-image">
			<img src={image} alt={title} />
		</div>
	{/if}
	<div class="card-footer">
		<p class="card-title">
			<span class="title-bold">{title}</span>
			{#if description}<span class="title-light"> {description}</span>{/if}
		</p>
		{#if link}
			<a href={link.url} class="card-arrow" aria-label={link.text}>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
					<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		{/if}
	</div>
</div>

<style>
	.card {
		background: var(--color-card); border-radius: var(--radius-md); overflow: hidden;
		transition: all var(--ease); height: 100%; display: flex; flex-direction: column;
		border: 1px solid transparent; box-shadow: none;
	}
	.card:hover { background: var(--color-card-hover); border-color: var(--color-card-border); box-shadow: 0 2px 12px rgba(0,0,0,0.06); }

	.card-image {
		width: 100%; aspect-ratio: 3/2; overflow: hidden; padding: 2.5%;
		display: flex; align-items: center; justify-content: center;
	}
	.card-image img { width: 100%; height: 100%; object-fit: contain; }

	.card-footer { display: flex; align-items: flex-end; justify-content: space-between; padding: 0.875rem 1rem; gap: 0.75rem; }
	.card-title { font-size: 1.0625rem; line-height: 1.4; color: var(--color-primary); margin: 0; }
	.title-bold { font-weight: var(--fw-semibold); }
	.title-light { font-weight: var(--fw-normal); color: var(--color-text-muted); }

	.card-arrow {
		flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%;
		background: var(--color-border-light); color: var(--color-primary);
		text-decoration: none; transition: all var(--ease); display: flex; align-items: center; justify-content: center;
	}
	.card:hover .card-arrow, .card-arrow:hover { background: var(--color-primary); color: white; }

	@media (max-width: 768px) {
		.card-image { aspect-ratio: 5/4; }
		.card-title { font-size: 1rem; }
		.card-arrow { width: 34px; height: 34px; }
	}
</style>
