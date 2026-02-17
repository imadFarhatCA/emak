<script>
	import StatsDisplay from '$lib/components/sections/StatsDisplay.svelte';
</script>

<svelte:head>
	<title>About EMAK Telecom - Dependable Communications</title>
	<meta
		name="description"
		content="Montreal-based phone company serving SMBs across Canada with competitive pricing, contract-free service, and feature-rich solutions"
	/>
</svelte:head>

<!-- Parallax Hero -->
<section class="parallax-hero">
	<div class="parallax-overlay">
		<div class="parallax-content">
			<h1>About EMAK Telecom</h1>
		</div>
	</div>
</section>

<!-- Company Info -->
<section class="company-section section">
	<div class="container">
		<div class="company-content">
			<h2 class="section-title">EMAK Telecom - Dependable Communications</h2>
			<div class="company-description">
				<p>
					Based in Montreal, Quebec, EMAK Telecom is a leading provider of business phone systems
					serving small and medium-sized businesses across Canada. With over two decades of
					experience in the telecommunications industry, we understand the critical role that
					reliable communication plays in your business success.
				</p>
				<p>
					Our mission is simple: provide businesses with enterprise-level phone systems at
					affordable prices, without the complexity of traditional telecom contracts. We believe
					every business deserves access to professional communication tools that help them grow
					and serve their customers better.
				</p>
				<p>
					What sets us apart is our commitment to transparency and customer success. We offer
					competitive pricing with no hidden fees, contract-free service that puts you in control,
					and feature-rich solutions that scale with your business. Our KORI AI assistant ensures
					you never miss an important call, while our Canadian-based support team is always ready
					to help.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Stats -->
<StatsDisplay />

<!-- Values -->
<section class="values-section section">
	<div class="container">
		<h2 class="section-title text-center">Our Core Values</h2>
		<div class="values-grid">
			<div class="value-card">
				<div class="value-icon">
					<i class="fas fa-handshake"></i>
				</div>
				<h3>Customer First</h3>
				<p>
					Your success is our success. We build lasting relationships by putting your needs at the
					center of everything we do.
				</p>
			</div>
			<div class="value-card">
				<div class="value-icon">
					<i class="fas fa-lightbulb"></i>
				</div>
				<h3>Innovation</h3>
				<p>
					We continuously invest in cutting-edge technology like KORI AI to keep you ahead of the
					competition.
				</p>
			</div>
			<div class="value-card">
				<div class="value-icon">
					<i class="fas fa-shield-alt"></i>
				</div>
				<h3>Reliability</h3>
				<p>
					21 years of proven service delivery. When you need us, we're there—guaranteed uptime and
					responsive support.
				</p>
			</div>
			<div class="value-card">
				<div class="value-icon">
					<i class="fas fa-balance-scale"></i>
				</div>
				<h3>Transparency</h3>
				<p>
					No hidden fees, no surprise charges. One simple price that includes everything you need
					to succeed.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.parallax-hero {
		background-image: url('/images/about/hero-bg.jpg');
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
	}

	.parallax-content h1 {
		font-size: 3.5rem;
		font-weight: var(--font-weight-extrabold);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.company-section {
		background-color: var(--color-background);
	}

	.company-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.section-title {
		font-size: 2.5rem;
		font-weight: var(--font-weight-bold);
		margin-bottom: var(--spacing-xl);
		color: var(--color-primary);
	}

	.company-description p {
		font-size: 1.15rem;
		line-height: 1.8;
		color: var(--color-text);
		margin-bottom: var(--spacing-lg);
	}

	.values-section {
		background-color: #f8f9fa;
	}

	.values-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--spacing-xl);
		margin-top: var(--spacing-2xl);
	}

	.value-card {
		background-color: var(--color-background);
		padding: var(--spacing-xl);
		border-radius: var(--radius-lg);
		text-align: center;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition: all var(--transition-normal);
	}

	.value-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
	}

	.value-icon {
		width: 70px;
		height: 70px;
		margin: 0 auto var(--spacing-md);
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-accent);
		border-radius: var(--radius-full);
		font-size: 1.8rem;
		color: var(--color-primary);
	}

	.value-card h3 {
		font-size: 1.5rem;
		font-weight: var(--font-weight-bold);
		margin-bottom: var(--spacing-sm);
		color: var(--color-primary);
	}

	.value-card p {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--color-text-light);
		margin: 0;
	}

	@media (max-width: 768px) {
		.parallax-hero {
			background-attachment: scroll;
			min-height: 300px;
		}

		.parallax-content h1 {
			font-size: 2.5rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.company-description p {
			font-size: 1rem;
		}

		.values-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-lg);
		}
	}
</style>
