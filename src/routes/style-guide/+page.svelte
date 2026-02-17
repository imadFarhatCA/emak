<script>
	const typography = [
		{
			name: 'Main Title',
			class: '.main-title',
			tag: 'h1',
			specs: '3.5rem / 600 / 1.1 / -0.02em',
			color: '#111',
			sample: 'The phone system that works'
		},
		{
			name: 'Main Text',
			class: '.main-text',
			tag: 'p',
			specs: '1.25rem / 400 / 1.7',
			color: '#636366',
			sample: 'Everything your team needs to stay connected, in one place.'
		},
		{
			name: 'Category Title',
			class: '.category-title',
			tag: 'h2',
			specs: '2.75rem / 500 / 1.1 / -0.03em',
			color: '#111',
			sample: 'The EMAK difference'
		},
		{
			name: 'Category Text',
			class: '.category-text',
			tag: 'p',
			specs: '0.9375rem / 500 / 1.5',
			color: '#636363',
			sample: 'Built for teams that move fast and need reliable tools.'
		},
		{
			name: 'Card Title',
			class: '.card-title-text',
			tag: 'span',
			specs: '1.0625rem / 600 / 1.4',
			color: '#111',
			sample: 'Stay in sync with your team'
		},
		{
			name: 'Card Body',
			class: '.card-body-text',
			tag: 'span',
			specs: '1.0625rem / 400 / 1.4',
			color: '#7b7b7a',
			sample: 'having context at all times'
		}
	];

	const ctas = [
		{
			name: 'CTA Main',
			class: '.cta-main',
			bg: '#ee7700',
			hoverBg: '#ff8500',
			text: '#fff',
			border: 'none',
			label: 'Book a Demo'
		},
		{
			name: 'CTA Black',
			class: '.cta-black',
			bg: '#111',
			hoverBg: '#ee7700',
			text: '#fff',
			border: 'none',
			label: 'Get Started'
		},
		{
			name: 'CTA Grey',
			class: '.cta-grey',
			bg: '#f7f6f5',
			hoverBg: '#fbfbfa',
			text: '#111',
			border: 'transparent → #d0d0d0',
			label: 'Learn More'
		}
	];

	const colors = [
		{ name: 'Primary', var: '--color-primary', value: '#111' },
		{ name: 'Accent', var: '--color-accent', value: '#ee7700' },
		{ name: 'Text', var: '--color-text', value: '#1d1d1f' },
		{ name: 'Text Light', var: '--color-text-light', value: '#636366' },
		{ name: 'Background', var: '--color-bg', value: '#fff' },
		{ name: 'Gray', var: '--color-gray', value: '#f5f5f7' },
		{ name: 'Border', var: '--color-border', value: '#d2d2d7' },
		{ name: 'Card BG', var: '--card-bg', value: '#f7f6f5' },
		{ name: 'Card Hover', var: '--card-bg-hover', value: '#fbfbfa' },
		{ name: 'KORI Purple', var: '—', value: '#7c3aed' }
	];

	const spacing = [
		{ name: 'XS', var: '--space-xs', value: '8px' },
		{ name: 'SM', var: '--space-sm', value: '16px' },
		{ name: 'MD', var: '--space-md', value: '24px' },
		{ name: 'LG', var: '--space-lg', value: '32px' },
		{ name: 'XL', var: '--space-xl', value: '48px' },
		{ name: '2XL', var: '--space-2xl', value: '64px' },
		{ name: '3XL', var: '--space-3xl', value: '96px' }
	];

	const radii = [
		{ name: 'SM', var: '--radius-sm', value: '8px' },
		{ name: 'MD', var: '--radius-md', value: '12px' },
		{ name: 'LG', var: '--radius-lg', value: '18px' },
		{ name: 'Full', var: '--radius-full', value: '9999px' },
		{ name: 'CTA', var: '—', value: '5px' }
	];
</script>

<svelte:head>
	<title>Style Guide — EMAK</title>
</svelte:head>

