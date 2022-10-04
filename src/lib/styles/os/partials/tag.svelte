<script>
	import { accent, selectedAccent } from '$lib/writable/theme';
	export let name = 'chip';
</script>

<div class=" rounded text-sm p-1 mx-1" style="background-color : {$accent[$selectedAccent]}">
	<p>{name}</p>
</div>
