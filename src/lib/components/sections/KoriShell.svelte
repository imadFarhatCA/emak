<script>
	let { homeColor = '#444', children } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 780" fill="none" class="kori-phone-svg">
	<defs>
		<clipPath id="kp-screen"><rect x="32" y="22" width="316" height="716" rx="38"/></clipPath>
		<linearGradient id="frame-grad" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="#3a3a3c"/><stop offset="50%" stop-color="#2c2c2e"/><stop offset="100%" stop-color="#1c1c1e"/>
		</linearGradient>
	</defs>

	<rect x="20" y="10" width="340" height="740" rx="44" fill="url(#frame-grad)" stroke="#555" stroke-width="1"/>
	<rect x="16" y="120" width="4" height="24" rx="2" fill="#3a3a3c" stroke="#555" stroke-width="0.5"/>
	<rect x="16" y="165" width="4" height="40" rx="2" fill="#3a3a3c" stroke="#555" stroke-width="0.5"/>
	<rect x="16" y="215" width="4" height="40" rx="2" fill="#3a3a3c" stroke="#555" stroke-width="0.5"/>
	<rect x="360" y="180" width="4" height="56" rx="2" fill="#3a3a3c" stroke="#555" stroke-width="0.5"/>
	<rect x="28" y="18" width="324" height="724" rx="40" fill="#111" stroke="#333" stroke-width="0.5"/>

	<g clip-path="url(#kp-screen)">
		{@render children?.()}
	</g>

	<rect x="148" y="722" width="84" height="4" rx="2" fill={homeColor}/>
</svg>

<style>
	.kori-phone-svg { width: 100%; height: auto; }
</style>
