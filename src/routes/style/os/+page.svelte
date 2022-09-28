<script lang="ts">
	import terminal from '$lib/icons/terminal.svg';
	import Explorer from '$lib/icons/explorer.svg';
	import Settings from '$lib/icons/settings.svg';
	import VSCode from '$lib/icons/vscode.svg';
	import Globe from '$lib/icons/globe.svg';

	import Window from '$lib/styles/os/partials/window.svelte';
	import TaskbarIcon from '$lib/styles/os/partials/taskbar-icon.svelte';
	import Taskbar from '$lib/styles/os/partials/taskbar.svelte';
	import Iframe from '$lib/styles/os/partials/iframe.svelte';

	import Calendar from '$lib/styles/os/partials/calendar.svelte';

	import { browser } from '$app/environment';
	import Settings_app from '$lib/styles/os/apps/settings.svelte';
	import Browser from '$lib/styles/os/apps/browser.svelte';

	import { isHover, x, y, title } from '$lib/writable/tooltip';
	import {
		zindex,
		show_project,
		show_settings,
		show_terminal,
		show_vs_code,
		show_browser,
		task_stack
	} from '$lib/writable/windows';
	import {
		wallpaper,
		wallpaperSize,
		wallpaperX,
		wallpaperY,
		wallpaperRepeat
	} from '$lib/writable/theme';
	import { beforeUpdate } from 'svelte';
	import { onMount } from 'svelte';
	let isWait = true;

	let terminal_zindex = 0;
	let project_zindex = 0;
	let settings_zindex = 0;
	let vs_code_zindex = 0;
	let browser_zindex = 0;

	let auto_hidden = false;

	beforeUpdate(() => {
		if ($task_stack.length === 0) auto_hidden = false;
		if ($task_stack.length > 0) auto_hidden = true;
	});
	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
	onMount(() => {
		setTimeout(() => {
			isWait = false;
			$show_vs_code = false;
			$task_stack = [];
		}, 1000);
	});
</script>

<div
	class=" relative min-h-screen w-screen bg-slate-100 dark:bg-slate-800 wallpaper overflow-hidden flex flex-col"
	style="background-image: url({$wallpaper}); background-size:{$wallpaperSize}; background-position: {$wallpaperX} {$wallpaperY}; background-repeat: {$wallpaperRepeat}"
>
	<Taskbar />
	<div class=" flex-grow relative ">
		<div class=" absolute bottom-0 w-full h-8 group z-unli">
			<div
				class=" rounded-t-lg px-4 pb-4 bg-slate-400 dark:bg-slate-500 h-12 absolute {auto_hidden
					? '-bottom-20'
					: 'bottom-0'} group-hover:bottom-0 left-1/2 -translate-x-1/2 flex transition-all z-50 pointer-events-auto"
			>
				<TaskbarIcon
					icon={terminal}
					name="Terminal"
					bind:show={$show_terminal}
					bind:zindex={$zindex}
					bind:window_zindex={terminal_zindex}
				/>
				<TaskbarIcon
					icon={Explorer}
					name="Project"
					bind:show={$show_project}
					bind:zindex={$zindex}
					bind:window_zindex={project_zindex}
				/>
				<TaskbarIcon
					icon={Settings}
					name="Settings"
					bind:show={$show_settings}
					bind:zindex={$zindex}
					bind:window_zindex={settings_zindex}
				/>
				<TaskbarIcon
					icon={VSCode}
					name="Visual Studio Code"
					bind:show={$show_vs_code}
					bind:zindex={$zindex}
					bind:window_zindex={vs_code_zindex}
				/>
				<TaskbarIcon
					icon={Globe}
					name="Browser"
					bind:show={$show_browser}
					bind:zindex={$zindex}
					bind:window_zindex={browser_zindex}
				/>
			</div>
		</div>
		<Window
			name="Terminal"
			bind:show={$show_terminal}
			bind:zindex={$zindex}
			bind:window_zindex={terminal_zindex}><h1>terminal</h1></Window
		>
		<Window
			name="Project"
			bind:show={$show_project}
			bind:zindex={$zindex}
			bind:window_zindex={project_zindex}><h1>project</h1></Window
		>
		<Window
			name="Settings"
			h={500}
			w={800}
			bind:show={$show_settings}
			bind:zindex={$zindex}
			bind:window_zindex={settings_zindex}><Settings_app /></Window
		>
		<Window
			name="Visual Studio Code"
			h={500}
			w={800}
			bind:show={$show_vs_code}
			bind:zindex={$zindex}
			bind:window_zindex={vs_code_zindex}
			><Iframe
				title="Visual Studio Code"
				link="https://github1s.com/LLuthfiY/Pixel_Art_With_Palette"
			/></Window
		>
		<Window
			name="Browser"
			h={500}
			w={800}
			bind:show={$show_browser}
			bind:zindex={$zindex}
			bind:window_zindex={browser_zindex}
			><Browser title="Browser" link="https://www.google.com/?igu=1" /></Window
		>
		<Calendar />
	</div>
	{#if $isHover}
		<div
			style="top: {$y}px; left: {$x}px;"
			class="absolute p-2 rounded-lg bg-slate-600 text-white font-semibold opacity-70 z-unli"
		>
			{$title}
		</div>
	{/if}
</div>

<div
	class=" absolute w-screen h-screen bg-slate-800 flex flex-col top-0 opacity-100 {isWait
		? ''
		: '-top-full'} transition-all"
	style="z-index: 999999999999999999999999;"
>
	<h1 class=" text-slate-200 text-5xl mx-auto mt-auto font-mono ">LLuthfiY</h1>
	<p class=" text-slate-200 mx-auto mb-auto">Loading</p>
</div>

<style>
	.z-unli {
		z-index: 999999;
	}
</style>
