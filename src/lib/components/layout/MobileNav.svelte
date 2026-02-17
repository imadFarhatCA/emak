<script>
	import { navLinks, socialLinks } from '$lib/data/navigation';

	export let isOpen = false;
	export let onClose = () => {};
</script>

{#if isOpen}
	<div
		class="mobile-menu"
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		on:click={onClose}
		on:keydown={(e) => e.key === 'Escape' && onClose()}
	>
		<nav aria-label="Mobile navigation">
			<ul class="mobile-nav-list">
				{#each navLinks as link}
					<li class="mobile-nav-item">
						<a href={link.href} class="mobile-nav-link" on:click={onClose}>
							{link.label}
						</a>
					</li>
				{/each}
				<li class="mobile-nav-item">
					<button class="mobile-nav-link" aria-label="Change language to French" type="button" on:click={onClose}>
						<i class="fas fa-globe"></i>
						FR
					</button>
				</li>
			</ul>

			<!-- Social Icons (Mobile) -->
			<div class="mobile-social-icons">
				{#each socialLinks as social}
					<a
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						class="mobile-social-link"
						aria-label={social.name}
					>
						<i class={social.icon}></i>
					</a>
				{/each}
			</div>
		</nav>
	</div>
{/if}

<style>
	/* Mobile Menu */
	.mobile-menu {
		position: fixed;
		top: 73px;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--color-background);
		z-index: 999;
		padding: var(--spacing-lg);
		overflow-y: auto;
		animation: slideDown 0.3s ease-out;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.mobile-nav-list {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--spacing-xl) 0;
	}

	.mobile-nav-item {
		margin: 0;
		border-bottom: 1px solid var(--color-light-gray);
	}

	.mobile-nav-link {
		display: block;
		padding: var(--spacing-md) 0;
		color: var(--color-text);
		font-size: 1.1rem;
		font-weight: var(--font-weight-medium);
		transition: color var(--transition-fast);
		background: none;
		border: none;
		cursor: pointer;
		font-family: inherit;
		text-align: left;
		width: 100%;
	}

	.mobile-nav-link:hover {
		color: var(--color-accent);
	}

	.mobile-social-icons {
		display: flex;
		gap: var(--spacing-md);
		justify-content: center;
		padding-top: var(--spacing-lg);
		border-top: 1px solid var(--color-light-gray);
	}

	.mobile-social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		color: var(--color-text);
		font-size: 1.5rem;
		transition: color var(--transition-fast);
	}

	.mobile-social-link:hover {
		color: var(--color-accent);
	}
</style>
