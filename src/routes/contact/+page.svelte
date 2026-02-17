<script>
	import ContactForm from '$lib/components/sections/ContactForm.svelte';
</script>

<svelte:head>
	<title>Contact EMAK Telecom - Get in Touch</title>
	<meta
		name="description"
		content="Contact EMAK Telecom for business phone system inquiries. Reach our Montreal office or sales team today."
	/>
</svelte:head>

<!-- Parallax Hero -->
<section class="parallax-hero">
	<div class="parallax-overlay">
		<div class="parallax-content">
			<h1>Get in Touch</h1>
			<p>We're here to help your business communicate better</p>
		</div>
	</div>
</section>

<!-- Founder Quote -->
<section class="quote-section section">
	<div class="container">
		<div class="quote-card">
			<div class="quote-icon">
				<i class="fas fa-quote-left"></i>
			</div>
			<blockquote>
				<p>
					"At EMAK Telecom, we believe that every business deserves access to enterprise-level
					communication technology. VoIP has revolutionized how businesses connect with their
					customers, and we're proud to make it accessible and affordable for companies of all
					sizes across Canada."
				</p>
				<footer>
					<strong>Elias Makhoul</strong>
					<span>Founder & CEO, EMAK Telecom</span>
				</footer>
			</blockquote>
		</div>
	</div>
</section>

<!-- Contact Form -->
<ContactForm />

<style>
	.parallax-hero {
		background-image: url('/images/contact/hero-bg.jpg');
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 400px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.parallax-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.parallax-content {
		text-align: center;
		color: var(--color-background);
		z-index: 1;
		max-width: 800px;
		padding: 0 var(--spacing-md);
	}

	.parallax-content h1 {
		font-size: 3.5rem;
		font-weight: var(--font-weight-extrabold);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
		margin-bottom: var(--spacing-md);
	}

	.parallax-content p {
		font-size: 1.5rem;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	}

	.quote-section {
		background-color: #f8f9fa;
	}

	.quote-card {
		max-width: 800px;
		margin: 0 auto;
		background-color: var(--color-background);
		padding: var(--spacing-3xl);
		border-radius: var(--radius-lg);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
		position: relative;
	}

	.quote-icon {
		font-size: 4rem;
		color: var(--color-accent);
		opacity: 0.2;
		position: absolute;
		top: var(--spacing-lg);
		left: var(--spacing-lg);
	}

	blockquote {
		position: relative;
		z-index: 1;
		margin: 0;
	}

	blockquote p {
		font-size: 1.25rem;
		line-height: 1.8;
		color: var(--color-text);
		font-style: italic;
		margin-bottom: var(--spacing-xl);
	}

	blockquote footer {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
		padding-top: var(--spacing-lg);
		border-top: 2px solid var(--color-accent);
	}

	blockquote footer strong {
		font-size: 1.15rem;
		color: var(--color-primary);
		font-weight: var(--font-weight-bold);
	}

	blockquote footer span {
		font-size: 1rem;
		color: var(--color-text-light);
		font-style: normal;
	}

	@media (max-width: 768px) {
		.parallax-hero {
			background-attachment: scroll;
			min-height: 300px;
		}

		.parallax-content h1 {
			font-size: 2.5rem;
		}

		.parallax-content p {
			font-size: 1.2rem;
		}

		.quote-card {
			padding: var(--spacing-xl);
		}

		blockquote p {
			font-size: 1.1rem;
		}
	}
</style>
