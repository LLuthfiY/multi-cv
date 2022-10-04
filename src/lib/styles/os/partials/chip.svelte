<script>
	import Circle from '$lib/icons/circle.svelte';
	import CircleCheck from '$lib/icons/circleCheck.svelte';
	import { accent, selectedAccent } from '$lib/writable/theme';
	import { tags } from '$lib/writable/profile';
	export let name = 'chips';
	let state = true;

	const toggle = () => {
		state = !state;
		$tags[name] = state;
	};
</script>

<div
	class=" flex rounded-full px-4 py-2 text-slate-700 dark:text-slate-200 cursor-pointer border mx-2"
	style="background-color: {state
		? $accent[$selectedAccent]
		: 'transparent'}; border-color : {$accent[$selectedAccent]};
        color : {state ? $accent['white'] : $accent[$selectedAccent]}
        "
	on:click={toggle}
>
	{#if state}
		<CircleCheck className="h-4 my-auto" />
	{:else}
		<Circle className="h-4 my-auto" />
	{/if}
	<span class=" ml-2 select-none">{name}</span>
</div>
