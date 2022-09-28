<script lang="ts">
	import terminal from '$lib/icons/terminal.svg';
	import Explorer from '$lib/icons/explorer.svg';
	import Settings from '$lib/icons/settings.svg';

	import Window from '$lib/styles/os/partials/window.svelte';
	import TaskbarIcon from '$lib/styles/os/partials/taskbar-icon.svelte';

	import { browser } from '$app/environment';
	import Settings_app from '$lib/styles/os/apps/settings.svelte';

	import { isHover, x, y, title } from '$lib/writable/tooltip';
	import {
		zindex,
		show_project,
		show_settings,
		show_terminal,
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

	let terminal_zindex = 0;
	let project_zindex = 0;
	let settings_zindex = 0;

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
</script>

<div
	class=" relative min-h-screen w-screen bg-slate-100 dark:bg-slate-800 wallpaper overflow-hidden flex flex-col"
	style="background-image: url({$wallpaper}); background-size:{$wallpaperSize}; background-position: {$wallpaperX} {$wallpaperY}; background-repeat: {$wallpaperRepeat}"
>
	<div class=" h-4 bg-slate-800" />
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

<style>
	.z-unli {
		z-index: 999999;
	}
</style>
