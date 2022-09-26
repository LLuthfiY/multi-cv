<script>
	import { accent, selectedAccent } from '$lib/writable/theme';
	export let color = '0,0,0';
	export let name = '';

	const changeSelectedAccent = () => {
		$selectedAccent = name;
	};
</script>

<button
	on:click={changeSelectedAccent}
	class="mx-2 my-2 w-12 h-12 rounded-lg hover:outline hover:outline-4 outline-slate-700 dark:outline-slate-200"
	style="background-color: {color}; outline-width: {$selectedAccent === name
		? '4px'
		: '0px'}; outline-style : {$selectedAccent === name ? 'solid' : 'none'}"
/>
