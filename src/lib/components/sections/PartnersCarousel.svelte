<script>
	import { Section } from '$lib/components/ui/atoms';
	import { partners } from '$lib/data/partners';

	const logos = [...partners, ...partners];
</script>

<div class="partners-section">
<Section bg="white">
	<div class="scroll-track">
		<div class="scroll-inner">
			{#each logos as partner}
				<div class="logo">
					<img src={partner.logo} alt={partner.name} />
				</div>
			{/each}
		</div>
	</div>
</Section>
</div>

<style>
	.scroll-track {
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
		-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
	}

	.scroll-inner {
		display: flex;
		align-items: center;
		gap: 64px;
		width: max-content;
		animation: scroll 60s linear infinite;
	}

	.logo {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo img {
		height: 108px;
		width: auto;
		object-fit: contain;
		filter: grayscale(100%) contrast(1.5) brightness(0.6);
		opacity: 1;
		transition: all 0.3s ease;
	}

	.logo img:hover {
		filter: grayscale(0%);
		opacity: 1;
	}

	@keyframes scroll {
		0% { transform: translateX(0); }
		100% { transform: translateX(-50%); }
	}

	.partners-section :global(.section) {
		padding: var(--space-xl) 0;
	}

	@media (max-width: 768px) {
		.scroll-inner { gap: 48px; }
		.partners-section :global(.section) { padding: var(--space-md) 0; }
	}
</style>