<div class="guide">
	<header class="guide-header">
		<h1>EMAK Design System</h1>
		<p>Visual ledger of typography, CTAs, colors, and spacing tokens.</p>
	</header>

	<!-- Typography -->
	<section class="guide-section">
		<h2 class="section-label">Typography</h2>
		<div class="type-grid">
			{#each typography as t}
				<div class="type-row">
					<div class="type-sample">
						<span class={t.class.slice(1)}>{t.sample}</span>
					</div>
					<div class="type-meta">
						<strong>{t.name}</strong>
						<code>{t.class}</code>
						<span class="specs">{t.specs}</span>
						<span class="specs">color: {t.color}</span>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- CTAs -->
	<section class="guide-section">
		<h2 class="section-label">Call-to-Action Buttons</h2>
		<div class="cta-grid">
			{#each ctas as c}
				<div class="cta-row">
					<div class="cta-sample">
						<a href="#top" class={c.class.slice(1)}>{c.label}</a>
					</div>
					<div class="cta-meta">
						<strong>{c.name}</strong>
						<code>{c.class}</code>
						<span class="specs">bg: {c.bg} → {c.hoverBg}</span>
						<span class="specs">text: {c.text}</span>
						<span class="specs">border: {c.border}</span>
						<span class="specs">radius: 5px · padding: 16px 32px</span>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Card Colors -->
	<section class="guide-section">
		<h2 class="section-label">Card Styles</h2>
		<div class="card-demo-row">
			<div class="card-demo">
				<div class="card-demo-box card-bg">
					<span class="card-title-text">Card Title</span>
					<span class="card-body-text">Card body text goes here</span>
				</div>
				<div class="cta-meta">
					<strong>Default</strong>
					<span class="specs">bg: #f7f6f5 · radius: 12px</span>
				</div>
			</div>
			<div class="card-demo">
				<div class="card-demo-box card-bg-hover">
					<span class="card-title-text">Card Title</span>
					<span class="card-body-text">Card body text goes here</span>
				</div>
				<div class="cta-meta">
					<strong>Hover</strong>
					<span class="specs">bg: #fbfbfa · border: #d0d0d0</span>
					<span class="specs">shadow: 0 2px 12px rgba(0,0,0,0.06)</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Colors -->
	<section class="guide-section">
		<h2 class="section-label">Colors</h2>
		<div class="color-grid">
			{#each colors as c}
				<div class="color-chip">
					<div class="color-swatch" style="background:{c.value}; {c.value === '#fff' ? 'border:1px solid #ddd' : ''}"></div>
					<strong>{c.name}</strong>
					<code>{c.var}</code>
					<span class="specs">{c.value}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Spacing -->
	<section class="guide-section">
		<h2 class="section-label">Spacing</h2>
		<div class="spacing-grid">
			{#each spacing as s}
				<div class="spacing-row">
					<div class="spacing-bar" style="width:{s.value}"></div>
					<div class="spacing-info">
						<strong>{s.name}</strong>
						<code>{s.var}</code>
						<span class="specs">{s.value}</span>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Border Radius -->
	<section class="guide-section">
		<h2 class="section-label">Border Radius</h2>
		<div class="radius-grid">
			{#each radii as r}
				<div class="radius-chip">
					<div class="radius-sample" style="border-radius:{r.value}"></div>
					<strong>{r.name}</strong>
					<code>{r.var}</code>
					<span class="specs">{r.value}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Font Weights -->
	<section class="guide-section">
		<h2 class="section-label">Font Weights</h2>
		<div class="weight-grid">
			<div class="weight-row"><span style="font-weight:400">Normal (400)</span><code>--fw-normal</code></div>
			<div class="weight-row"><span style="font-weight:500">Medium (500)</span><code>--fw-medium</code></div>
			<div class="weight-row"><span style="font-weight:600">Semibold (600)</span><code>--fw-semibold</code></div>
			<div class="weight-row"><span style="font-weight:700">Bold (700)</span><code>--fw-bold</code></div>
		</div>
	</section>
</div>

<style>
	.guide {
		max-width: 900px;
		margin: 0 auto;
		padding: 60px 24px 120px;
	}
	.guide-header {
		margin-bottom: 64px;
	}
	.guide-header h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 8px;
	}
	.guide-header p {
		font-size: 1.1rem;
		color: var(--color-text-light);
	}

	.guide-section {
		margin-bottom: 64px;
	}
	.section-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-text-light);
		border-bottom: 1px solid var(--color-border);
		padding-bottom: 12px;
		margin-bottom: 32px;
	}

	/* Typography */
	.type-grid {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
	.type-row {
		display: grid;
		grid-template-columns: 1fr 240px;
		gap: 24px;
		align-items: center;
		padding-bottom: 32px;
		border-bottom: 1px solid #f0f0f0;
	}
	.type-row:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}
	.type-meta {
		display: flex;
		flex-direction: column;
		gap: 4px;
		font-size: 0.8125rem;
	}
	.type-meta strong {
		font-size: 0.875rem;
		color: var(--color-text);
	}
	.type-meta code {
		font-size: 0.75rem;
		color: var(--color-accent);
		background: #fff5eb;
		padding: 2px 6px;
		border-radius: 4px;
		width: fit-content;
	}
	.specs {
		font-size: 0.75rem;
		color: #999;
		font-family: 'SF Mono', 'Menlo', monospace;
	}

	/* CTAs */
	.cta-grid {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.cta-row {
		display: grid;
		grid-template-columns: 240px 1fr;
		gap: 32px;
		align-items: center;
		padding-bottom: 24px;
		border-bottom: 1px solid #f0f0f0;
	}
	.cta-row:last-child {
		border-bottom: none;
		padding-bottom: 0;
	}
	.cta-sample {
		display: flex;
		align-items: center;
	}
	.cta-meta {
		display: flex;
		flex-direction: column;
		gap: 4px;
		font-size: 0.8125rem;
	}
	.cta-meta strong {
		font-size: 0.875rem;
		color: var(--color-text);
	}
	.cta-meta code {
		font-size: 0.75rem;
		color: var(--color-accent);
		background: #fff5eb;
		padding: 2px 6px;
		border-radius: 4px;
		width: fit-content;
	}

	/* Card demos */
	.card-demo-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
	}
	.card-demo-box {
		padding: 24px;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-bottom: 12px;
		border: 1px solid transparent;
	}
	.card-demo-box.card-bg-hover {
		border-color: #d0d0d0;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
	}

	/* Colors */
	.color-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 20px;
	}
	.color-chip {
		display: flex;
		flex-direction: column;
		gap: 4px;
		font-size: 0.8125rem;
	}
	.color-chip strong {
		font-size: 0.8125rem;
	}
	.color-chip code {
		font-size: 0.6875rem;
		color: #999;
	}
	.color-swatch {
		width: 100%;
		aspect-ratio: 2/1;
		border-radius: 8px;
		margin-bottom: 4px;
	}

	/* Spacing */
	.spacing-grid {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.spacing-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.spacing-bar {
		height: 20px;
		background: var(--color-accent);
		border-radius: 4px;
		min-width: 8px;
	}
	.spacing-info {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.8125rem;
	}
	.spacing-info code {
		font-size: 0.6875rem;
		color: #999;
	}

	/* Border Radius */
	.radius-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 20px;
	}
	.radius-chip {
		display: flex;
		flex-direction: column;
		gap: 4px;
		align-items: center;
		text-align: center;
		font-size: 0.8125rem;
	}
	.radius-chip code {
		font-size: 0.6875rem;
		color: #999;
	}
	.radius-sample {
		width: 64px;
		height: 64px;
		background: var(--color-gray);
		border: 1px solid var(--color-border);
		margin-bottom: 4px;
	}

	/* Font Weights */
	.weight-grid {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.weight-row {
		display: flex;
		align-items: center;
		gap: 16px;
		font-size: 1.25rem;
	}
	.weight-row code {
		font-size: 0.75rem;
		color: #999;
	}

	@media (max-width: 768px) {
		.type-row {
			grid-template-columns: 1fr;
		}
		.cta-row {
			grid-template-columns: 1fr;
		}
		.card-demo-row {
			grid-template-columns: 1fr;
		}
		.color-grid {
			grid-template-columns: repeat(3, 1fr);
		}
		.radius-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
