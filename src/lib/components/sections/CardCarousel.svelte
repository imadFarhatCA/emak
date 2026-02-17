<script>
	import Carousel from '$lib/components/ui/Carousel.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import { Section, Heading } from '$lib/components/ui/atoms';

	export let title = '';
	export let subtitle = '';
	export let description = '';
	export let descriptionHighlight = '';
	export let cards = [];

	let scrollPrev, scrollNext;
	let canPrev = false, canNext = false;

	function handleApiReady(e) {
		({ scrollPrev, scrollNext } = e.detail);
	}

	function handleScrollChange(e) {
		canPrev = e.detail.canScrollPrev;
		canNext = e.detail.canScrollNext;
	}
</script>

<Section bg="white">
	<div class="carousel-wrapper">
		<div class="carousel-header">
			<div class="header-text">
				{#if subtitle}<p class="section-label">{subtitle}</p>{/if}
				{#if title}<Heading level={2}>{title}</Heading>{/if}
				{#if description}
					<p class="section-desc">{description}{#if descriptionHighlight} <span class="card-title-text">{descriptionHighlight}</span>{/if}</p>
				{/if}
			</div>
			<div class="header-controls">
				<button class="nav-btn" on:click={scrollPrev} disabled={!canPrev} aria-label="Previous slide">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
				<button class="nav-btn" on:click={scrollNext} disabled={!canNext} aria-label="Next slide">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
			</div>
		</div>

		<div class="carousel-container">
			<Carousel autoplay={false} loop={false} showControls={false} on:apiReady={handleApiReady} on:scrollChange={handleScrollChange}>
				{#each cards as card}
					<div class="embla__slide">
						<Card
							title={card.title}
							description={card.description}
							image={card.image}
							link={card.link}
						/>
					</div>
				{/each}
			</Carousel>
		</div>
	</div>
</Section>

<style>
	.carousel-wrapper { width: 100%; }
	.carousel-header {
		margin-left: 17.5%; margin-bottom: var(--space-lg);
		display: flex; align-items: flex-end; justify-content: space-between; gap: var(--space-md);
		width: calc(380px * 3 + 32px * 2); max-width: 90%;
	}
	.header-text { flex: 1; }
	.section-label { font-size: 0.9375rem; font-weight: var(--fw-medium); color: var(--color-text-light); margin-bottom: var(--space-sm); }
	.carousel-header :global(h2) {
		font-family: var(--font); font-size: 2.75rem; font-weight: var(--fw-medium);
		letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 0; max-width: 900px;
	}
	.section-desc {
		margin-top: var(--space-sm); font-size: 1.0625rem; line-height: 1.6;
		color: var(--color-text-muted); font-weight: var(--fw-normal); max-width: 720px;
	}
	.header-controls { display: flex; gap: 8px; flex-shrink: 0; }

	.carousel-container { margin-left: 17.5%; overflow: visible; }
	.carousel-container :global(.embla) { overflow: visible; }
	.carousel-container :global(.embla__container) { display: flex; gap: var(--space-lg); }
	.carousel-container :global(.embla__slide) { flex: 0 0 380px; min-width: 0; }

	@media (max-width: 1024px) {
		.carousel-header { margin-left: 7.5%; width: calc(320px * 3 + 32px * 2); max-width: 85%; }
		.carousel-container { margin-left: 7.5%; }
		.carousel-container :global(.embla__slide) { flex: 0 0 320px; }
	}
	@media (max-width: 768px) {
		.carousel-header { margin-left: 5%; width: auto; max-width: 90%; margin-right: 5%; flex-direction: column; align-items: flex-start; }
		.carousel-header :global(h2) { font-size: 1.75rem; }
		.carousel-container { margin-left: 5%; }
		.carousel-container :global(.embla__slide) { flex: 0 0 92vw; }
	}
</style>
