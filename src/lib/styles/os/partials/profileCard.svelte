<script>
	export let className = '';
	import Github from '$lib/icons/github.svelte';
	import Linkedin from '$lib/icons/linkedin.svelte';
	import Mail from '$lib/icons/mail.svelte';
	import { accent, selectedAccent } from '$lib/writable/theme';
</script>

<div
	class={className +
		' text-slate-700 dark:text-slate-200 h-32 w-full group relative bg-slate-300 dark:bg-slate-700 rounded-lg overflow-hidden'}
>
	<div class="flex">
		<img src="/lazy2.png" alt="" class=" w-32  rounded-lg z-50" />
		<div class="p-2 flex-grow my-auto">
			<h1 class=" text-center w-full  text-4xl font-bold font-mono">LLuth</h1>
			<p class=" font-mono text-center">Muhammad Luthfi Albiansyah</p>

			<p class=" font-mono text-center">--Front-end and Back-end Developer--</p>
		</div>
	</div>
	<div
		class=" absolute top-0 left-0 w-32 group-hover:w-full transition-all h-full rounded-lg "
		style="background-color: #b3b1ff;"
	>
		<div class=" ml-36 text-slate-800 overflow-hidden h-full justify-center flex">
			<div class=" h-8 w-8 my-auto mx-4">
				<a href="https://github.com/LLuthfiY" class=" w-8 h-8">
					<Github />
				</a>
			</div>
			<div class=" h-8 w-8 my-auto mx-4">
				<a href="mailto:lluthfiy@outlook.com" class=" w-8 h-8">
					<Mail />
				</a>
			</div>
			<div class=" h-8 w-8 my-auto mx-4">
				<a href="https://www.linkedin.com/in/muhammad-luthfi-albiansyah/" class=" w-8 h-8">
					<Linkedin />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	/* h1::before,
	h1::after {
		content: '';
		border-bottom: 1px solid;
		flex: 1 1;
		margin: auto;
		margin-left: 1rem;
		margin-right: 1rem;
	} */
</style>
