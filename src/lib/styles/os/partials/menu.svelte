<script lang="ts">
	import Accessbility from '$lib/icons/accessbility.svelte';
	import BatteryCharge from '$lib/icons/batteryCharge.svelte';
	import Bluetooth from '$lib/icons/bluetooth.svelte';
	import Cast from '$lib/icons/cast.svelte';
	import Flight from '$lib/icons/flight.svelte';
	import Geo from '$lib/icons/geo.svelte';
	import Moon from '$lib/icons/moon.svelte';
	import Shield from '$lib/icons/shield.svelte';
	import Wifi from '$lib/icons/wifi.svelte';
	import { menu } from '$lib/writable/systemUI';
	import { accent, selectedAccent } from '$lib/writable/theme';

	let wifi = true,
		bluetooth = false,
		flight = false,
		battery = false,
		nightlight = false,
		accessbility = false,
		location = false,
		security = false,
		sharing = false;

	const change = (setting: string) => {
		if (setting === 'wifi') wifi = !wifi;
		if (setting === 'bluetooth') bluetooth = !bluetooth;
		if (setting === 'flight') flight = !flight;
		if (setting === 'battery') battery = !battery;
		if (setting === 'nightlight') nightlight = !nightlight;
		if (setting === 'accessbility') accessbility = !accessbility;
		if (setting === 'location') location = !location;
		if (setting === 'security') security = !security;
		if (setting === 'sharing') sharing = !sharing;
	};
</script>

<div
	class=" absolute rounded-lg p-2 {$menu
		? 'right-2'
		: '-right-full'} top-2 w-80 bg-slate-200 dark:bg-slate-800 transition-all outline outline-1"
	style="z-index: 9999999; outline-color: {$accent[$selectedAccent]}"
>
	<div class=" flex ">
		<span class=" mx-auto my-32 text-slate-800 dark:text-slate-200 font-semibold"
			>No Notification</span
		>
	</div>
	<div class=" p-2 flex flex-wrap justify-start rounded-lg bg-slate-300 dark:bg-slate-700">
		<button
			class=" p-2 mx-auto my-2 h-12 rounded-lg flex hover:bg-slate-300 hover:dark:bg-slate-700"
			style="background-color: {wifi
				? $accent[$selectedAccent]
				: 'transparent'}; width: calc(100%/3.5);"
			on:click={() => change('wifi')}
		>
			<Wifi
				className="{wifi ? 'text-slate-300' : 'text-slate-700'} dark:text-slate-200 w-8 mx-auto"
			/>
		</button>
		<button
			class=" h-12 p-2 mx-auto my-2 rounded-lg flex hover:bg-slate-300 dark:hover:bg-slate-700"
			style="background-color: {bluetooth
				? $accent[$selectedAccent]
				: 'transparent'};width: calc(100%/3.5);"
			on:click={() => change('bluetooth')}
		>
			<Bluetooth
				className="{bluetooth
					? 'text-slate-300'
					: 'text-slate-700'} dark:text-slate-200 w-8 mx-auto"
			/>
		</button>
		<button
			class=" h-12 p-1 mx-auto my-2 rounded-lg flex hover:bg-slate-300 hover:dark:bg-slate-700"
			style="background-color: {flight
				? $accent[$selectedAccent]
				: 'transparent'};width: calc(100%/3.5);"
			on:click={() => change('flight')}
		>
			<Flight
				className="{flight ? 'text-slate-300' : 'text-slate-700'} dark:text-slate-200 w-8 mx-auto"
			/>
		</button>
		<button
			class=" p-1 h-12 mx-auto my-2 rounded-lg flex hover:bg-slate-300 hover:dark:bg-slate-700"
			style="background-color: {battery
				? $accent[$selectedAccent]
				: 'transparent'};width: calc(100%/3.5);"
			on:click={() => change('battery')}
		>
			<BatteryCharge
				className="{battery ? 'text-slate-300' : 'text-slate-700'} dark:text-slate-200 w-8 mx-auto"
			/>
		</button>
		<button
			class=" h-12 p-1 mx-auto my-2 rounded-lg flex hover:bg-slate-300 hover:dark:bg-slate-700"
			style="background-color: {nightlight
				? $accent[$selectedAccent]
				: 'transparent'};width: calc(100%/3.5);"
			on:click={() => change('nightlight')}
		>
			<Moon
				className="{nightlight
					? 'text-slate-300'
					: 'text-slate-700'} dark:text-slate-200 w-8 mx-auto my-auto"
			/>
		</button>
		<button
			class=" h-12 p-1 mx-auto my-2 rounded-lg flex hover:bg-slate-300 hover:dark:bg-slate-700"
			style="background-color: {accessbility
				? $accent[$selectedAccent]
				: 'transparent'};width: calc(100%/3.5);"
			on:click={() => change('accessbility')}
		>
			<Accessbility
				className="{accessbility
					? 'text-slate-300'
					: 'text-slate-700'} dark:text-slate-200 w-8 mx-auto"
			/>
		</button>
		<button
			class=" h-12 p-1 mx-auto my-2 rounded-lg flex hover:bg-slate-300 hover:dark:bg-slate-700"
			style="background-color: {location
				? $accent[$selectedAccent]
				: 'transparent'};width: calc(100%/3.5);"
			on:click={() => change('location')}
		>
			<Geo
				className="{location ? 'text-slate-300' : 'text-slate-700'} dark:text-slate-200 w-8 mx-auto"
			/>
		</button>
		<button
			class=" h-12 p-1 mx-auto my-2 rounded-lg flex hover:bg-slate-300 hover:dark:bg-slate-700"
			style="background-color: {security
				? $accent[$selectedAccent]
				: 'transparent'};width: calc(100%/3.5);"
			on:click={() => change('security')}
		>
			<Shield
				className="{security ? 'text-slate-300' : 'text-slate-700'} dark:text-slate-200 w-8 mx-auto"
			/>
		</button>
		<button
			class=" h-12 p-1 mx-auto my-2 rounded-lg flex hover:bg-slate-300 hover:dark:bg-slate-700"
			style="background-color: {sharing
				? $accent[$selectedAccent]
				: 'transparent'};width: calc(100%/3.5);"
			on:click={() => change('sharing')}
		>
			<Cast
				className="{sharing ? 'text-slate-300' : 'text-slate-700'} dark:text-slate-200 w-8 mx-auto"
			/>
		</button>
	</div>
</div>
