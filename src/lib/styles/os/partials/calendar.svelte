<script lang="ts">
	import Caret from '$lib/icons/caret.svelte';
	import CaretFill from '$lib/icons/caretFill.svelte';
	import { accent, selectedAccent } from '$lib/writable/theme';
	import { calendar } from '$lib/writable/systemUI';
	import { get_spread_update } from 'svelte/internal';
	import { get } from 'svelte/store';

	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	const current_date = new Date();

	let firstWeeklyDay = 0;
	let allDays: Date[] = [];
	let date = new Date();

	const editDate = (year: number, month: number, d: number) => {
		date = new Date(
			date.setFullYear(date.getFullYear() + year, date.getMonth() + month, date.getDate() + d)
		);
		allDays = getAllDaysInMonth(date.getFullYear(), date.getMonth());
		firstWeeklyDay = allDays[0].getDay();
	};
	const getAllDaysInMonth = (year: number, month: number) => {
		return Array.from(
			{ length: new Date(year, month + 1, 0).getDate() },
			(_, i) => new Date(year, month, i + 1)
		);
	};

	const resetDate = () => {
		date = new Date();
		allDays = getAllDaysInMonth(date.getFullYear(), date.getMonth());
		firstWeeklyDay = allDays[0].getDay();
	};

	allDays = getAllDaysInMonth(date.getFullYear(), date.getMonth());
	firstWeeklyDay = allDays[0].getDay();
</script>

<div
	class=" absolute rounded-lg {$calendar
		? 'right-2'
		: '-right-full'} top-2 w-80 bg-slate-200 dark:bg-slate-800 transition-all outline outline-1"
	style="z-index: 9999999; outline-color: {$accent[$selectedAccent]}"
>
	<div class=" p-2 flex" style="color : {$accent[$selectedAccent]}">
		<div class="my-auto " on:click={() => editDate(-1, 0, 0)}>
			<CaretFill
				rotate={180}
				className="p-2 my-auto cursor-pointer rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
			/>
		</div>

		<div class=" my-auto ml-2 mr-auto" on:click={() => editDate(0, -1, 0)}>
			<Caret
				rotate={180}
				className="p-2 my-auto cursor-pointer rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
			/>
		</div>
		<span
			class="p-2 rounded-lg cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-600 "
			on:click={resetDate}>{month[date.getMonth()]} {date.getFullYear()}</span
		>
		<div class=" my-auto mr-2 ml-auto" on:click={() => editDate(0, 1, 0)}>
			<Caret
				className="p-2 my-auto cursor-pointer rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
			/>
		</div>
		<div class=" my-auto" on:click={() => editDate(1, 0, 0)}>
			<CaretFill
				className="p-2 my-auto cursor-pointer rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600"
			/>
		</div>
	</div>
	<div class="flex px-2 font-semibold text-slate-800 dark:text-slate-200 justify-evenly">
		{#each days as day}
			<span class=" text-center" style="width:calc(100%/7)">{day}</span>
		{/each}
	</div>
	<div class=" flex flex-wrap p-2 justify-start">
		{#each Array.from({ length: firstWeeklyDay }, () => 0) as blank}
			<div class=" p-3 rounded-lg" style="width: calc(100%/7);" />
		{/each}
		{#each allDays as day}
			<div
				class=" p-3 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 flex cursor-pointer"
				style="width: calc(100%/7); {day.getFullYear() === current_date.getFullYear() &&
				day.getMonth() === current_date.getMonth() &&
				day.getDate() === current_date.getDate()
					? `background-color: ${$accent[$selectedAccent]}`
					: ''}"
			>
				<span
					class=" text-center m-auto  {day.getFullYear() === current_date.getFullYear() &&
					day.getMonth() === current_date.getMonth() &&
					day.getDate() === current_date.getDate()
						? 'text-slate-200 dark:text-slate-800'
						: 'text-slate-800 dark:text-slate-200'}"
				>
					{day.getDate()}
				</span>
			</div>
		{/each}
	</div>
</div>
