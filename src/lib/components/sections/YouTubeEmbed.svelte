<script>
	export let videoId;
	export let title = 'YouTube video';
</script>

<div class="video-wrapper">
	<iframe
		src="https://www.youtube-nocookie.com/embed/{videoId}"
		{title}
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
</div>

<style>
	.video-wrapper {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
		overflow: hidden;
		border-radius: var(--radius-md);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
	}

	.video-wrapper iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: var(--radius-md);
	}
</style>
