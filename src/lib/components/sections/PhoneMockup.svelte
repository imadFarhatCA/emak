<script>
	import { onMount } from 'svelte';

	let time = '9:41';

	function updateTime() {
		const now = new Date();
		let h = now.getHours();
		const m = now.getMinutes().toString().padStart(2, '0');
		time = `${h}:${m}`;
	}

	onMount(() => {
		updateTime();
		const interval = setInterval(updateTime, 10000);
		return () => clearInterval(interval);
	});
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 740" fill="none">

  <!-- Bobbing phone group -->
  <g>
    <animateTransform attributeName="transform" type="translate"
      values="0,0; 0,-10; 0,0" dur="5s" repeatCount="indefinite"
      calcMode="spline" keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"/>

    <!-- ═══ Phone Frame ═══ -->
    <rect x="20" y="15" width="300" height="680" rx="36" fill="#1a1a1a"/>
    <clipPath id="screen-clip">
      <rect x="24" y="19" width="292" height="672" rx="34"/>
    </clipPath>
    <rect x="24" y="19" width="292" height="672" rx="34" fill="#f7f6f5"/>

    <g clip-path="url(#screen-clip)">

      <!-- ═══ SCROLLABLE CONTENT (clipped to scroll area) ═══ -->
      <clipPath id="scroll-clip">
        <rect x="24" y="84" width="292" height="524"/>
      </clipPath>
      <g clip-path="url(#scroll-clip)">
        <g>
          <animateTransform attributeName="transform" type="translate"
            values="0,0; 0,0; 0,-110; 0,-110; 0,-220; 0,-220; 0,0"
            keyTimes="0; 0.12; 0.26; 0.45; 0.58; 0.80; 1"
            dur="16s" repeatCount="indefinite"
            calcMode="spline"
            keySplines="0 0 1 1; 0.35 0 0.15 1; 0 0 1 1; 0.35 0 0.15 1; 0 0 1 1; 0.35 0 0.15 1"/>

          <!-- ═══ Greeting ═══ -->
          <text x="38" y="106" font-family="Inter,sans-serif" font-size="16" font-weight="600" fill="#111">Good morning, Sarah</text>
          <text x="38" y="122" font-family="Inter,sans-serif" font-size="10" fill="#999">Monday, Feb 16 · 3 calls in queue</text>

          <!-- ═══ Stat Cards ═══ -->
          <rect x="34" y="136" width="86" height="64" rx="8" fill="#fff"/>
          <text x="44" y="154" font-family="Inter,sans-serif" font-size="9" fill="#999">Active Lines</text>
          <text x="44" y="180" font-family="Inter,sans-serif" font-size="24" font-weight="700" fill="#111">24</text>
          <rect x="76" y="168" width="22" height="14" rx="7" fill="#e6f9ee"/>
          <text x="87" y="178" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#34c759" text-anchor="middle">+3</text>

          <rect x="127" y="136" width="86" height="64" rx="8" fill="#fff"/>
          <text x="137" y="154" font-family="Inter,sans-serif" font-size="9" fill="#999">Calls Today</text>
          <text x="137" y="180" font-family="Inter,sans-serif" font-size="24" font-weight="700" fill="#111">156</text>
          <rect x="182" y="168" width="24" height="14" rx="7" fill="#e6f9ee"/>
          <text x="194" y="178" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#34c759" text-anchor="middle">94%</text>

          <rect x="220" y="136" width="86" height="64" rx="8" fill="#fff"/>
          <text x="230" y="154" font-family="Inter,sans-serif" font-size="9" fill="#999">KORI AI</text>
          <text x="230" y="180" font-family="Inter,sans-serif" font-size="24" font-weight="700" fill="#7c3aed">38</text>
          <rect x="268" y="168" width="30" height="14" rx="7" fill="#f0eaff"/>
          <text x="283" y="178" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#7c3aed" text-anchor="middle">saves</text>

          <!-- ═══ Recent Calls ═══ -->
          <rect x="34" y="212" width="272" height="176" rx="10" fill="#fff"/>
          <text x="48" y="234" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#111">Recent Calls</text>
          <text x="274" y="234" font-family="Inter,sans-serif" font-size="9" fill="#ee7700">View all</text>

          <circle cx="58" cy="260" r="13" fill="#fef3c7"/>
          <text x="58" y="264" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#92400e" text-anchor="middle">JD</text>
          <text x="78" y="256" font-family="Inter,sans-serif" font-size="12" font-weight="500" fill="#111">John D.</text>
          <text x="78" y="270" font-family="Inter,sans-serif" font-size="9" fill="#34c759">Answered · 4m ago</text>
          <text x="298" y="264" font-family="Inter,sans-serif" font-size="9" fill="#999" text-anchor="end">2m</text>

          <circle cx="58" cy="298" r="13" fill="#f0eaff"/>
          <text x="58" y="302" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#7c3aed" text-anchor="middle">AL</text>
          <text x="78" y="294" font-family="Inter,sans-serif" font-size="12" font-weight="500" fill="#111">Amy L.</text>
          <text x="78" y="308" font-family="Inter,sans-serif" font-size="9" fill="#7c3aed">KORI handled · 2m ago</text>
          <text x="298" y="302" font-family="Inter,sans-serif" font-size="9" fill="#999" text-anchor="end">8m</text>

          <circle cx="58" cy="336" r="13" fill="#dbeafe"/>
          <text x="58" y="340" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#1e40af" text-anchor="middle">MR</text>
          <text x="78" y="332" font-family="Inter,sans-serif" font-size="12" font-weight="500" fill="#111">Mike R.</text>
          <text x="78" y="346" font-family="Inter,sans-serif" font-size="9" fill="#34c759">Answered · 8m ago</text>
          <text x="298" y="340" font-family="Inter,sans-serif" font-size="9" fill="#999" text-anchor="end">15m</text>

          <circle cx="58" cy="374" r="13" fill="#fce7f3"/>
          <text x="58" y="378" font-family="Inter,sans-serif" font-size="8" font-weight="600" fill="#be185d" text-anchor="middle">SK</text>
          <text x="78" y="370" font-family="Inter,sans-serif" font-size="12" font-weight="500" fill="#111">Sara K.</text>
          <text x="78" y="384" font-family="Inter,sans-serif" font-size="9" fill="#ee7700">Missed · 12m ago</text>
          <text x="298" y="378" font-family="Inter,sans-serif" font-size="9" fill="#999" text-anchor="end">—</text>

          <!-- ═══ KORI AI Card ═══ -->
          <rect x="34" y="400" width="272" height="98" rx="10" fill="#fff"/>
          <rect x="34" y="400" width="272" height="28" rx="10" fill="#7c3aed"/>
          <rect x="34" y="416" width="272" height="12" fill="#7c3aed"/>
          <text x="50" y="419" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#fff">KORI AI Insights</text>

          <rect x="48" y="436" width="244" height="22" rx="4" fill="#f8f6ff"/>
          <text x="58" y="452" font-family="Inter,sans-serif" font-size="10" fill="#7c3aed">38 calls auto-handled today</text>
          <text x="280" y="452" font-family="Inter,sans-serif" font-size="9" font-weight="600" fill="#7c3aed" text-anchor="end">97%</text>

          <rect x="48" y="464" width="244" height="22" rx="4" fill="#f8f6ff"/>
          <text x="58" y="480" font-family="Inter,sans-serif" font-size="10" fill="#7c3aed">12 follow-ups scheduled</text>
          <text x="280" y="480" font-family="Inter,sans-serif" font-size="9" font-weight="600" fill="#7c3aed" text-anchor="end">3 urgent</text>

          <!-- ═══ Quick Actions ═══ -->
          <rect x="34" y="510" width="130" height="40" rx="8" fill="#ee7700"/>
          <text x="99" y="535" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#fff" text-anchor="middle">+ New Call</text>

          <rect x="176" y="510" width="130" height="40" rx="8" fill="#fff"/>
          <text x="241" y="535" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#111" text-anchor="middle">Team Chat</text>
          <circle cx="286" cy="530" r="3" fill="#34c759"/>

          <!-- ═══ Live Indicator ═══ -->
          <rect x="34" y="562" width="272" height="34" rx="8" fill="#fff"/>
          <circle cx="52" cy="579" r="4" fill="#34c759">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="62" y="583" font-family="Inter,sans-serif" font-size="10" font-weight="500" fill="#111">3 live calls</text>
          <text x="144" y="583" font-family="Inter,sans-serif" font-size="9" fill="#999">· Queue: 0</text>
          <text x="282" y="583" font-family="Inter,sans-serif" font-size="9" fill="#ee7700">View</text>

          <!-- ═══ EXTRA: Team Performance (revealed on scroll) ═══ -->
          <rect x="34" y="608" width="272" height="130" rx="10" fill="#fff"/>
          <text x="48" y="630" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#111">Team Performance</text>

          <text x="48" y="654" font-family="Inter,sans-serif" font-size="10" font-weight="500" fill="#111">Sarah M.</text>
          <rect x="140" y="646" width="136" height="8" rx="4" fill="#f0f0f0"/>
          <rect x="140" y="646" width="125" height="8" rx="4" fill="#34c759"/>
          <text x="284" y="654" font-family="Inter,sans-serif" font-size="9" fill="#999">92%</text>

          <text x="48" y="676" font-family="Inter,sans-serif" font-size="10" font-weight="500" fill="#111">Mike R.</text>
          <rect x="140" y="668" width="136" height="8" rx="4" fill="#f0f0f0"/>
          <rect x="140" y="668" width="120" height="8" rx="4" fill="#34c759"/>
          <text x="284" y="676" font-family="Inter,sans-serif" font-size="9" fill="#999">88%</text>

          <text x="48" y="698" font-family="Inter,sans-serif" font-size="10" font-weight="500" fill="#111">KORI AI</text>
          <rect x="140" y="690" width="136" height="8" rx="4" fill="#f0f0f0"/>
          <rect x="140" y="690" width="136" height="8" rx="4" fill="#7c3aed"/>
          <text x="284" y="698" font-family="Inter,sans-serif" font-size="9" fill="#999">100%</text>

          <text x="48" y="724" font-family="Inter,sans-serif" font-size="9" fill="#999">Team avg: 91% answer rate</text>

          <!-- ═══ EXTRA: Upcoming Events (revealed on deeper scroll) ═══ -->
          <rect x="34" y="750" width="272" height="108" rx="10" fill="#fff"/>
          <text x="48" y="772" font-family="Inter,sans-serif" font-size="13" font-weight="600" fill="#111">Upcoming</text>

          <circle cx="52" cy="796" r="4" fill="#ee7700"/>
          <text x="64" y="800" font-family="Inter,sans-serif" font-size="10" fill="#111">Callback: John D. at 2:00 PM</text>

          <circle cx="52" cy="820" r="4" fill="#7c3aed"/>
          <text x="64" y="824" font-family="Inter,sans-serif" font-size="10" fill="#111">Client demo at 4:30 PM</text>

          <text x="48" y="848" font-family="Inter,sans-serif" font-size="9" fill="#7c3aed">+4 more today</text>

        </g>
      </g>

      <!-- ═══ FIXED: Status Bar + Header overlay ═══ -->
      <rect x="24" y="19" width="292" height="65" fill="#f7f6f5"/>
      <!-- Dynamic Island -->
      <rect x="120" y="22" width="100" height="26" rx="13" fill="#1a1a1a"/>
      <!-- Clock -->
      <text x="44" y="44" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#111">{time}</text>
      <!-- Signal -->
      <rect x="246" y="38" width="3" height="4" rx="0.5" fill="#111"/>
      <rect x="251" y="36" width="3" height="6" rx="0.5" fill="#111"/>
      <rect x="256" y="34" width="3" height="8" rx="0.5" fill="#111"/>
      <rect x="261" y="32" width="3" height="10" rx="0.5" fill="#111"/>
      <!-- Wifi -->
      <path d="M274,40 Q278,32 282,40" stroke="#111" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M276,38 Q278,34 280,38" stroke="#111" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <!-- Battery -->
      <rect x="288" y="34" width="16" height="8" rx="2" stroke="#111" stroke-width="1" fill="none"/>
      <rect x="304" y="36.5" width="2" height="3" rx="0.5" fill="#111"/>
      <rect x="289.5" y="35.5" width="11" height="5" rx="1" fill="#111"/>

      <!-- App Header -->
      <text x="38" y="74" font-family="Inter,sans-serif" font-size="17" font-weight="700" fill="#111">EMAK</text>
      <text x="84" y="74" font-family="Inter,sans-serif" font-size="8" font-weight="500" fill="#ee7700">telecom</text>
      <circle cx="262" cy="68" r="12" fill="#fff"/>
      <circle cx="268" cy="62" r="4.5" fill="#ee7700"/>
      <text x="268" y="65" font-family="Inter,sans-serif" font-size="6" font-weight="700" fill="#fff" text-anchor="middle">3</text>
      <circle cx="292" cy="68" r="12" fill="#ee7700"/>
      <text x="292" y="72" font-family="Inter,sans-serif" font-size="9" font-weight="600" fill="#fff" text-anchor="middle">SM</text>

      <!-- ═══ FIXED: Bottom Tab Bar overlay ═══ -->
      <rect x="24" y="606" width="292" height="86" fill="#fff"/>
      <rect x="24" y="606" width="292" height="1" fill="#f0f0f0"/>

      <!-- Scroll indicator -->
      <rect x="310" y="90" width="3" height="510" rx="1.5" fill="#f0f0f0"/>
      <rect x="310" y="90" width="3" height="200" rx="1.5" fill="#ddd">
        <animate attributeName="y" values="90; 90; 148; 148; 210; 210; 90"
          keyTimes="0; 0.12; 0.26; 0.45; 0.58; 0.80; 1"
          dur="16s" repeatCount="indefinite"
          calcMode="spline"
          keySplines="0 0 1 1; 0.35 0 0.15 1; 0 0 1 1; 0.35 0 0.15 1; 0 0 1 1; 0.35 0 0.15 1"/>
      </rect>

      <!-- Tab icons -->
      <rect x="46" y="614" width="30" height="3" rx="1.5" fill="#ee7700"/>
      <text x="61" y="638" font-family="Inter,sans-serif" font-size="9" font-weight="600" fill="#ee7700" text-anchor="middle">Home</text>

      <text x="119" y="638" font-family="Inter,sans-serif" font-size="9" fill="#999" text-anchor="middle">Calls</text>
      <circle cx="134" cy="618" r="6" fill="#ee7700"/>
      <text x="134" y="621" font-family="Inter,sans-serif" font-size="7" font-weight="700" fill="#fff" text-anchor="middle">3</text>

      <text x="177" y="638" font-family="Inter,sans-serif" font-size="9" fill="#999" text-anchor="middle">Chat</text>
      <circle cx="191" cy="632" r="3" fill="#34c759"/>

      <text x="235" y="638" font-family="Inter,sans-serif" font-size="9" fill="#999" text-anchor="middle">KORI</text>
      <text x="285" y="638" font-family="Inter,sans-serif" font-size="9" fill="#999" text-anchor="middle">More</text>

    </g>

    <!-- Home indicator -->
    <rect x="130" y="678" width="80" height="4" rx="2" fill="#ccc"/>

  </g>
</svg>
