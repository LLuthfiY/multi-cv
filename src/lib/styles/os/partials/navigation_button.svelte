<script lang="ts">
	import { darkTheme, accent, selectedAccent } from '$lib/writable/theme';
	export let index = 0;
	export let active = 0;
	let isHovered = false;

	const clickHandler = () => {
		active = index;
	};
</script>

<button
	class="relative text-left w-full my-1 p-2 px-4 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer text-slate-700 dark:text-slate-200 hover:bg-slate-300 hover:dark:bg-slate-700"
	on:click={clickHandler}
>
	<slot />
	<div
		class="absolute rounded-lg w-1 h-full top-0 left-0"
		style="background-color: {index == active || isHovered
			? $accent[$selectedAccent]
			: 'transparent'}"
	/>
</button>
