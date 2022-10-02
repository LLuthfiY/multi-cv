<script lang="ts">
	import ChevronL from '$lib/icons/chevronL.svelte';
	import ChevronR from '$lib/icons/chevronR.svelte';
	import { globalCommand, lines } from '$lib/writable/terminal';
	import { accent, darkTheme } from '$lib/writable/theme';
	import JSONTree from 'svelte-json-tree';

	export let currentLine = '';
	let loggings: any[] = [];
	let inp = '';
	let done = false;

	// const scope = { data: '4444' };
	let result: any = '';
	const call = (msg: string) => {
		let logs: any = [];
		const regex_logs = /console\.log/g;
		msg = msg.replaceAll(regex_logs, 'logs.push');
		const data = {
			expression: msg,
			result: '',
			error: ''
		};
		try {
			// const fun = new Function(`return (${msg});`);
			// data.result = JSON.stringify(fun.call(scope), null, 2);

			data.result = eval($globalCommand + '\n' + msg);
			const logs_push_regex = /logs\.push\(.*\)/g;
			const regConst = /const.*=/g;
			const regLet = /let.*=/g;
			const regVar = /var.*=/g;
			const regChange = /[^!=]=[^=]/g;
			msg = msg.replaceAll(logs_push_regex, '');
			if (regConst.test(msg) || regLet.test(msg) || regVar.test(msg) || regChange.test(msg))
				$globalCommand += '\n' + msg + '\nundefined\n';
		} catch (err: any) {
			data.error = err.toString();
		}
		return [data, logs];
	};
	const change = (el: any) => {
		const msg = el.target.value;
		[result, loggings] = call(msg);
		// console.log(result.result === 1, loggings, 'ini');

		if (result.result === 1 && loggings.length > 0) {
			result.result = '';
		}
		if (result.error !== '') result.result = result.error;

		result = result.result;
	};
	const onInput = (el: any) => {
		inp = el.target.value;
	};
	const onKeyPress = (e: any) => {
		if (!e.shiftKey && e.key === 'Enter') {
			e.preventDefault();
			change(e);
			$lines = [...$lines, ''];
			done = true;
		}
	};
</script>

<div class="">
	<div class=" flex">
		<ChevronR
			className=" text-slate-700 dark:text-slate-200 text-base bg-transparent opacity-50 "
		/>
		<div class=" flex-grow h-fit relative">
			<p class=" text-transparent whitespace-pre-wrap font-mono">{inp + ' '}</p>
			<textarea
				on:keypress={onKeyPress}
				on:input={onInput}
				class=" absolute font-mono top-0 left-0 outline-0 outline-none w-full bg-transparent text-slate-700 dark:text-slate-200 resize-none h-full"
				disabled={done}
				autofocus
			/>
			{#each loggings as log}
				{#if typeof log === 'object'}
					<div
						class=" text-slate-700 dark:text-slate-200 flex align-middle"
						style="--json-tree-font-size: 1rem;
						--json-tree-string-color : {$accent['red']} ;
						--json-tree-label-color:{$accent['pink']}; --json-tree-boolean-color: {$accent[
							'blue'
						]}; --json-tree-number-color: {$accent['blue']}; --json-tree-property-color: {$darkTheme
							? $accent['white']
							: $accent['black']} "
					>
						<JSONTree value={log} />
					</div>
				{:else}
					<div class="text-slate-700 dark:text-slate-200">{log}</div>
				{/if}
			{/each}
		</div>
	</div>
	<div class=" flex ">
		{#if result !== ''}
			<ChevronL
				className=" top-2 text-slate-700 dark:text-slate-200 text-base bg-transparent opacity-50 "
			/>
		{/if}
		{#if typeof result === 'object'}
			<div
				class=" text-slate-700 dark:text-slate-200 flex align-middle"
				style="--json-tree-font-size: 1rem;
				--json-tree-string-color : {$accent['red']} ;
				--json-tree-label-color:{$accent['pink']}; --json-tree-boolean-color: {$accent[
					'blue'
				]}; --json-tree-number-color: {$accent['blue']}; --json-tree-property-color: {$darkTheme
					? $accent['white']
					: $accent['black']} "
			>
				<JSONTree value={result} />
			</div>
		{:else}
			<div class=" dark:text-slate-200 text-slate-700">{result}</div>
		{/if}
	</div>
</div>
