<script>
	import { Container } from '$lib/components/ui/atoms';
	import Nav from './Nav.svelte';
	import MobileNav from './MobileNav.svelte';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="header">
	<Container>
		<div class="header-content">
			<!-- Left side: Logo + Main Nav -->
			<div class="header-left">
				<div class="brand">
					<a href="/" class="logo-link">
						<img src="/images/logos/emak-logo.png" alt="Emak Tech" class="logo" />
					</a>
				</div>
				<Nav />
			</div>

			<!-- Mobile Menu Toggle -->
			<button
				class="mobile-menu-toggle"
				on:click={toggleMobileMenu}
				aria-label="Toggle menu"
				aria-expanded={mobileMenuOpen}
			>
				<div class="hamburger" class:open={mobileMenuOpen}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>
		</div>
	</Container>

	<!-- Mobile Menu -->
	<MobileNav isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
</header>

<style>
	.header {
		background-color: var(--color-background);
		position: sticky;
		top: 0;
		z-index: 1000;
	}

	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-md) 0;
		gap: var(--spacing-lg);
	}

	.header-left {
		display: flex;
		align-items: center;
		gap: var(--spacing-2xl);
		flex: 1;
	}

	/* Brand */
	.brand {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.logo-link {
		display: flex;
		align-items: center;
	}

	.logo {
		height: 40px;
		width: auto;
	}

	/* Mobile Menu Toggle */
	.mobile-menu-toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--spacing-xs);
	}

	.hamburger {
		width: 30px;
		height: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
	}

	.hamburger span {
		display: block;
		height: 3px;
		width: 100%;
		background-color: var(--color-text);
		border-radius: 2px;
		transition: all var(--transition-normal);
	}

	.hamburger.open span:nth-child(1) {
		transform: rotate(45deg) translate(8px, 8px);
	}

	.hamburger.open span:nth-child(2),
	.hamburger.open span:nth-child(3) {
		opacity: 0;
	}

	.hamburger.open span:nth-child(4) {
		transform: rotate(-45deg) translate(8px, -8px);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.mobile-menu-toggle {
			display: block;
		}

		.logo {
			height: 32px;
		}
	}
</style>
