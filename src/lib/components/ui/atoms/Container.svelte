<script>
	export let fullWidth = false;
</script>

<div class="container" class:full-width={fullWidth}>
	<slot />
</div>

<style>
	.container { max-width: 65%; margin: 0 auto; }
	.full-width { max-width: 100%; }
	@media (max-width: 1024px) { .container { max-width: 85%; } }
	@media (max-width: 768px) { .container { max-width: 90%; } }
</style>
