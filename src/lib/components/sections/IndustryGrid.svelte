<script>
	import { Container, Section, Heading } from '$lib/components/ui/atoms';
	import { industries } from '$lib/data/industries';
</script>

<Section bg="gray" id="solutions">
	<Container>
		<Heading level={2} align="left">Solutions for Every Industry</Heading>
		<p class="section-subtitle" style="text-align:left">
			Tailored phone systems designed for the unique needs of your business
		</p>

		<div class="grid-desktop">
			{#each industries as industry, i}
				<div class="business-card" class:wide={i === 4}>
					<div class="card-top">
						<span class="card-arrow">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</span>
						<i class={industry.icon + ' business-icon'}></i>
					</div>
					<p class="business-title">{industry.name}</p>
					<p class="business-desc">{industry.description}</p>
				</div>
			{/each}
		</div>

		<div class="grid-mobile">
			{#each industries as industry}
				<div class="mobile-item">
					<i class={industry.icon + ' mobile-icon'}></i>
					<span class="mobile-name">{industry.name}</span>
					<span class="mobile-desc">{industry.description}</span>
				</div>
			{/each}
		</div>
	</Container>
</Section>

<style>
	/* Desktop Grid */
	.grid-desktop {
		display: grid; grid-template-columns: repeat(4, 1fr);
		gap: var(--space-sm); max-width: 1100px;
	}
	.business-card {
		background: white; border-radius: 16px; border: none; padding: 2.5rem;
		aspect-ratio: 1; display: flex; flex-direction: column; align-items: flex-start;
		transition: all var(--ease); box-shadow: none; overflow: hidden;
	}
	.business-card.wide { grid-column: span 2; aspect-ratio: auto; }
	.business-card:hover {
		background: var(--color-card-hover);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08); transform: scale(1.03);
	}

	.card-top { display: flex; align-items: center; gap: 0; margin-bottom: 1.5rem; }
	.card-arrow {
		width: 36px; height: 36px; border-radius: 50%; background: var(--color-primary); color: white;
		display: flex; align-items: center; justify-content: center; flex-shrink: 0;
		margin-left: -48px; opacity: 0; transition: all 0.35s ease;
	}
	.business-card:hover .card-arrow { margin-left: 0; margin-right: 12px; opacity: 1; }

	.business-card :global(.business-icon) { font-size: 2.25rem; color: var(--color-accent); transition: transform 0.35s ease; }
	.business-card:hover :global(.business-icon) { transform: translateX(10px); }

	.business-title { font-size: 1.25rem; font-weight: var(--fw-semibold); color: var(--color-primary); line-height: 1.3; margin: 0 0 0.35rem; }
	.business-desc { font-size: 1rem; color: var(--color-text-muted); line-height: 1.5; margin: 0; }

	/* Mobile Grid */
	.grid-mobile { display: none; }
	.mobile-item {
		background: white; border-radius: 14px; padding: 1.5rem;
		display: flex; flex-direction: column; align-items: flex-start;
		transition: all var(--ease); border: none; aspect-ratio: 1;
	}
	.mobile-item:hover { background: var(--color-card-hover); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08); }
	.mobile-item :global(.mobile-icon) { font-size: 2rem; color: var(--color-accent); margin-bottom: 1.25rem; }
	.mobile-name { font-size: 1.25rem; font-weight: var(--fw-semibold); color: var(--color-primary); line-height: 1.3; margin-bottom: 0.35rem; }
	.mobile-desc { font-size: 1rem; color: var(--color-text-muted); line-height: 1.5; }

	/* Responsive */
	@media (max-width: 1024px) {
		.business-card { padding: 2rem; }
		.business-title { font-size: 1.1rem; }
		.business-desc { font-size: 0.9rem; }
	}
	@media (max-width: 768px) {
		.grid-desktop { display: none; }
		.grid-mobile { display: grid; grid-template-columns: 1fr; gap: var(--space-sm); }
		.grid-mobile .mobile-item { aspect-ratio: auto; }
	}
</style>
