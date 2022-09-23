<script>
	import Card from '$lib/main/partials/card.svelte';
	import Github from '$lib/icons/github.svg';
	import Mail from '$lib/icons/mail.svg';
	import LinkedIn from '$lib/icons/linkedin.svg';
	import SVG from 'svelte-inline-svg';
</script>

<div class=" bg-slate-900 flex flex-col min-h-screen w-screen">
	<div class=" flex container mx-auto py-2 text-white text-xl">
		<h1>Multi Styles CV</h1>
		<div class=" ml-auto flex">
			<a href="https://github.com/LLuthfiY" class=" my-auto">
				<SVG src={Github} class="icon my-auto hover:text-orange-400 icon w-6 h-6 mx-2" />
			</a>
			<a href="mailto:mluthfia00@gmail.com" class=" my-auto">
				<SVG src={Mail} class="icon my-auto hover:text-red-500 icon w-6 h-6 mx-2" />
			</a>
			<SVG src={LinkedIn} class="icon my-auto hover:text-blue-500 icon w-6 h-6 mx-2" />
		</div>
	</div>
	<div class=" flex-grow flex justify-center items-center py-4  ">
		<Card />
	</div>
</div>

<style>
</style>
