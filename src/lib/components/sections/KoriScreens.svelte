<svelte:options namespace="svg"/>

<script>
	let { step = 0, time = '9:41', bg = '#000', barColor = '#111', islandFill = '#000' } = $props();
</script>

{#snippet dots(x, y, color, bgFill)}
<g class="typing-dots">
	<rect {x} {y} width="68" height="40" rx="16" fill={bgFill}/>
	{#each [0, 14, 28] as dx, i}
		<circle cx={x + 20 + dx} cy={y + 20} r="4" fill={color} opacity="0.4">
			<animate attributeName="opacity" values="0.4;1;0.4" dur="1s" begin={`${i * 0.2}s`} repeatCount="indefinite"/>
		</circle>
	{/each}
</g>
{/snippet}

<!-- Screen background -->
<rect x="32" y="22" width="316" height="716" fill={bg}/>

<!-- Status bar + Dynamic Island -->
{#if step <= 8}
	<text x="54" y="50" font-family="Inter,SF Pro,sans-serif" font-size="14" font-weight="600" fill={barColor}>{time}</text>
	{#each [[272,44,5],[277,42,7],[282,39,10],[287,37,12]] as [bx,by,bh]}
		<rect x={bx} y={by} width="3" height={bh} rx="0.5" fill={barColor}/>
	{/each}
	<rect x="310" y="40" width="20" height="10" rx="2.5" stroke={barColor} stroke-width="1" fill="none"/>
	<rect x="311.5" y="41.5" width="15" height="7" rx="1.5" fill={barColor}/>
	<rect x="140" y="25" width="100" height="28" rx="14" fill={islandFill}/>
{/if}

<!-- ═══ CALL SCREEN (0-1) ═══ -->
{#if step <= 1}
	<circle cx="190" cy="210" r="48" fill="rgba(255,255,255,0.08)"/>
	<text x="190" y="222" font-family="Inter,sans-serif" font-size="26" font-weight="600" fill="rgba(255,255,255,0.6)" text-anchor="middle">RC</text>
	<text x="190" y="296" font-family="Inter,SF Pro,sans-serif" font-size="26" font-weight="600" fill="#fff" text-anchor="middle">Restaurant Client</text>
	<text x="190" y="320" font-family="Inter,sans-serif" font-size="15" fill="rgba(255,255,255,0.4)" text-anchor="middle">+1 (514) 555-0147</text>

	{#if step === 0}
		<text x="190" y="354" font-family="Inter,sans-serif" font-size="15" fill="rgba(255,255,255,0.3)" text-anchor="middle">incoming call...</text>
		<circle cx="190" cy="210" r="48" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" class="pulse-ring"/>
		<circle cx="190" cy="210" r="48" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="2" class="pulse-ring delay"/>

		<circle cx="125" cy="610" r="32" fill="#ff3b30"/>
		<svg x="112" y="597" width="26" height="26" viewBox="0 0 24 24">
			<path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" fill="#fff" transform="rotate(135 12 12)"/>
		</svg>
		<text x="125" y="656" font-family="Inter,sans-serif" font-size="12" fill="rgba(255,255,255,0.4)" text-anchor="middle">Decline</text>

		<circle cx="255" cy="610" r="32" fill="#34c759"/>
		<svg x="242" y="597" width="26" height="26" viewBox="0 0 24 24">
			<path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" fill="#fff"/>
		</svg>
		<text x="255" y="656" font-family="Inter,sans-serif" font-size="12" fill="rgba(255,255,255,0.4)" text-anchor="middle">Accept</text>
	{:else}
		<text x="190" y="354" font-family="Inter,sans-serif" font-size="16" font-weight="500" fill="#ff3b30" text-anchor="middle">Missed Call</text>
		<rect x="100" y="460" width="180" height="42" rx="21" fill="rgba(255,59,48,0.12)" class="fade-in"/>
		<text x="190" y="486" font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#ff6b6b" text-anchor="middle" class="fade-in">Call not answered</text>
		<rect x="72" y="540" width="236" height="54" rx="14" fill="rgba(124,58,237,0.1)" class="fade-in-late"/>
		<circle cx="100" cy="567" r="12" fill="rgba(124,58,237,0.2)" class="fade-in-late"/>
		<text x="100" y="571" font-family="Inter,sans-serif" font-size="10" font-weight="700" fill="#a78bfa" text-anchor="middle" class="fade-in-late">K</text>
		<text x="120" y="562" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#a78bfa" class="fade-in-late">KORI AI activating...</text>
		<text x="120" y="578" font-family="Inter,sans-serif" font-size="11" fill="rgba(167,139,250,0.6)" class="fade-in-late">Sending follow-up message</text>
	{/if}
{/if}

<!-- ═══ CHAT SCREEN (2-7) ═══ -->
{#if step >= 2 && step <= 7}
	<rect x="32" y="58" width="316" height="56" fill="#fff"/>
	<rect x="32" y="113" width="316" height="1" fill="#f0f0f0"/>
	<path d="M50 80 L44 86 L50 92" stroke="#ee7700" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
	<circle cx="80" cy="86" r="17" fill="#f0eaff"/>
	<text x="80" y="91" font-family="Inter,sans-serif" font-size="10" font-weight="700" fill="#7c3aed" text-anchor="middle">K</text>
	<text x="106" y="83" font-family="Inter,sans-serif" font-size="15" font-weight="600" fill="#111">KORI AI</text>
	<text x="106" y="98" font-family="Inter,sans-serif" font-size="11" fill="#34c759">Online · AI Assistant</text>
	<circle cx="308" cy="86" r="15" fill="#f5f5f5"/>
	<svg x="300" y="78" width="16" height="16" viewBox="0 0 24 24">
		<path d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" fill="#111"/>
	</svg>

	{#if step >= 3}
	<g class="msg-appear">
		<rect x="46" y="126" width="236" height="50" rx="16" fill="#f0eaff"/>
		<text x="62" y="150" font-family="Inter,sans-serif" font-size="14.5" fill="#1a1a1a">Sorry we missed your call! 📞</text>
		<text x="62" y="167" font-family="Inter,sans-serif" font-size="10" fill="rgba(0,0,0,0.3)">9:41 AM</text>
	</g>
	{/if}

	{#if step >= 4}
	<g class="msg-appear">
		<rect x="46" y="188" width="264" height="84" rx="16" fill="#f0eaff"/>
		<text x="62" y="212" font-family="Inter,sans-serif" font-size="14.5" fill="#1a1a1a">I'm KORI, your virtual</text>
		<text x="62" y="230" font-family="Inter,sans-serif" font-size="14.5" fill="#1a1a1a">reservation assistant. How</text>
		<text x="62" y="248" font-family="Inter,sans-serif" font-size="14.5" fill="#1a1a1a">can we assist you? 😊</text>
		<text x="62" y="264" font-family="Inter,sans-serif" font-size="10" fill="rgba(0,0,0,0.3)">9:41 AM</text>
	</g>
	{/if}

	{#if step >= 5}
	<g class="msg-appear">
		<rect x="72" y="284" width="266" height="88" rx="16" fill="#ee7700"/>
		<text x="88" y="308" font-family="Inter,sans-serif" font-size="14.5" fill="#fff">I need a table for 4 at 19:00</text>
		<text x="88" y="326" font-family="Inter,sans-serif" font-size="14.5" fill="#fff">on Wednesday for a business</text>
		<text x="88" y="344" font-family="Inter,sans-serif" font-size="14.5" fill="#fff">dinner.</text>
		<text x="322" y="362" font-family="Inter,sans-serif" font-size="10" fill="rgba(255,255,255,0.5)" text-anchor="end">9:42 AM ✓✓</text>
	</g>
	{/if}

	{#if step >= 6}
	<g class="msg-appear">
		<rect x="46" y="384" width="278" height="102" rx="16" fill="#f0eaff"/>
		<text x="62" y="408" font-family="Inter,sans-serif" font-size="14.5" fill="#1a1a1a">Thank you! Your table for 4</text>
		<text x="62" y="426" font-family="Inter,sans-serif" font-size="14.5" fill="#1a1a1a">on Wed at 19:00 is confirmed ✅</text>
		<text x="62" y="444" font-family="Inter,sans-serif" font-size="14.5" fill="#1a1a1a">You'll receive a booking SMS</text>
		<text x="62" y="462" font-family="Inter,sans-serif" font-size="14.5" fill="#1a1a1a">shortly.</text>
		<text x="62" y="478" font-family="Inter,sans-serif" font-size="10" fill="rgba(0,0,0,0.3)">9:43 AM</text>
	</g>
	{/if}

	{#if step === 2}
		{@render dots(46, 126, '#7c3aed', '#f0eaff')}
	{:else if step === 3}
		{@render dots(46, 188, '#7c3aed', '#f0eaff')}
	{:else if step === 4}
		{@render dots(270, 284, '#ee7700', '#fef3e0')}
	{:else if step === 5}
		{@render dots(46, 384, '#7c3aed', '#f0eaff')}
	{/if}

	<rect x="32" y="666" width="316" height="48" fill="#fff"/>
	<rect x="32" y="666" width="316" height="1" fill="#eee"/>
	<rect x="48" y="676" width="230" height="30" rx="15" fill="#f5f5f5" stroke="#e5e5e5" stroke-width="0.5"/>
	<text x="66" y="695" font-family="Inter,sans-serif" font-size="12" fill="#aaa">Type a message...</text>
	<circle cx="302" cy="691" r="14" fill="#ee7700"/>
	<line x1="302" y1="684" x2="307" y2="690" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
	<line x1="302" y1="684" x2="297" y2="690" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
	<line x1="302" y1="685" x2="302" y2="698" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>

	{#if step === 7}
	<g class="notification-slide">
		<rect x="42" y="60" width="296" height="78" rx="18" fill="rgba(35,35,37,0.97)"/>
		<rect x="56" y="76" width="32" height="32" rx="7" fill="#34c759"/>
		<text x="72" y="97" font-family="Inter,sans-serif" font-size="15" fill="#fff" text-anchor="middle">💬</text>
		<text x="98" y="84" font-family="Inter,sans-serif" font-size="10" fill="rgba(255,255,255,0.45)">MESSAGES · now</text>
		<text x="98" y="100" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#fff">KORI AI</text>
		<text x="98" y="118" font-family="Inter,sans-serif" font-size="12" fill="rgba(255,255,255,0.65)">Reservation confirmed! Ref: #KR-4829</text>
	</g>
	{/if}
{/if}

<!-- ═══ SMS SCREEN (8) ═══ -->
{#if step === 8}
	<rect x="32" y="58" width="316" height="56" fill="#f8f8f8"/>
	<rect x="32" y="113" width="316" height="1" fill="#e0e0e0"/>
	<path d="M50 80 L44 86 L50 92" stroke="#007AFF" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
	<text x="58" y="90" font-family="Inter,sans-serif" font-size="13" fill="#007AFF">Messages</text>
	<text x="190" y="84" font-family="Inter,sans-serif" font-size="15" font-weight="600" fill="#111" text-anchor="middle">KORI AI</text>
	<text x="190" y="100" font-family="Inter,sans-serif" font-size="10" fill="#888" text-anchor="middle">SMS · Text Message</text>

	<g class="msg-appear">
		<rect x="46" y="130" width="280" height="196" rx="18" fill="#f0eaff"/>
		<text x="64" y="158" font-family="Inter,sans-serif" font-size="15" font-weight="600" fill="#1a1a1a">Reservation Confirmed ✅</text>
		<line x1="64" y1="170" x2="306" y2="170" stroke="rgba(124,58,237,0.15)" stroke-width="0.5"/>
		<text x="64" y="192" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#7c3aed">📋 Booking Details</text>
		<text x="64" y="214" font-family="Inter,sans-serif" font-size="13" fill="#333">Restaurant: Le Petit Bistro</text>
		<text x="64" y="234" font-family="Inter,sans-serif" font-size="13" fill="#333">Date: Wednesday, Mar 5</text>
		<text x="64" y="254" font-family="Inter,sans-serif" font-size="13" fill="#333">Time: 19:00</text>
		<text x="64" y="274" font-family="Inter,sans-serif" font-size="13" fill="#333">Guests: 4</text>
		<text x="64" y="294" font-family="Inter,sans-serif" font-size="13" fill="#333">Ref: #KR-4829</text>
		<text x="64" y="318" font-family="Inter,sans-serif" font-size="10" fill="rgba(0,0,0,0.3)">9:43 AM</text>
	</g>

	<g class="fade-in-late">
		<rect x="46" y="340" width="210" height="42" rx="21" fill="#007AFF"/>
		<text x="151" y="366" font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#fff" text-anchor="middle">📅 Add to Calendar</text>
	</g>
{/if}

<style>
	.pulse-ring { animation: pulseRing 2s ease-out infinite; transform-origin: center; }
	.pulse-ring.delay { animation-delay: 0.6s; }
	@keyframes pulseRing { 0% { r: 48; opacity: 0.25; } 100% { r: 80; opacity: 0; } }
	.fade-in { animation: fadeIn 0.4s ease-out both; }
	.fade-in-late { animation: fadeIn 0.5s ease-out 0.8s both; }
	@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
	.msg-appear { animation: msgSlide 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
	@keyframes msgSlide { from { opacity: 0; transform: translateY(12px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
	.typing-dots { animation: fadeIn 0.25s ease-out both; }
	.notification-slide { animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1) both; }
	@keyframes slideDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
</style>
