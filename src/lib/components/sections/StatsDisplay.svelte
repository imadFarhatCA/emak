<script>
	import { Container, Section, Grid } from '$lib/components/ui/atoms';

	const stats = [
		{ number: '21', label: 'Years of Experience', icon: 'fas fa-calendar-alt' },
		{ number: '18', label: 'Team Members', icon: 'fas fa-users' },
		{ number: '5,000+', label: 'Satisfied Users', icon: 'fas fa-smile' },
		{ number: '50M+', label: 'Connection Calls', icon: 'fas fa-phone-volume' }
	];
</script>

<Section bg="white">
	<Container>
		<Grid cols={4} gap="xl">
			{#each stats as stat}
				<div class="stat-card">
					<div class="stat-icon">
						<i class={stat.icon}></i>
					</div>
					<div class="stat-number">{stat.number}</div>
					<div class="stat-label">{stat.label}</div>
				</div>
			{/each}
		</Grid>
	</Container>
</Section>

<style>
	.stat-card {
		text-align: center;
		padding: var(--spacing-xl);
		background-color: var(--color-light-gray);
		border-radius: var(--radius-lg);
		transition: all var(--transition-normal);
	}

	.stat-card:hover {
		background-color: var(--color-primary);
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
	}

	.stat-card:hover .stat-icon,
	.stat-card:hover .stat-number,
	.stat-card:hover .stat-label {
		color: var(--color-background);
	}

	.stat-card:hover .stat-icon {
		background-color: var(--color-accent);
	}

	.stat-icon {
		width: 60px;
		height: 60px;
		margin: 0 auto var(--spacing-md);
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-accent);
		border-radius: var(--radius-full);
		font-size: 1.5rem;
		color: var(--color-primary);
		transition: all var(--transition-normal);
	}

	.stat-number {
		font-size: 2.5rem;
		font-weight: var(--font-weight-extrabold);
		color: var(--color-primary);
		margin-bottom: var(--spacing-xs);
		transition: color var(--transition-normal);
	}

	.stat-label {
		font-size: 1rem;
		color: var(--color-text-light);
		font-weight: var(--font-weight-medium);
		transition: color var(--transition-normal);
	}

	@media (max-width: 768px) {
		.stat-number {
			font-size: 2rem;
		}
	}
</style>
