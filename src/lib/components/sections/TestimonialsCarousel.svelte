<script>
	import { Container, Section, Heading } from '$lib/components/ui/atoms';
	import { testimonials } from '$lib/data/testimonials';

	const perPage = 5;
	let currentPage = 0;

	$: totalPages = Math.ceil(testimonials.length / perPage);
	$: canPrev = currentPage > 0;
	$: canNext = currentPage < totalPages - 1;
	$: visible = testimonials.slice(currentPage * perPage, (currentPage + 1) * perPage);

	function prev() { if (canPrev) currentPage--; }
	function next() { if (canNext) currentPage++; }
</script>

<Section bg="white">
	<Container>
		<div class="section-header">
			<div class="header-text">
				<Heading level={2} align="left">What Our Customers Say</Heading>
				<p class="section-subtitle">
					Join hundreds of businesses that trust EMAK Telecom
				</p>
			</div>
			<div class="header-controls">
				<button class="nav-btn" on:click={prev} disabled={!canPrev} aria-label="Previous page">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
				<button class="nav-btn" on:click={next} disabled={!canNext} aria-label="Next page">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>
			</div>
		</div>

		{#key currentPage}
			<div class="testimonial-grid">
				{#each visible as testimonial, i}
					<div class="testimonial-card" class:featured={i === 0}>
						<div class="card-content">
							<div class="quote-mark">
								<svg width="32" height="24" viewBox="0 0 32 24" fill="none">
									<path d="M0 24V14.4C0 11.73 0.48 9.33 1.44 7.2C2.44 5.07 3.77 3.27 5.44 1.8C7.11 0.33 8.93 -0.6 10.93 -1L12 1.8C10.27 2.53 8.73 3.73 7.4 5.4C6.07 7.07 5.33 8.87 5.2 10.8H12V24H0ZM20 24V14.4C20 11.73 20.48 9.33 21.44 7.2C22.44 5.07 23.77 3.27 25.44 1.8C27.11 0.33 28.93 -0.6 30.93 -1L32 1.8C30.27 2.53 28.73 3.73 27.4 5.4C26.07 7.07 25.33 8.87 25.2 10.8H32V24H20Z" fill="currentColor"/>
								</svg>
							</div>
							<p class="quote">{testimonial.quote}</p>
							<div class="rating">
								{#each Array(testimonial.rating) as _}
									<i class="fas fa-star"></i>
								{/each}
							</div>
						</div>
						<div class="author">
							<div class="author-photo">
								<img src={testimonial.photo} alt={testimonial.name} />
							</div>
							<div class="author-info">
								<p class="author-name">{testimonial.name}</p>
								<p class="author-role">{testimonial.role}, {testimonial.company}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/key}
	</Container>
</Section>

<style>
	.section-header {
		display: flex; align-items: flex-end; justify-content: space-between;
		gap: var(--space-md); margin-bottom: var(--space-2xl);
	}
	.header-text { flex: 1; }
	.header-text :global(h2) { margin-bottom: var(--space-sm); }
	.header-text :global(.section-subtitle) { margin: 0; text-align: left; }
	.header-controls { display: flex; gap: 8px; flex-shrink: 0; }

	/* Grid */
	.testimonial-grid {
		display: grid; grid-template-columns: repeat(3, 1fr);
		gap: var(--space-sm); animation: fadeIn 0.35s ease;
	}
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(8px); }
		to { opacity: 1; transform: translateY(0); }
	}

	/* Card */
	.testimonial-card {
		background: var(--color-card); border-radius: 16px; padding: 2rem;
		display: flex; flex-direction: column; justify-content: space-between;
		transition: all var(--ease); overflow: hidden; border: 1px solid transparent;
	}
	.testimonial-card.featured { grid-column: span 2; }
	.testimonial-card:hover {
		background: var(--color-card-hover); border-color: var(--color-card-border);
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06); transform: scale(1.02);
	}

	/* Content */
	.card-content { flex: 1; }
	.quote-mark { color: var(--color-accent); opacity: 0.2; margin-bottom: var(--space-md); }
	.quote { font-size: 1.1rem; line-height: 1.65; color: var(--color-primary); margin: 0 0 var(--space-md); }
	.featured .quote { font-size: 1.25rem; }
	.rating { display: flex; gap: 3px; margin-bottom: var(--space-lg); }
	.rating i { color: var(--color-accent); font-size: 0.85rem; }

	/* Author */
	.author {
		display: flex; align-items: center; gap: var(--space-sm);
		padding-top: var(--space-md); border-top: 1px solid var(--color-border-light);
	}
	.author-photo { width: 44px; height: 44px; border-radius: 50%; overflow: hidden; flex-shrink: 0; }
	.author-photo img { width: 100%; height: 100%; object-fit: cover; }
	.author-name { font-size: 0.9375rem; font-weight: var(--fw-semibold); color: var(--color-primary); margin: 0; line-height: 1.3; }
	.author-role { font-size: 0.875rem; color: var(--color-text-muted); margin: 0; line-height: 1.4; }

	/* Responsive */
	@media (max-width: 1024px) {
		.testimonial-card { padding: 1.75rem; }
		.quote { font-size: 1rem; }
		.featured .quote { font-size: 1.1rem; }
	}
	@media (max-width: 768px) {
		.section-header { flex-direction: column; align-items: flex-start; }
		.testimonial-grid { grid-template-columns: 1fr; }
		.testimonial-card.featured { grid-column: span 1; }
		.quote-mark svg { width: 24px; height: 18px; }
	}
</style>
