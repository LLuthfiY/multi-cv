<script lang="ts">
	import Md from '$lib/icons/md.svelte';
	import { accent, selectedAccent } from '$lib/writable/theme';
	import { each } from 'svelte/internal';
	import Chip from './chip.svelte';
	import Tag from './tag.svelte';
	export let name = '';
	export let url = '';
	export let md = '';
	export let tags: string[] = [];

	let isHovered = false;
</script>

<a href={url}>
	<div
		class=" cardProject w-36 p-2 m-2 rounded-lg text-slate-700 dark:text-slate-200"
		style="border-color: {$accent[$selectedAccent]}; background-color: {isHovered
			? $accent[$selectedAccent]
			: 'transparent'}"
		on:mouseenter={() => (isHovered = true)}
		on:mouseleave={() => (isHovered = false)}
	>
		<Md />
		<p class=" my-4">{name}</p>
		<div class=" flex">
			{#each tags as tag}
				<Tag name={tag} />
			{/each}
		</div>
	</div>
</a>
