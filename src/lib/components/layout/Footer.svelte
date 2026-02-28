<script>
	import { companyInfo } from '$lib/data/contact';
	import { socialLinks } from '$lib/data/navigation';

	const currentYear = new Date().getFullYear();

	const footerLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Support', href: '/support/walkthrough' },
		{ label: 'Shop', href: '#' }
	];
</script>

<footer class="footer">
	<div class="footer-container">
		<div class="footer-content">
			<!-- Company Info Column -->
			<div class="footer-column footer-info">
				<div class="footer-logo">
					<img src="/images/logos/emak-logo-footer.png" alt="{companyInfo.name} Logo" />
				</div>
				<h3 class="company-name">{companyInfo.name}</h3>
				<p class="company-tagline">{companyInfo.tagline}</p>
			</div>

			<!-- Navigation Column -->
			<div class="footer-column footer-nav">
				<h4>Quick Links</h4>
				<ul class="footer-links">
					{#each footerLinks as link}
						<li>
							<a href={link.href}>{link.label}</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact Column -->
			<div class="footer-column footer-contact">
				<h4>Contact Us</h4>
				<div class="contact-item">
					<i class="fas fa-map-marker-alt"></i>
					<p>{companyInfo.address.fullAddress}</p>
				</div>
				<div class="contact-item">
					<i class="fas fa-envelope"></i>
					<a href="mailto:{companyInfo.email.info}">{companyInfo.email.info}</a>
				</div>
				<div class="contact-item">
					<i class="fas fa-phone"></i>
					<div class="phone-list">
						<a href="tel:{companyInfo.phone.main}">{companyInfo.phone.main}</a>
						<a href="tel:{companyInfo.phone.secondary}">{companyInfo.phone.secondary}</a>
						<span>{companyInfo.phone.tollFree}</span>
					</div>
				</div>
			</div>

			<!-- Social Media Column -->
			<div class="footer-column footer-social">
				<h4>Follow Us</h4>
				<div class="social-links">
					{#each socialLinks as social}
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

		<div class="footer-bottom">
			<p class="copyright">© {currentYear} {companyInfo.name}</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: var(--color-gray);
		color: var(--color-text);
		padding: var(--spacing-2xl) 0 var(--spacing-lg);
		margin-top: var(--spacing-3xl);
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--spacing-md);
	}

	.footer-content {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr 1.2fr 0.8fr;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-lg);
	}

	.footer-column h4 {
		font-size: 1rem;
		font-weight: var(--font-weight-bold);
		margin-bottom: var(--spacing-sm);
		color: var(--color-accent);
	}

	/* Company Info */
	.footer-info {
		grid-column: span 1;
	}

	.footer-logo {
		margin-bottom: var(--spacing-xs);
	}

	.footer-logo img {
		height: 40px;
		width: auto;
		filter: none;
	}

	.company-name {
		font-size: 1.25rem;
		font-weight: var(--font-weight-bold);
		margin-bottom: 4px;
		color: var(--color-text);
	}

	.company-tagline {
		font-size: 0.9rem;
		line-height: 1.5;
		color: var(--color-text-light);
		margin: 0;
	}

	/* Navigation Links */
	.footer-links {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-links li {
		margin-bottom: 6px;
	}

	.footer-links a {
		color: var(--color-text-light);
		transition: color var(--transition-fast);
		font-size: 0.9rem;
	}

	.footer-links a:hover {
		color: var(--color-accent);
	}

	/* Contact Info */
	.contact-item {
		display: flex;
		gap: 8px;
		margin-bottom: 10px;
		align-items: flex-start;
	}

	.contact-item i {
		color: var(--color-accent);
		font-size: 1rem;
		margin-top: 2px;
		flex-shrink: 0;
	}

	.contact-item p,
	.contact-item a {
		color: var(--color-text-light);
		font-size: 0.9rem;
		margin: 0;
		line-height: 1.5;
	}

	.contact-item a:hover {
		color: var(--color-accent);
	}

	.phone-list {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.phone-list a,
	.phone-list span {
		color: var(--color-text-light);
		font-size: 0.9rem;
	}

	.phone-list a:hover {
		color: var(--color-accent);
	}

	/* Social Media */
	.social-links {
		display: flex;
		gap: var(--spacing-md);
		flex-wrap: wrap;
	}

	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 38px;
		height: 38px;
		background-color: var(--color-border-light);
		border-radius: var(--radius-md);
		color: var(--color-text);
		font-size: 1.1rem;
		transition: all var(--transition-normal);
	}

	.social-link:hover {
		background-color: var(--color-accent);
		color: var(--color-primary);
		transform: translateY(-3px);
	}

	/* Footer Bottom */
	.footer-bottom {
		border-top: 1px solid var(--color-border);
		padding-top: var(--spacing-md);
		text-align: center;
	}

	.copyright {
		color: var(--color-text-muted);
		font-size: 0.9rem;
		margin: 0;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.footer {
			padding: var(--spacing-2xl) 0 var(--spacing-md);
			margin-top: var(--spacing-2xl);
		}

		.footer-content {
			grid-template-columns: 1fr;
			gap: var(--spacing-lg);
			text-align: center;
		}

		.footer-column {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.footer-logo img {
			margin: 0 auto;
		}

		.footer-links {
			text-align: center;
		}

		.social-links {
			justify-content: center;
		}

		.contact-item {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.phone-list {
			align-items: center;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		.footer-content {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
