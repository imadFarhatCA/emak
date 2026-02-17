<script>
	import { navLinks, socialLinks } from '$lib/data/navigation';

	let currentLang = 'EN';

	function selectLang(lang) {
		currentLang = lang;
	}
</script>

<div class="desktop-nav">
	<!-- Main Navigation (left side) -->
	<nav class="main-nav" aria-label="Main navigation">
		<ul class="nav-list">
			{#each navLinks as link}
				<li class="nav-item">
					<a href={link.href} class="nav-link">
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<!-- Right side: Language + Social -->
	<div class="nav-right">
		<div class="lang-toggle" data-active={currentLang}>
			<button
				class="lang-option"
				class:active={currentLang === 'EN'}
				on:click={() => selectLang('EN')}
				type="button"
			>
				EN
			</button>
			<button
				class="lang-option"
				class:active={currentLang === 'FR'}
				on:click={() => selectLang('FR')}
				type="button"
			>
				FR
			</button>
		</div>

		<!-- Social Icons -->
		<div class="social-icons">
			{#each socialLinks as social, i}
				{#if i > 0}
					<span class="separator">|</span>
				{/if}
				<a
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
					class="social-link"
					aria-label={social.name}
				>
					<i class={social.icon}></i>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Desktop Navigation */
	.desktop-nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: 1;
		gap: var(--spacing-xl);
	}

	.main-nav {
		flex: 1;
	}

	.nav-list {
		display: flex;
		list-style: none;
		gap: var(--spacing-lg);
		align-items: center;
		margin: 0;
		padding: 0;
	}

	.nav-item {
		margin: 0;
	}

	.nav-link {
		color: var(--color-primary);
		font-size: 0.9rem;
		font-weight: var(--font-weight-medium);
		padding: var(--spacing-xs) 0;
		white-space: nowrap;
		text-decoration: none;
		position: relative;
		display: inline-block;
		transition: all 0.3s ease;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 1px;
		background-color: var(--color-accent);
		transition: width 0.3s ease;
		transform: translateX(-50%);
	}

	.nav-link:hover {
		color: var(--color-accent);
		transform: translateY(-2px);
	}

	.nav-link:hover::after {
		width: 100%;
	}

	.nav-right {
		display: flex;
		align-items: center;
		gap: var(--spacing-lg);
	}

	.lang-toggle {
		display: flex;
		align-items: center;
		background-color: #e5e5e5;
		border-radius: 16px;
		padding: 3px;
		gap: 2px;
		position: relative;
	}

	.lang-toggle::before {
		content: '';
		position: absolute;
		width: calc(50% - 2.5px);
		height: calc(100% - 6px);
		background-color: #ffffff;
		border-radius: 13px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		left: 3px;
		top: 3px;
		z-index: 0;
	}

	/* Slide to FR position */
	.lang-toggle[data-active='FR']::before {
		left: calc(50% - 0.5px);
	}

	.lang-option {
		color: #636363;
		font-size: 0.8rem;
		font-weight: var(--font-weight-medium);
		padding: 5px 12px;
		background: transparent;
		border: none;
		cursor: pointer;
		font-family: inherit;
		border-radius: 13px;
		transition: color 0.3s ease;
		position: relative;
		z-index: 1;
		flex: 1;
		text-align: center;
	}

	.lang-option.active {
		color: var(--color-primary);
	}

	.lang-option:hover {
		color: var(--color-primary);
	}

	/* Social Icons */
	.social-icons {
		display: flex;
		gap: 8px;
		align-items: center;
	}

	.separator {
		color: var(--color-text-light);
		font-size: 1rem;
	}

	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-primary);
		transition: color var(--transition-fast);
		font-size: 1rem;
	}

	.social-link:hover {
		color: var(--color-accent);
	}

	@media (max-width: 768px) {
		.desktop-nav {
			display: none;
		}
	}

	@media (min-width: 769px) {
		.desktop-nav {
			display: flex;
		}
	}
</style>
