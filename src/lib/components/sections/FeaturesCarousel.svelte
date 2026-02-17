<script>
	import Carousel from '$lib/components/ui/Carousel.svelte';
	import { Container, Section, Heading } from '$lib/components/ui/atoms';
	import { features } from '$lib/data/features';
</script>

<Section bg="white">
	<Container>
		<Heading level={2} align="center">Why Choose EMAK Telecom</Heading>

		<Carousel autoplay={true} autoplayDelay={5000} loop={true}>
			{#each features as feature}
				<div class="embla__slide">
					<div class="feature-card">
						<div class="feature-image">
							<img src={feature.image} alt={feature.title} />
						</div>
						<div class="feature-content">
							<Heading level={3}>{feature.title}</Heading>
							<p class="feature-description">{feature.description}</p>
						</div>
					</div>
				</div>
			{/each}
		</Carousel>
	</Container>
</Section>

<style>
	.feature-card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-xl);
		align-items: center;
		padding: var(--spacing-xl);
		background-color: var(--color-light-gray);
		border-radius: var(--radius-lg);
		margin: 0 var(--spacing-sm);
	}

	.feature-image img {
		width: 100%;
		height: auto;
		border-radius: var(--radius-md);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.feature-content {
		padding: var(--spacing-md);
	}

	.feature-description {
		font-size: 1.1rem;
		line-height: 1.7;
		color: var(--color-text-light);
		margin: 0;
	}

	@media (max-width: 768px) {
		.feature-card {
			grid-template-columns: 1fr;
			gap: var(--spacing-lg);
			padding: var(--spacing-md);
		}

		.feature-image {
			order: -1;
		}

		.feature-description {
			font-size: 1rem;
		}
	}
</style>
