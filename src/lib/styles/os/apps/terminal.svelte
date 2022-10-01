<script lang="ts">
	import Scrollable from '$lib/styles/os/partials/scrollable.svelte';
	import TerminalLine from '../partials/terminalLine.svelte';

	let lines = ["this is javascript' console"];
	let active = 0;
</script>

<div class=" flex p-4 h-full ">
	<Scrollable className=" flex-grow w-80 px-4 overflow-auto h-full font-mono">
		<TerminalLine />
	</Scrollable>
</div>
