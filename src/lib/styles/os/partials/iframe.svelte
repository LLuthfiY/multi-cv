<script lang="ts">
	import Scrollable from './scrollable.svelte';
	export let link = '';
	export let title = '';
	const onLoad = (el: any) => {
		console.log(el.target.contentWindow.location.href);
	};
</script>

<Scrollable className="w-full h-full">
	<iframe
		width="100%"
		height="100%"
		class=" w-full h-full iframe"
		on:load={onLoad}
		src={link}
		{title}
	/>
</Scrollable>
