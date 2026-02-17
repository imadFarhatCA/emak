<script>
	import YouTubeEmbed from '$lib/components/sections/YouTubeEmbed.svelte';
</script>

<svelte:head>
	<title>Support - Fixing Not Receiving Voicemail or Fax Emails in Outlook | EMAK Telecom</title>
	<meta
		name="description"
		content="Learn how to fix the issue of not receiving voicemail or fax emails in Outlook. Step-by-step guide from EMAK Telecom support."
	/>
</svelte:head>

<article class="support-article">
	<div class="article-container">
		<!-- Article Header -->
		<header class="article-header">
			<h1>Fixing Not Receiving Voicemail or Fax Emails in Outlook</h1>
			<div class="article-meta">
				<span class="meta-item">
					<i class="fas fa-calendar"></i>
					December 7, 2019
				</span>
				<span class="meta-item">
					<i class="fas fa-folder"></i>
					Support Article
				</span>
			</div>
		</header>

		<!-- Video Section -->
		<section class="video-section">
			<YouTubeEmbed
				videoId="AdFsPaRvLpM"
				title="Fixing Not Receiving Voicemail or Fax Emails in Outlook"
			/>
		</section>

		<!-- Article Content -->
		<section class="article-content">
			<h2>The Problem</h2>
			<p>
				If you're not receiving voicemail or fax emails in your Outlook inbox, it's likely that
				Outlook's automatic filtering system is sending these emails to your junk folder. This
				happens because Outlook detects emails with duplicate subject lines and formats, which is
				common with automated voicemail and fax notifications.
			</p>

			<h2>The Solution</h2>
			<p>
				To ensure you receive all voicemail and fax notifications, you need to whitelist the EMAK
				notification email address in your Outlook settings.
			</p>

			<h2>Step-by-Step Instructions</h2>

			<div class="steps">
				<div class="step">
					<div class="step-number">1</div>
					<div class="step-content">
						<h3>Open Junk Email Options</h3>
						<p>
							In Outlook, go to the <strong>Home</strong> tab, click on <strong>Junk</strong>,
							and select <strong>Junk E-mail Options</strong>.
						</p>
					</div>
				</div>

				<div class="step">
					<div class="step-number">2</div>
					<div class="step-content">
						<h3>Navigate to Safe Senders</h3>
						<p>
							In the Junk E-mail Options window, click on the <strong>Safe Senders</strong> tab.
						</p>
					</div>
				</div>

				<div class="step">
					<div class="step-number">3</div>
					<div class="step-content">
						<h3>Add EMAK Email Address</h3>
						<p>
							Click <strong>Add</strong> and enter: <code>notifications@emaktalk.com</code>
						</p>
					</div>
				</div>

				<div class="step">
					<div class="step-number">4</div>
					<div class="step-content">
						<h3>Save and Apply</h3>
						<p>Click <strong>OK</strong> to save your changes and apply the settings.</p>
					</div>
				</div>

				<div class="step">
					<div class="step-number">5</div>
					<div class="step-content">
						<h3>Check Your Junk Folder</h3>
						<p>
							Go to your Junk folder and move any existing EMAK voicemail/fax emails to your
							inbox. Future emails will now arrive directly in your inbox.
						</p>
					</div>
				</div>
			</div>

			<div class="help-box">
				<h3>
					<i class="fas fa-life-ring"></i>
					Need More Help?
				</h3>
				<p>
					If you're still experiencing issues after following these steps, our support team is here
					to help!
				</p>
				<div class="help-actions">
					<a href="/contact" class="btn btn-primary">Contact Support</a>
					<a href="mailto:support@emak.tech" class="btn btn-outline">Email Us</a>
				</div>
			</div>
		</section>
	</div>
</article>

<style>
	.support-article {
		background-color: var(--color-background);
		padding: var(--spacing-3xl) 0;
	}

	.article-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 var(--spacing-md);
	}

	/* Article Header */
	.article-header {
		margin-bottom: var(--spacing-2xl);
	}

	.article-header h1 {
		font-size: 2.5rem;
		font-weight: var(--font-weight-bold);
		color: var(--color-primary);
		margin-bottom: var(--spacing-md);
		line-height: 1.3;
	}

	.article-meta {
		display: flex;
		gap: var(--spacing-lg);
		flex-wrap: wrap;
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		color: var(--color-text-light);
		font-size: 0.95rem;
	}

	.meta-item i {
		color: var(--color-accent);
	}

	/* Video Section */
	.video-section {
		margin-bottom: var(--spacing-3xl);
	}

	/* Article Content */
	.article-content h2 {
		font-size: 1.75rem;
		font-weight: var(--font-weight-bold);
		color: var(--color-primary);
		margin-top: var(--spacing-2xl);
		margin-bottom: var(--spacing-md);
	}

	.article-content p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--color-text);
		margin-bottom: var(--spacing-lg);
	}

	/* Steps */
	.steps {
		margin: var(--spacing-2xl) 0;
	}

	.step {
		display: flex;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-xl);
		padding: var(--spacing-lg);
		background-color: var(--color-light-gray);
		border-radius: var(--radius-lg);
	}

	.step-number {
		flex-shrink: 0;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-accent);
		color: var(--color-primary);
		font-size: 1.5rem;
		font-weight: var(--font-weight-bold);
		border-radius: var(--radius-full);
	}

	.step-content h3 {
		font-size: 1.25rem;
		font-weight: var(--font-weight-semibold);
		color: var(--color-primary);
		margin-bottom: var(--spacing-sm);
	}

	.step-content p {
		font-size: 1rem;
		margin: 0;
	}

	.step-content code {
		background-color: var(--color-primary);
		color: var(--color-accent);
		padding: 2px 8px;
		border-radius: var(--radius-sm);
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
	}

	/* Help Box */
	.help-box {
		margin-top: var(--spacing-3xl);
		padding: var(--spacing-2xl);
		background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
		border-radius: var(--radius-lg);
		color: var(--color-background);
		text-align: center;
	}

	.help-box h3 {
		font-size: 1.5rem;
		margin-bottom: var(--spacing-md);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-sm);
	}

	.help-box p {
		font-size: 1.1rem;
		color: var(--color-light-gray);
		margin-bottom: var(--spacing-xl);
	}

	.help-actions {
		display: flex;
		gap: var(--spacing-md);
		justify-content: center;
		flex-wrap: wrap;
	}

	@media (max-width: 768px) {
		.article-header h1 {
			font-size: 2rem;
		}

		.article-content h2 {
			font-size: 1.5rem;
		}

		.step {
			flex-direction: column;
			align-items: flex-start;
		}

		.help-actions {
			flex-direction: column;
		}

		.help-actions .btn {
			width: 100%;
		}
	}
</style>
