<script>
	import Accordion from '$lib/components/ui/Accordion.svelte';
	import { Container, Section, Heading } from '$lib/components/ui/atoms';
	import { faqItems } from '$lib/data/faq';
</script>

<Section bg="white" id="faq">
	<Container>
		<Heading level={2} align="center">Frequently Asked Questions</Heading>
		<p class="section-subtitle" style="text-align:center">
			Get answers to common questions about our phone system
		</p>

		<div class="faq-content">
			<Accordion items={faqItems} />
		</div>

		<div class="faq-cta">
			<p>Still have questions?</p>
			<a href="/contact" class="contact-link">Contact our team →</a>
		</div>
	</Container>
</Section>

<style>
	.faq-content { margin-bottom: var(--space-2xl); }

	.faq-cta {
		padding-top: var(--space-xl);
		border-top: 1px solid var(--color-border);
		text-align: center;
	}
	.faq-cta p {
		font-size: 1.1rem; color: var(--color-text);
		margin-bottom: var(--space-sm);
	}
	.contact-link {
		font-size: 1.1rem; font-weight: var(--fw-semibold);
		color: var(--color-accent); text-decoration: none;
		transition: color var(--ease);
	}
	.contact-link:hover {
		color: var(--color-accent-hover); text-decoration: underline;
	}
</style>
