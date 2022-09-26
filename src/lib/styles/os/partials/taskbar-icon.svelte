<script lang="ts">
	import { isHover, x, y, title } from '$lib/writable/tooltip';
	export let icon = '';
	export let name = '';
	export let show = false;
	export let zindex = 0;
	export let window_zindex = 0;
	export let task_stack: string[] = [];

	function mouseOver(event: any) {
		$isHover = true;
		$x = event.pageX;
		$y = event.pageY - 50;
		$title = name;
	}
	function mouseMove(event: any) {
		$x = event.pageX;
		$y = event.pageY - 50;
	}
	function mouseLeave() {
		$isHover = false;
	}

	const toggleShow = () => {
		if (!task_stack.some((w: any) => w === name)) task_stack.push(name);
		if (task_stack[task_stack.length - 1] === name || !show) show = !show;
		if (show && task_stack.length > 0)
			task_stack.push(task_stack.splice(task_stack.indexOf(name), 1)[0]);
		if (!show) task_stack.pop();
		zindex += 1;
		window_zindex = zindex;
	};
</script>

<div
	class="mx-2 icon-container w-12 relative cursor-pointer"
	on:mouseover={mouseOver}
	on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}
	on:focus={mouseOver}
	on:click={toggleShow}
>
	<img src={icon} alt={name} class=" w-12 mb-0 bottom-0 absolute transition-all drop-shadow-lg" />
</div>

<style>
	.icon-container:hover img {
		bottom: 1rem;
	}
</style>
