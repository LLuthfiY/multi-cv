<script>
	import { project, tags } from '$lib/writable/profile';
	import CardProject from '../partials/cardProject.svelte';
	import Chip from '../partials/chip.svelte';
	import Scrollable from '../partials/scrollable.svelte';
</script>

<div class=" flex p-2">
	{#each Object.entries($tags) as [tag, value]}
		<Chip name={tag} />
	{/each}
</div>
<Scrollable>
	<div class="flex mx-2 flex-wrap">
		{#each $project as proj}
			{#if proj.tags.some((el) => {
				return $tags[el];
			})}
				<CardProject {...proj} />
			{/if}
		{/each}
	</div>
</Scrollable>
