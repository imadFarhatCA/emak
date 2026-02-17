<script>
	import { slide } from 'svelte/transition';

	export let items = [];
	let openIndex = null;

	function toggle(index) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<div class="accordion">
	{#each items as item, index}
		<div class="accordion-item">
			<button
				class="accordion-header"
				on:click={() => toggle(index)}
				aria-expanded={openIndex === index}
			>
				<span class="accordion-title">{item.question}</span>
				<span class="accordion-icon" class:open={openIndex === index}>
					<i class="fas fa-chevron-down"></i>
				</span>
			</button>

			{#if openIndex === index}
				<div class="accordion-content" transition:slide={{ duration: 300 }}>
					<div class="accordion-body">
						{@html item.answer}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.accordion {
		width: 100%;
	}

	.accordion-item {
		margin-bottom: var(--spacing-md);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		overflow: hidden;
	}

	.accordion-header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-md);
		background-color: var(--color-light-gray);
		border: none;
		cursor: pointer;
		transition: background-color var(--transition-fast);
		text-align: left;
	}

	.accordion-header:hover {
		background-color: #e0e3de;
	}

	.accordion-title {
		font-size: 1.1rem;
		font-weight: var(--font-weight-semibold);
		color: var(--color-text);
	}

	.accordion-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		color: var(--color-primary);
		transition: transform var(--transition-normal);
	}

	.accordion-icon.open {
		transform: rotate(180deg);
	}

	.accordion-content {
		overflow: hidden;
	}

	.accordion-body {
		padding: var(--spacing-md);
		background-color: var(--color-background);
		color: var(--color-text);
		line-height: 1.7;
	}

	.accordion-body :global(p) {
		margin-bottom: var(--spacing-sm);
	}

	.accordion-body :global(p:last-child) {
		margin-bottom: 0;
	}
</style>
