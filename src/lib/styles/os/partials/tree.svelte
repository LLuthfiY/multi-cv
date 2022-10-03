<script lang="ts">
	import { children } from 'svelte/internal';
	import About from './about.svelte';

	export let data: any;
	export let name = 'name';

	let expanded = false;
	const toggle = () => {
		expanded = !expanded;
	};
</script>

<span on:click={toggle} class=" text-slate-700 dark:text-slate-200 cursor-pointer my-1">{name}</span
>

{#if expanded}
	<!-- <ul class=" border-l-[1px] border-l-chalk-light-gray ml-2">
		{#each children as file}
			<li class=" ml-4 my-1">
				{#if file.children !== undefined}
					<svelte:self {...file}/>
				{:else}
					<span
						class=" bi bi-filetype-md cursor-pointer text-chalk-light-orange my-2"
						>{file.name}</span
					>
				{/if}
			</li>
		{/each}
	</ul> -->
	{#if data instanceof Array}
		<ul class=" border-l border-slate-700 dark:border-slate-300 ml-2">
			{#each data as d}
				<li class="ml-4 my-1">
					{#if typeof d === 'object'}
						<svelte:self data={d} />
					{:else}
						<span class=" cursor-pointer text-slate-700 dark:text-slate-200">{d}</span>
					{/if}
				</li>
			{/each}
		</ul>
	{:else}
		<ul class=" border-l border-slate-700 dark:border-slate-300 ml-2">
			{#each data as { key, value }, i}
				<li class="ml-4 my-1">
					{#if typeof value === 'object'}
						<svelte:self data={value} />
					{:else}
						<span class=" cursor-pointer text-slate-700 dark:text-slate-200">{key}</span>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
{/if}
