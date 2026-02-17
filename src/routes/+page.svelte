<script>
	import Hero from '$lib/components/sections/Hero.svelte';
	import PartnersCarousel from '$lib/components/sections/PartnersCarousel.svelte';
	import CardCarousel from '$lib/components/sections/CardCarousel.svelte';

	import IndustryGrid from '$lib/components/sections/IndustryGrid.svelte';
	import KoriAI from '$lib/components/sections/KoriAI.svelte';
	import PricingSection from '$lib/components/sections/PricingSection.svelte';
	import TestimonialsCarousel from '$lib/components/sections/TestimonialsCarousel.svelte';
	import NewsletterForm from '$lib/components/sections/NewsletterForm.svelte';
	import FAQ from '$lib/components/sections/FAQ.svelte';
	import { cardCarouselData } from '$lib/data/cardCarousel';
</script>

<svelte:head>
	<title>EMAK Telecom - For businesses that can't afford to miss a call</title>
	<meta
		name="description"
		content="The intelligent phone system that automatically handles missed calls, responds to customers instantly, and keeps your team focused on what matters most"
	/>
</svelte:head>

<Hero />
<PartnersCarousel />
<CardCarousel
	subtitle="The EMAK difference"
	title="The phone system that keeps you connected and in control"
	description="Our mission is to make business communication easier, clearer, and more dependable for the people who keep Canada running, with technology that works smoothly and support that shows up when it matters most."
	descriptionHighlight="Tailored solutions for every type of business"
	cards={cardCarouselData}
/>
<IndustryGrid />
<KoriAI />
<PricingSection />
<TestimonialsCarousel />
<NewsletterForm />
<FAQ />
