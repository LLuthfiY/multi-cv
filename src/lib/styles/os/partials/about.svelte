<script>
	import ProfileCard from './profileCard.svelte';
	import { skill } from '$lib/writable/profile';
	import Tree from './tree.svelte';
</script>

<div class=" pb-8 text-slate-700 dark:text-slate-200 rounded-lg p-2">
	<ProfileCard />
	<h2 class=" font-mono text-slate-700 dark:text-slate-200 mt-4">skill :</h2>
	<div class=" border-l border-slate-700 dark:border-slate-200 ml-2 pl-4 flex flex-col">
		<Tree data={$skill.languange} name="Language :" />
		<Tree data={$skill.framework} name="Framework :" />
		<Tree data={$skill.dataBase} name="Database :" />
	</div>
</div>
