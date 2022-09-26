<script lang="ts">
	import Personalization from '$lib/styles/os/partials/personalization.svelte';
	import NavigationButton from '$lib/styles/os/partials/navigation_button.svelte';
	import Scrollable from '$lib/styles/os/partials/scrollable.svelte';
	let active = 0;
</script>

<div class=" flex p-4 h-full ">
	<div class=" w-80">
		<NavigationButton index={0} bind:active>Personalization</NavigationButton>
		<NavigationButton index={1} bind:active>About</NavigationButton>
	</div>
	<Scrollable className=" flex-grow w-80 px-4 overflow-auto h-full">
		<Personalization />
	</Scrollable>
</div>
