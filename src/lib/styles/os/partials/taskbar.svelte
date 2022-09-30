<script>
	import Battery from '$lib/icons/battery.svelte';
	import Sound from '$lib/icons/sound.svelte';
	import Wifi from '$lib/icons/wifi.svelte';

	import { calendar, menu } from '$lib/writable/systemUI';
	let Hours = new Date().getHours();
	let Minutes = new Date().getMinutes();
	setInterval(() => {
		Hours = new Date().getHours();
		Minutes = new Date().getMinutes();
	}, 2000);

	const calendarToggle = () => {
		$calendar = !$calendar;
	};
	const menuToggle = () => {
		$menu = !$menu;
	};
</script>

<div class="px-4 flex h-fit bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
	<div class=" ml-auto flex">
		<div class=" text-inherit flex w-4 mx-1 cursor-pointer" on:click={menuToggle}>
			<Wifi className="my-auto" />
		</div>
		<div class=" text-inherit flex w-4 mx-1 cursor-pointer" on:click={menuToggle}>
			<Sound className="my-auto" />
		</div>
		<div class=" text-inherit flex w-4 mx-1 cursor-pointer" on:click={menuToggle}>
			<Battery className="my-auto" />
		</div>
		<div
			class=" h-fit mx-1 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-600 p-2"
			on:click={calendarToggle}
		>
			<p>{String(Hours).padStart(2, '0')} : {String(Minutes).padStart(2, '0')}</p>
		</div>
	</div>
</div>
