<script lang="ts">
	import {
		darkTheme,
		accent,
		selectedAccent,
		wallpaper,
		wallpaperSize,
		wallpaperX,
		wallpaperY,
		wallpaperRepeat
	} from '$lib/writable/theme';
	import AccentButton from './accent_button.svelte';
	import Moon from '$lib/icons/moon.svelte';
	import Sun from '$lib/icons/sun.svelte';

	const theme = (th: string) => {
		localStorage.theme = th;

		if (th === 'dark') {
			$darkTheme = true;
		}
		if (th === 'light') {
			$darkTheme = false;
		}
		$darkTheme
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};
	let tempWallpaper = $wallpaper;
	const searchImage = () => {
		if (tempWallpaper === '') tempWallpaper = '/woodHouse.jpg';
		$wallpaper = tempWallpaper;
	};
</script>

<div class=" pb-8">
	<div>
		<h2 class=" text-slate-800 dark:text-slate-200 mb-4 ml-2">Theme</h2>
		<button
			class="mx-2 p-2 rounded-lg hover:bg-slate-800 bg-slate-700 text-slate-100"
			on:click={() => {
				theme('dark');
			}}><Moon className=" text-slate-300" />Dark</button
		>
		<button
			class="mx-2 p-2 rounded-lg hover:bg-slate-200 bg-slate-300 text-slate-700"
			on:click={() => {
				theme('light');
			}}><Sun className="text-slate-700" />Light</button
		>
	</div>
	<div class=" my-4">
		<h2 class=" text-slate-800 dark:text-slate-200 mb-4 ml-2">Wallpaper</h2>
		<div
			class=" mb-4"
			style="width:100%; max-width:500px; aspect-ratio: 16/9;background-image:url({$wallpaper});background-size:{$wallpaperSize};background-position: {$wallpaperX} {$wallpaperY}; background-repeat: {$wallpaperRepeat} ;background-color:{$accent[
				$selectedAccent
			]}"
		/>
		<div class=" flex my-2 p-2 rounded-lg w-fit bg-slate-300 dark:bg-slate-700">
			<input
				type="text"
				class=" p-2 rounded-l-lg bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-200 focus-visible:outline-none focus-visible:outline-0"
				bind:value={tempWallpaper}
			/>
			<button
				class=" p-2 rounded-lg text-slate-100 dark:text-slate-900 outline-none outline-0 "
				style="background-color: {$accent[$selectedAccent]};"
				on:click={searchImage}>Search</button
			>
		</div>
		<table>
			<tr>
				<td>
					<span class=" text-slate-800 dark:text-slate-200 mx-2 font-semibold">
						Wallpaper Size
					</span>
				</td>
				<td>
					<select
						name=""
						id="sizeImage"
						class=" p-2 text-slate-800 dark:text-slate-200 bg-slate-300 dark:bg-slate-700"
						bind:value={$wallpaperSize}
					>
						<option value="auto">Auto</option>
						<option value="cover" selected>Cover</option>
						<option value="contain">Contain</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>
					<span class=" text-slate-800 dark:text-slate-200 mx-2 font-semibold">
						Wallpaper Position</span
					>
				</td>
				<td
					><select
						name=""
						class=" p-2 text-slate-800 dark:text-slate-200 bg-slate-300 dark:bg-slate-700 my-1 "
						bind:value={$wallpaperX}
					>
						<option value="left">Left</option>
						<option value="center" selected>Center</option>
						<option value="right">Right</option>
					</select>
					<select
						name=""
						class=" p-2 text-slate-800 dark:text-slate-200 bg-slate-300 dark:bg-slate-700"
						bind:value={$wallpaperY}
					>
						<option value="top">Top</option>
						<option value="center" selected>Center</option>
						<option value="bottom">Bottom</option>
					</select></td
				>
			</tr>
			<tr>
				<td>
					<span class=" text-slate-800 dark:text-slate-200 mx-2 font-semibold"
						>Wallpaper Repeat</span
					>
				</td>
				<td>
					<select
						name=""
						class=" p-2 text-slate-800 dark:text-slate-200 bg-slate-300 dark:bg-slate-700"
						bind:value={$wallpaperRepeat}
					>
						<option value="no-repeat" selected>No Repeat</option>
						<option value="repeat">Repeat</option>
						<option value="repeat-x">Repeat X</option>
						<option value="repeat-y">Repeat Y</option>
						<option value="space">Space</option>
						<option value="round">Round</option>
					</select>
				</td>
			</tr>
		</table>
	</div>

	<div class=" mt-4">
		<h2 class=" text-slate-800 dark:text-slate-200 mb-4 ml-2">Color Accent</h2>
		{#each Object.entries($accent) as [name, color]}
			<AccentButton {color} {name} />
		{/each}
	</div>
</div>
