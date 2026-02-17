<script>
	import Button from '$lib/components/ui/Button.svelte';
	import { Container, Section, Heading } from '$lib/components/ui/atoms';
	import PhoneMockup from './PhoneMockup.svelte';
</script>

<Section bg="white" size="lg">
	<Container>
		<div class="hero-content">
			<Heading level={1} align="center">For businesses that can't afford to miss a call</Heading>
			<p class="hero-description">
				The intelligent phone system that automatically handles missed calls, responds to
				customers instantly, and keeps your team focused on what matters most
			</p>
			<div class="hero-cta">
				<Button variant="warning" href="#contact">
					Book a Demo
				</Button>
			</div>
			<div class="hero-image hero-desktop">
				<object data="/images/hero/hero-platform.svg" type="image/svg+xml" aria-label="EMAK Platform Dashboard">
				<img src="/images/hero/hero-platform.svg" alt="EMAK Platform Dashboard" />
			</object>
			</div>
			<div class="hero-image hero-mobile">
				<PhoneMockup />
			</div>
		</div>
	</Container>
</Section>

<style>
	.hero-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.hero-content :global(h1) {
		max-width: 760px;
	}

	.hero-description {
		font-size: 1.25rem;
		line-height: 1.7;
		color: var(--color-text-light);
		max-width: 900px;
		margin-bottom: var(--space-xl);
	}

	.hero-cta {
		display: flex;
		gap: var(--space-md);
		margin-bottom: var(--space-3xl);
	}

	.hero-image {
		width: 90vw;
		max-width: 90vw;
	}

	.hero-image img,
	.hero-image :global(object) {
		width: 100%;
		height: auto;
		border-radius: 6px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
	}

	.hero-desktop {
		display: block;
	}

	.hero-mobile {
		display: none;
	}

	@media (max-width: 1024px) {
		.hero-description {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 768px) {
		.hero-description {
			font-size: 1rem;
		}

		.hero-cta {
			margin-bottom: var(--space-2xl);
		}

		.hero-desktop {
			display: none;
		}

		.hero-mobile {
			display: block;
			width: 75vw;
			max-width: 360px;
		}

		.hero-mobile :global(svg) {
			overflow: visible;
			filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.12));
		}
	}
</style>
