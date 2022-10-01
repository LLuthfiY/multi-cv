<script lang="ts">
	import { globalCommand } from '$lib/writable/terminal';

	const scope = { data: '4444' };
	let result = '';
	const call = (msg: string) => {
		let logs: any[] = [];
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
			data.result = eval(msg);
		} catch (err: any) {
			console.log(err);
			data.error = err.toString();
		}
		return [data, logs];
	};
	const change = (el: any) => {
		const msg = el.target.value;
		result = JSON.stringify(call(msg), null, 2);
	};
</script>

<div class="">
	<textarea name="" id="" cols="30" rows="10" on:change={change} />
	<pre>{result}</pre>
</div>
