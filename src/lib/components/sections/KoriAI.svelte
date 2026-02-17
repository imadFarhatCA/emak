<script>
	import Button from '$lib/components/ui/Button.svelte';
	import { Container, Section, Heading } from '$lib/components/ui/atoms';
</script>

<Section bg="dark">
	<Container>
		<div class="kori-content">
			<div class="kori-text">
				<div class="kori-badge">AI-Powered</div>
				<Heading level={2}>Meet KORI: Your 24/7 Phone Assistant</Heading>
				<p class="kori-description">
					KORI is our intelligent AI assistant that ensures you never miss a call. Whether it's
					3am or the middle of lunch rush, KORI answers professionally, takes messages, schedules
					appointments, and routes urgent calls to the right person.
				</p>
				<ul class="kori-features">
					<li>
						<i class="fas fa-check-circle"></i>
						24/7 availability - never miss a call again
					</li>
					<li>
						<i class="fas fa-check-circle"></i>
						Natural conversation - customers feel heard
					</li>
					<li>
						<i class="fas fa-check-circle"></i>
						Smart routing - urgent calls reach you immediately
					</li>
					<li>
						<i class="fas fa-check-circle"></i>
						Appointment scheduling - integrated with your calendar
					</li>
				</ul>
				<div class="kori-cta">
					<Button variant="warning" href="#pricing">Learn More</Button>
					<Button variant="outline" href="/contact">Schedule Demo</Button>
				</div>
			</div>
			<div class="kori-visual">
				<div class="kori-icon">
					<img src="/images/icons/svg3.svg" alt="KORI in action" />
				</div>
			</div>
		</div>
	</Container>
</Section>

<style>
	.kori-content {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		gap: var(--spacing-3xl);
		align-items: center;
	}

	.kori-badge {
		display: inline-block;
		padding: var(--spacing-xs) var(--spacing-md);
		background-color: var(--color-accent);
		color: var(--color-primary);
		font-size: 0.9rem;
		font-weight: var(--font-weight-bold);
		border-radius: var(--radius-full);
		margin-bottom: var(--spacing-md);
	}

	.kori-description {
		font-size: 1.15rem;
		line-height: 1.7;
		color: var(--color-light-gray);
		margin-bottom: var(--spacing-xl);
	}

	.kori-features {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--spacing-xl) 0;
	}

	.kori-features li {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-sm);
		margin-bottom: var(--spacing-md);
		font-size: 1.05rem;
		color: var(--color-light-gray);
	}

	.kori-features i {
		color: var(--color-accent);
		font-size: 1.2rem;
		margin-top: 2px;
		flex-shrink: 0;
	}

	.kori-cta {
		display: flex;
		gap: var(--spacing-md);
		flex-wrap: wrap;
	}

	.kori-visual {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.kori-icon {
		width: 100%;
		max-width: 100%;
		padding: var(--spacing-xl);
		background: rgba(255, 255, 255, 0.05);
		border-radius: var(--radius-lg);
		backdrop-filter: blur(10px);
	}

	.kori-icon img {
		width: 100%;
		height: auto;
		filter: brightness(0) invert(1);
	}

	@media (max-width: 1024px) {
		.kori-content {
			grid-template-columns: 1fr;
			gap: var(--spacing-2xl);
		}

		.kori-visual {
			order: -1;
		}
	}

	@media (max-width: 768px) {
		.kori-description {
			font-size: 1rem;
		}

		.kori-features li {
			font-size: 0.95rem;
		}

		.kori-cta {
			flex-direction: column;
		}

		.kori-cta :global(.btn) {
			width: 100%;
			justify-content: center;
		}
	}
</style>
