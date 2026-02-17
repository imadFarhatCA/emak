<script>
	import Button from '$lib/components/ui/Button.svelte';
	import { Container, Section, Heading, Grid } from '$lib/components/ui/atoms';
</script>

<Section bg="white" id="pricing">
	<Container>
		<Heading level={2} align="center">Simple, Transparent Pricing</Heading>
		<p class="section-subtitle" style="text-align:center">
			Everything you need in one affordable price. No hidden fees, no surprises.
		</p>

		<Grid cols={3} gap="xl">
			<div class="pricing-card">
				<div class="pricing-icon">
					<i class="fas fa-dollar-sign"></i>
				</div>
				<Heading level={3}>One Price</Heading>
				<p class="pricing-description">
					All features included. No tiers, no upsells. Just one transparent monthly rate that
					covers everything your business needs.
				</p>
			</div>

			<div class="pricing-card">
				<div class="pricing-icon">
					<i class="fas fa-chart-line"></i>
				</div>
				<Heading level={3}>No Price Ladders</Heading>
				<p class="pricing-description">
					Your price stays the same as you grow. No surprise increases when you add users or
					exceed call limits. Predictable costs you can count on.
				</p>
			</div>

			<div class="pricing-card">
				<div class="pricing-icon">
					<i class="fas fa-file-signature"></i>
				</div>
				<Heading level={3}>No Contracts</Heading>
				<p class="pricing-description">
					Month-to-month service with no long-term commitments. Cancel anytime, no questions
					asked. We earn your business every single month.
				</p>
			</div>
		</Grid>

		<div class="pricing-cta">
			<p class="cta-text">Ready to get started?</p>
			<Button variant="warning" href="/contact">
				<i class="fas fa-phone"></i>
				Contact Sales
			</Button>
			<p class="cta-phone">
				or call us at <a href="tel:5141234567">(514) 123-EMAK</a>
			</p>
		</div>
	</Container>
</Section>

<style>
	.pricing-card {
		background-color: var(--color-gray); padding: var(--space-xl);
		border-radius: var(--radius-lg); text-align: center;
		transition: transform var(--ease);
	}
	.pricing-card:hover { transform: translateY(-5px); }

	.pricing-icon {
		width: 80px; height: 80px; margin: 0 auto var(--space-lg);
		display: flex; align-items: center; justify-content: center;
		background-color: var(--color-accent); border-radius: var(--radius-full);
		font-size: 2rem; color: var(--color-primary);
	}
	.pricing-description {
		font-size: 1rem; line-height: 1.7; color: var(--color-text-light); margin: 0;
	}

	.pricing-cta {
		padding: var(--space-2xl);
		background: var(--color-primary);
		border-radius: var(--radius-lg); color: var(--color-bg);
		text-align: center; margin-top: var(--space-3xl);
	}
	.cta-text {
		font-size: 1.5rem; font-weight: var(--fw-bold);
		margin-bottom: var(--space-lg); color: var(--color-bg);
	}
	.cta-phone {
		margin-top: var(--space-md); font-size: 1.1rem; color: var(--color-gray);
	}
	.cta-phone a {
		color: var(--color-accent); font-weight: var(--fw-semibold); text-decoration: none;
	}
	.cta-phone a:hover { text-decoration: underline; }

	@media (max-width: 768px) {
		.cta-text { font-size: 1.25rem; }
	}
</style>
