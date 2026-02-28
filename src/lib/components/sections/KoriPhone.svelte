<script>
	import { onMount } from 'svelte';
	import KoriShell from './KoriShell.svelte';
	import KoriScreens from './KoriScreens.svelte';

	let step = $state(0);
	let time = $state('9:41');
	const TIMINGS = [2500, 2000, 1500, 2000, 2500, 2000, 3500, 2500, 7000, 600];

	let bg = $derived(step <= 1 ? '#1a1a1a' : step <= 8 ? '#fff' : '#000');
	let barColor = $derived(step <= 1 ? 'rgba(255,255,255,0.8)' : '#111');
	let islandFill = $derived(step <= 1 ? '#000' : '#1a1a1a');
	let homeColor = $derived(step >= 2 && step <= 8 ? '#ccc' : '#444');

	function updateTime() {
		const d = new Date();
		time = `${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`;
	}

	onMount(() => {
		updateTime();
		const ci = setInterval(updateTime, 10000);
		let t;
		const tick = () => { step = (step + 1) % 10; t = setTimeout(tick, TIMINGS[step]); };
		t = setTimeout(tick, TIMINGS[0]);
		return () => { clearInterval(ci); clearTimeout(t); };
	});
</script>

<KoriShell {homeColor}>
	<KoriScreens {step} {time} {bg} {barColor} {islandFill} />
</KoriShell>
