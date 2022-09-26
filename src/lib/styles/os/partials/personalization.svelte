<script lang="ts">
	import { darkTheme, accent } from '$lib/writable/theme';
	import AccentButton from './accent_button.svelte';
	import Moon from '$lib/icons/moon.svelte';
	import Sun from '$lib/icons/sun.svelte';

	const theme = (th: string) => {
		localStorage.theme = th;

		if (th === 'dark') {
			$darkTheme = true;
		}
		if (th === 'light') {
			$darkTheme = false;
		}
		$darkTheme
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};
</script>

<div>
	<div>
		<h2 class=" text-slate-800 dark:text-slate-200 mb-4 ml-2">Theme</h2>
		<button
			class="mx-2 p-2 rounded-lg hover:bg-slate-800 bg-slate-700 text-slate-100"
			on:click={() => {
				theme('dark');
			}}><Moon className=" text-slate-300" />Dark</button
		>
		<button
			class="mx-2 p-2 rounded-lg hover:bg-slate-200 bg-slate-300 text-slate-700"
			on:click={() => {
				theme('light');
			}}><Sun className="text-slate-700" />Light</button
		>
	</div>
	<div class=" mt-4">
		<h2 class=" text-slate-800 dark:text-slate-200 mb-4 ml-2">Color Accent</h2>
		{#each Object.entries($accent) as [name, color]}
			<AccentButton {color} {name} />
		{/each}
	</div>
</div>
