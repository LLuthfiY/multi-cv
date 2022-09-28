<script lang="ts">
	import Iframe from '../partials/iframe.svelte';
	import { accent, selectedAccent } from '$lib/writable/theme';
	export let link = '';
	export let title = '';
	const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));
	let url = link;
	const goToLink = async () => {
		const googleRegex = /google/;
		if (link.match(googleRegex) && url == 'https://www.google.com/?igu=1') {
			url = '';
			await sleep(10);
		}
		if (link.match(googleRegex)) link = 'https://www.google.com/?igu=1';
		url = link;
	};
</script>

<div class=" flex flex-col h-full p-2">
	<div class=" flex my-2 p-1 rounded-lg bg-slate-300 dark:bg-slate-700">
		<input
			type="text"
			class=" px-2 flex-grow rounded-l-lg bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-200 focus-visible:outline-none focus-visible:outline-0"
			bind:value={link}
		/>
		<button
			class="rounded-lg text-slate-100 dark:text-slate-900 outline-none outline-0 p-1 "
			style="background-color: {$accent[$selectedAccent]};"
			on:click={goToLink}>Search</button
		>
	</div>
	<div class=" flex-grow">
		<Iframe {title} bind:link={url} />
	</div>
</div>
