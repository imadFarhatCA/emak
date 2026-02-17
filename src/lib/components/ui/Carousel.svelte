<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import { createEventDispatcher } from 'svelte';

	export let autoplay = false;
	export let autoplayDelay = 4000;
	export let loop = true;
	export let showControls = false;

	const dispatch = createEventDispatcher();
	let emblaApi, canScrollPrev = false, canScrollNext = false;
	const options = { loop };
	const plugins = autoplay ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })] : [];

	function init(event) {
		emblaApi = event.detail;
		updateButtons();
		emblaApi.on('select', updateButtons);
		emblaApi.on('reInit', updateButtons);
		dispatch('apiReady', { scrollPrev, scrollNext });
	}

	function updateButtons() {
		if (!emblaApi) return;
		canScrollPrev = emblaApi.canScrollPrev();
		canScrollNext = emblaApi.canScrollNext();
		dispatch('scrollChange', { canScrollPrev, canScrollNext });
	}

	function scrollPrev() { emblaApi?.scrollPrev(); }
	function scrollNext() { emblaApi?.scrollNext(); }
</script>

<div class="carousel-wrapper">
	<div class="embla" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={init}>
		<div class="embla__container">
			<slot />
		</div>
	</div>

	{#if showControls}
		<div class="carousel-controls">
			<button class="carousel-btn" on:click={scrollPrev} disabled={!canScrollPrev} aria-label="Previous slide">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
			<button class="carousel-btn" on:click={scrollNext} disabled={!canScrollNext} aria-label="Next slide">
				<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
					<path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
		</div>
	{/if}
</div>

<style>
	.carousel-wrapper { position: relative; width: 100%; }
	.embla { overflow: hidden; width: 100%; }
	.embla__container { display: flex; }
	:global(.embla__slide) { flex: 0 0 100%; min-width: 0; }

	.carousel-controls { display: flex; gap: var(--space-sm); }
	.carousel-btn {
		width: 48px; height: 48px; border-radius: var(--radius-full);
		background: var(--color-bg); border: 2px solid var(--color-border);
		color: var(--color-primary); cursor: pointer;
		display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;
	}
	.carousel-btn:hover:not(:disabled) { background: var(--color-accent); border-color: var(--color-accent); color: white; }
	.carousel-btn:disabled { opacity: 0.3; cursor: not-allowed; }
</style>
