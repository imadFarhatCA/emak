<script>
	import { Container, Section, Heading } from '$lib/components/ui/atoms';
	import { officeContact, salesContact } from '$lib/data/contact';

	let activeTab = 'office';
	let formData = { name: '', email: '', phone: '', message: '' };
	let submitting = false;
	let success = false;
	let error = '';

	function switchTab(tab) { activeTab = tab; }

	function handleSubmit(event) {
		event.preventDefault();
		submitting = true;
		error = '';

		if (!formData.name || !formData.email || !formData.message) {
			error = 'Please fill in all required fields';
			submitting = false;
			return;
		}

		if (!formData.email.includes('@')) {
			error = 'Please enter a valid email address';
			submitting = false;
			return;
		}

		setTimeout(() => {
			success = true;
			submitting = false;
			formData = { name: '', email: '', phone: '', message: '' };
			setTimeout(() => { success = false; }, 5000);
		}, 1000);
	}
</script>

<Section bg="white">
	<Container>
		<div class="tabs">
			<button class="tab" class:active={activeTab === 'office'} on:click={() => switchTab('office')}>
				{officeContact.title}
			</button>
			<button class="tab" class:active={activeTab === 'sales'} on:click={() => switchTab('sales')}>
				{salesContact.title}
			</button>
		</div>

		<div class="tab-content">
			{#if activeTab === 'office'}
				<div class="contact-info">
					<div class="info-item">
						<i class="fas fa-map-marker-alt"></i>
						<p>{officeContact.address}</p>
					</div>
					<div class="info-item">
						<i class="fas fa-phone"></i>
						<div class="phone-list">
							{#each officeContact.phones as phone}
								<a href="tel:{phone}">{phone}</a>
							{/each}
						</div>
					</div>
					<div class="info-item">
						<i class="fas fa-envelope"></i>
						<a href="mailto:{officeContact.email}">{officeContact.email}</a>
					</div>
				</div>
			{:else}
				<div class="contact-info">
					<div class="info-item">
						<i class="fas fa-phone"></i>
						<div class="phone-list">
							{#each salesContact.phones as phone}
								<p>{phone}</p>
							{/each}
						</div>
					</div>
					<div class="info-item">
						<i class="fas fa-envelope"></i>
						<a href="mailto:{salesContact.email}">{salesContact.email}</a>
					</div>
				</div>
			{/if}
		</div>

		<div class="form-wrapper">
			<Heading level={3}>Send us a message</Heading>
			<form class="contact-form" on:submit={handleSubmit}>
				<div class="form-row">
					<div class="form-group">
						<label for="name">Name *</label>
						<input type="text" id="name" bind:value={formData.name} placeholder="Your name" disabled={submitting} required />
					</div>
					<div class="form-group">
						<label for="email">Email *</label>
						<input type="email" id="email" bind:value={formData.email} placeholder="your@email.com" disabled={submitting} required />
					</div>
				</div>
				<div class="form-group">
					<label for="phone">Phone</label>
					<input type="tel" id="phone" bind:value={formData.phone} placeholder="(555) 123-4567" disabled={submitting} />
				</div>
				<div class="form-group">
					<label for="message">Message *</label>
					<textarea id="message" bind:value={formData.message} placeholder="Tell us how we can help..." rows="6" disabled={submitting} required></textarea>
				</div>
				<button type="submit" class="btn btn-warning" disabled={submitting}>
					{submitting ? 'Sending...' : 'Send Message'}
				</button>
			</form>

			{#if success}
				<div class="message success" style="margin-top: var(--space-lg)">
					<i class="fas fa-check-circle"></i>
					Thanks for reaching out! We'll get back to you within 24 hours.
				</div>
			{/if}
			{#if error}
				<div class="message error" style="margin-top: var(--space-lg)">
					<i class="fas fa-exclamation-circle"></i>
					{error}
				</div>
			{/if}
		</div>
	</Container>
</Section>

<style>
	/* Tabs */
	.tabs {
		display: flex; gap: var(--space-sm);
		margin-bottom: var(--space-xl); border-bottom: 2px solid var(--color-border);
	}
	.tab {
		flex: 1; padding: var(--space-md) var(--space-lg);
		background: none; border: none; border-bottom: 3px solid transparent;
		font-size: 1.1rem; font-weight: var(--fw-semibold);
		color: var(--color-text-light); cursor: pointer;
		transition: all var(--ease); margin-bottom: -2px;
	}
	.tab:hover { color: var(--color-primary); }
	.tab.active { color: var(--color-primary); border-bottom-color: var(--color-accent); }

	/* Tab Content */
	.tab-content {
		background-color: var(--color-gray); padding: var(--space-xl);
		border-radius: var(--radius-md); margin-bottom: var(--space-2xl);
	}
	.contact-info { display: flex; flex-direction: column; gap: var(--space-lg); }
	.info-item { display: flex; gap: var(--space-md); align-items: flex-start; }
	.info-item i { color: var(--color-accent); font-size: 1.3rem; margin-top: 2px; flex-shrink: 0; }
	.info-item p, .info-item a { font-size: 1rem; color: var(--color-text); margin: 0; line-height: 1.6; }
	.info-item a:hover { color: var(--color-accent); }
	.phone-list { display: flex; flex-direction: column; gap: 4px; }

	/* Form */
	.contact-form { display: flex; flex-direction: column; gap: var(--space-lg); }
	.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); }

	@media (max-width: 768px) {
		.form-row { grid-template-columns: 1fr; }
		.tabs { flex-direction: column; }
		.tab { text-align: left; }
	}
</style>
