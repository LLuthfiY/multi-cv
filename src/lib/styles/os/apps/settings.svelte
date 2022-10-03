<script lang="ts">
	import Personalization from '$lib/styles/os/partials/personalization.svelte';
	import NavigationButton from '$lib/styles/os/partials/navigation_button.svelte';
	import Scrollable from '$lib/styles/os/partials/scrollable.svelte';
	import About from '../partials/about.svelte';
	import { beforeUpdate } from 'svelte';
	let active = 0;

	beforeUpdate(() => {});
</script>

<div class=" flex p-4 h-full ">
	<div class=" w-80">
		<NavigationButton index={0} bind:active>Personalization</NavigationButton>
		<NavigationButton index={1} bind:active>About</NavigationButton>
	</div>
	<Scrollable className=" flex-grow w-80 px-4 overflow-auto h-full">
		{#if active === 0}
			<Personalization />
		{:else if active === 1}
			<About />
		{/if}
	</Scrollable>
</div>
