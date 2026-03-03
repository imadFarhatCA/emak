<!--
  WEBSITE TRACKER (Svelte 4)
  ===========================
  Same as WebsiteTracker.svelte but for Svelte 4 projects (uses export let instead of $props).

  USAGE:
  1. Copy this file as WebsiteTracker.svelte to your project
  2. Import in root layout: import WebsiteTracker from '$lib/components/WebsiteTracker.svelte';
  3. Add <WebsiteTracker /> anywhere in the layout
-->
<script>
	export let panel = 'https://website-control-panel.pages.dev';
</script>

<svelte:head>
	<script src="{panel}/tracker.js"></script>
</svelte:head>
