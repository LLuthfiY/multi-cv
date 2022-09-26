<script lang="ts">
	export let className = '';

	import { accent, selectedAccent } from '$lib/writable/theme';

	function cssVariables(node: any, variables: any) {
		setCssVariables(node, variables);

		return {
			update(variables: any) {
				setCssVariables(node, variables);
			}
		};
	}
	function setCssVariables(node: any, variables: any) {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	}
</script>

<div class={'scrollable ' + className} use:cssVariables={{ color: $accent[$selectedAccent] }}>
	<slot />
</div>

<style>
	div.scrollable {
		scrollbar-track-color: transparent;
		scrollbar-color: var(--color) transparent;
		scrollbar-width: thin;
	}
	div.scrollable::-webkit-scrollbar {
		width: 8px;
	}
	div.scrollable::-webkit-scrollbar-track {
		background: transparent;
	}
	div.scrollable::-webkit-scrollbar-thumb {
		background-color: var(--color);
	}
	div.scrollable::-webkit-scrollbar-corner {
		background-color: transparent;
	}
</style>
