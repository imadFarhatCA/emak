<script>
	// Component imports will go here
</script>

<svelte:head>
	<title>emak - Your Product</title>
	<meta name="description" content="emak product description" />
</svelte:head>

<main>
	<section class="hero section">
		<div class="container">
			<h1>Welcome to emak</h1>
			<p>Your product/SaaS description goes here</p>
		</div>
	</section>
</main>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
		color: white;
	}

	h1 {
		font-size: 3.5rem;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.5rem;
		opacity: 0.9;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		p {
			font-size: 1.2rem;
		}
	}
</style>
