<script lang="ts">
	import Scrollable from '$lib/styles/os/partials/scrollable.svelte';
	import { lines } from '$lib/writable/terminal';
	import TerminalLine from '../partials/terminalLine.svelte';

	let commandList: string[];

	lines.subscribe((value) => {
		commandList = value;
	});
</script>

<div class=" flex p-4 h-full ">
	<Scrollable className=" flex-grow w-80 px-4 overflow-auto h-full font-mono">
		{#each commandList as line}
			<TerminalLine currentLine={line} />
		{/each}
	</Scrollable>
</div>
