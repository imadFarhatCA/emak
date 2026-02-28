<script>
	import Button from '$lib/components/ui/Button.svelte';
	import { Container, Heading } from '$lib/components/ui/atoms';
	import KoriPhone from './KoriPhone.svelte';
</script>

<section class="kori-section">
	<div class="kori-bg-glow"></div>
	<Container>
		<div class="kori-content">
			<div class="kori-text">
				<div class="kori-badge">
					<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
					AI-Powered
				</div>
				<Heading level={2}>Meet KORI: Your 24/7 Phone Assistant</Heading>
				<p class="kori-description">
					KORI is our intelligent AI assistant that ensures you never miss a call. Whether it's
					3am or the middle of lunch rush, KORI answers professionally, takes messages, schedules
					appointments, and routes urgent calls to the right person.
				</p>
				<ul class="kori-features">
					<li>
						<span class="kori-check">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
						</span>
						24/7 availability — never miss a call again
					</li>
					<li>
						<span class="kori-check">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
						</span>
						Natural conversation — customers feel heard
					</li>
					<li>
						<span class="kori-check">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
						</span>
						Smart routing — urgent calls reach you immediately
					</li>
					<li>
						<span class="kori-check">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
						</span>
						Appointment scheduling — integrated with your calendar
					</li>
				</ul>
				<div class="kori-cta">
					<Button variant="warning" href="#pricing">Learn More</Button>
					<Button variant="outline" href="/contact">Schedule Demo</Button>
				</div>
			</div>
			<div class="kori-visual">
				<div class="kori-phone-glow"></div>
				<div class="kori-phone">
					<KoriPhone />
				</div>
			</div>
		</div>
	</Container>
</section>

<style>
	.kori-section {
		position: relative;
		padding: var(--space-3xl) 0;
		background: #f5f5f7;
		overflow: hidden;
	}

	.kori-bg-glow {
		position: absolute;
		top: 50%;
		right: 10%;
		width: 500px;
		height: 500px;
		background: radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0.03) 40%, transparent 70%);
		transform: translate(0, -50%);
		pointer-events: none;
	}

	.kori-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3xl);
		align-items: center;
	}

	.kori-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 16px;
		background: rgba(124, 58, 237, 0.15);
		color: #a78bfa;
		font-size: 0.85rem;
		font-weight: var(--fw-semibold);
		border-radius: var(--radius-full);
		border: 1px solid rgba(124, 58, 237, 0.25);
		margin-bottom: var(--space-md);
		letter-spacing: 0.02em;
	}

	.kori-text :global(h2) {
		color: #1a1a1a;
	}

	.kori-description {
		font-size: 1.15rem;
		line-height: 1.7;
		color: rgba(0, 0, 0, 0.55);
		margin-bottom: var(--space-xl);
	}

	.kori-features {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--space-xl) 0;
	}

	.kori-features li {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		margin-bottom: 14px;
		font-size: 1.05rem;
		color: rgba(0, 0, 0, 0.65);
	}

	.kori-check {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: rgba(124, 58, 237, 0.15);
		color: #a78bfa;
		flex-shrink: 0;
		margin-top: 1px;
	}

	.kori-cta {
		display: flex;
		gap: var(--space-md);
		flex-wrap: wrap;
	}

	.kori-cta :global(.btn-outline) {
		border-color: rgba(0, 0, 0, 0.15);
		color: #1a1a1a;
	}
	.kori-cta :global(.btn-outline:hover) {
		background: rgba(0, 0, 0, 0.05);
		border-color: rgba(0, 0, 0, 0.25);
		color: #1a1a1a;
	}

	.kori-visual {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.kori-phone-glow {
		position: absolute;
		width: 280px;
		height: 400px;
		background: radial-gradient(ellipse, rgba(124, 58, 237, 0.12) 0%, transparent 70%);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		pointer-events: none;
		filter: blur(40px);
	}

	.kori-phone {
		position: relative;
		width: 260px;
		filter: drop-shadow(0 20px 60px rgba(124, 58, 237, 0.15))
		        drop-shadow(0 8px 24px rgba(0, 0, 0, 0.2));
		animation: phoneBob 3s ease-in-out infinite;
	}

	@keyframes phoneBob {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-10px); }
	}

	@media (max-width: 1024px) {
		.kori-content {
			grid-template-columns: 1fr;
			gap: var(--space-2xl);
		}

		.kori-visual {
			order: -1;
		}

		.kori-phone {
			width: 240px;
		}

		.kori-bg-glow {
			right: 50%;
			transform: translate(50%, -50%);
		}
	}

	@media (max-width: 768px) {
		.kori-section {
			padding: var(--space-2xl) 0;
		}

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

		.kori-phone {
			width: 230px;
		}
	}
</style>
