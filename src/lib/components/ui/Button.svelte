<script>
	export let variant = 'primary'; // primary, warning, outline
	export let href = null;
	export let type = 'button';
	export let disabled = false;
</script>

{#if href}
	<a {href} class="btn btn-{variant}" class:disabled>
		<slot />
	</a>
{:else}
	<button {type} {disabled} class="btn btn-{variant}" on:click>
		<slot />
	</button>
{/if}

<style>
	/* Styles inherited from global app.css */
	/* Additional component-specific styles can be added here if needed */
</style>
