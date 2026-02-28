<script>
	import { Container, Section, Heading } from '$lib/components/ui/atoms';

	let formData = { name: '', email: '' };
	let submitting = false;
	let success = false;
	let error = '';

	function handleSubmit(event) {
		event.preventDefault();
		submitting = true;
		error = '';

		if (!formData.name || !formData.email) {
			error = 'Please fill in all fields';
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
			formData = { name: '', email: '' };
			setTimeout(() => { success = false; }, 5000);
		}, 1000);
	}
</script>

<Section bg="dark">
	<Container>
		<div class="newsletter-content">
			<div class="newsletter-text">
				<Heading level={2}>Stay Updated</Heading>
				<p class="newsletter-description">
					Get the latest tips on improving your business communication and exclusive offers from
					EMAK Telecom.
				</p>
			</div>

			<div class="newsletter-form-wrapper">
				<form class="newsletter-form" on:submit={handleSubmit}>
					<div class="form-group">
						<input type="text" bind:value={formData.name} placeholder="Your Name" disabled={submitting} required />
					</div>
					<div class="form-group">
						<input type="email" bind:value={formData.email} placeholder="Your Email" disabled={submitting} required />
					</div>
					<button type="submit" class="btn btn-warning" disabled={submitting}>
						{submitting ? 'Subscribing...' : 'Subscribe'}
					</button>
				</form>

				{#if success}
					<div class="message success">
						<i class="fas fa-check-circle"></i>
						Thanks for subscribing! Check your email for confirmation.
					</div>
				{/if}
				{#if error}
					<div class="message error">
						<i class="fas fa-exclamation-circle"></i>
						{error}
					</div>
				{/if}
			</div>
		</div>
	</Container>
</Section>

<style>
	.newsletter-content {
		display: grid; grid-template-columns: 1fr 1.5fr;
		gap: var(--space-3xl); align-items: center;
	}
	.newsletter-description {
		font-size: 1.15rem; line-height: 1.7; color: var(--color-text-light); margin: 0;
	}
	.newsletter-form {
		display: grid; grid-template-columns: 1fr 1fr auto;
		gap: var(--space-md); margin-bottom: var(--space-md);
	}
	.form-group { display: flex; }
	.newsletter-form input { flex: 1; }

	@media (max-width: 1024px) {
		.newsletter-content { grid-template-columns: 1fr; gap: var(--space-2xl); }
		.newsletter-form { grid-template-columns: 1fr; }
	}
	@media (max-width: 768px) {
		.newsletter-description { font-size: 1rem; }
		.newsletter-text { text-align: center; }
	}
</style>
