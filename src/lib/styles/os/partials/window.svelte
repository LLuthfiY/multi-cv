<script lang="ts">
	import Maximize from '$lib/icons/maximize.svelte';
	import Minimize from '$lib/icons/minimize.svelte';
	import Close from '$lib/icons/close.svelte';

	import { accent, selectedAccent } from '$lib/writable/theme';

	export let task_stack: string[] = [];
	export let show = true;
	export let zindex = 0;
	export let window_zindex = 0;
	export let w: number = 300;
	export let h: number = 300;
	export let name = '';
	const min_h = h;
	const min_w = w;
	let x: number = 100;
	let y: number = 100;

	let moving = false;
	let maximize = false;

	function onMouseDown() {
		moving = true;
	}

	function onMouseMove(e: any) {
		if (moving) {
			if (maximize) {
				x = e.clientX - 0.5 * w;
				y = 0;
			}
			x += e.movementX;
			y += e.movementY;
			maximize = false;
		}
	}

	function onMouseUp() {
		moving = false;
	}

	const toggleShow = () => {
		if (show && task_stack[task_stack.length] !== name) task_stack.pop();
		show = !show;
	};

	const increase_zindex = (e: any) => {
		zindex += 1;
		window_zindex = zindex;
		if (show && task_stack.length > 0)
			task_stack.push(task_stack.splice(task_stack.indexOf(name), 1)[0]);
	};

	const maximize_toggle = () => {
		maximize = !maximize;
	};

	function resize(element: any) {
		const right = document.createElement('div');
		right.dataset.direction = 'east';
		right.classList.add('grabber');
		right.classList.add('right');

		const left = document.createElement('div');
		left.dataset.direction = 'west';
		left.classList.add('grabber');
		left.classList.add('left');

		const top = document.createElement('div');
		top.dataset.direction = 'north';
		top.classList.add('grabber');
		top.classList.add('top');

		const bottom = document.createElement('div');
		bottom.dataset.direction = 'south';
		bottom.classList.add('grabber');
		bottom.classList.add('bottom');

		const topLeft = document.createElement('div');
		topLeft.dataset.direction = 'northwest';
		topLeft.classList.add('grabber');
		topLeft.classList.add('top-left');

		const topRight = document.createElement('div');
		topRight.dataset.direction = 'northeast';
		topRight.classList.add('grabber');
		topRight.classList.add('top-right');

		const bottomLeft = document.createElement('div');
		bottomLeft.dataset.direction = 'southwest';
		bottomLeft.classList.add('grabber');
		bottomLeft.classList.add('bottom-left');

		const bottomRight = document.createElement('div');
		bottomRight.dataset.direction = 'southeast';
		bottomRight.classList.add('grabber');
		bottomRight.classList.add('bottom-right');

		const grabbers = [right, left, top, bottom, topLeft, topRight, bottomLeft, bottomRight];

		let active: any = null,
			initialRect: any = null,
			initialPos: any = null;

		grabbers.forEach((grabber) => {
			element.appendChild(grabber);
			grabber.addEventListener('mousedown', onMousedown);
		});

		function onMousedown(event: any) {
			active = event.target;
			const rect = element.getBoundingClientRect();
			const parent = element.parentElement.getBoundingClientRect();

			initialRect = {
				width: rect.width,
				height: rect.height,
				left: rect.left - parent.left,
				right: parent.right - rect.right,
				top: rect.top - parent.top,
				bottom: parent.bottom - rect.bottom
			};
			initialPos = { x: event.pageX, y: event.pageY };
			active.classList.add('selected');
		}

		function onMouseup(event: any) {
			if (!active) return;

			active.classList.remove('selected');
			active = null;
			initialRect = null;
			initialPos = null;
		}

		function onMove(event: any) {
			if (!active) return;

			const direction = active.dataset.direction;
			let delta;

			if (direction.match('east')) {
				delta = event.pageX - initialPos.x;
				w = initialRect.width + delta;
			}

			if (direction.match('west')) {
				delta = initialPos.x - event.pageX;
				x = initialRect.left - delta;
				w = initialRect.width + delta;
			}

			if (direction.match('north')) {
				delta = initialPos.y - event.pageY;
				y = initialRect.top - delta;
				h = initialRect.height + delta;
			}

			if (direction.match('south')) {
				delta = event.pageY - initialPos.y;
				h = initialRect.height + delta;
			}
		}

		window.addEventListener('mousemove', onMove);
		window.addEventListener('mouseup', onMouseup);

		return {
			destroy() {
				window.removeEventListener('mousemove', onMove);
				window.removeEventListener('mousemove', onMousedown);

				grabbers.forEach((grabber) => {
					element.removeChild(grabber);
				});
			}
		};
	}
</script>

<div
	class="  bg-slate-200 dark:bg-slate-800 absolute rounded-lg overflow-hidden flex flex-col border border-slate-600 z-10 animation"
	style="top: {maximize ? '0px' : y + 'px'}; left: {maximize
		? '0px'
		: x + 'px'}; z-index : {window_zindex}; display : {show
		? 'flex'
		: 'none'}; min-height: {min_h}px; min-width: {min_w}px; width: {maximize
		? '100vw'
		: w + 'px'}; height: {maximize ? '100vh' : h + 'px'}  "
	use:resize
	on:mousedown={increase_zindex}
>
	<div class=" flex p-2 select-none cursor-move" on:mousedown={onMouseDown}>
		<div class=" mx-1 p-1 cursor-pointer w-6" on:click={toggleShow}>
			<Close className="" color={$accent[$selectedAccent]} />
		</div>
		<div class=" mx-auto">
			<div class=" text-slate-500 text-center w-full" style="color: {$accent[$selectedAccent]};">
				{name}
			</div>
		</div>
		<div class=" mx-1 p-1 cursor-pointer w-6 " on:click={maximize_toggle}>
			{#if maximize}
				<!-- <SVG src={Minimize} class="text-slate-400 overflow-hidden" /> -->
				<Minimize className="" color={$accent[$selectedAccent]} />
			{:else}
				<!-- <SVG src={Maximize} class="text-slate-400 overflow-hidden" /> -->
				<Maximize className="" color={$accent[$selectedAccent]} />
			{/if}
		</div>
	</div>
	<div class="  flex-grow overflow-hidden">
		<slot />
	</div>
	<!-- <div class=" absolute bg-red-500 w-2 h-2 top-0 left-0 cursor-nw-resize z-10" />
	<div class=" absolute bg-red-500 w-2 h-2 bottom-0 left-0 cursor-sw-resize z-10" />
	<div class=" absolute bg-red-500 w-2 h-2 top-0 right-0 cursor-ne-resize z-10" />
	<div class=" absolute bg-red-500 w-2 h-2 bottom-0 right-0 cursor-se-resize z-10" />
	<div class=" absolute bg-green-500 w-1 h-full z-0 cursor-w-resize " />
	<div class=" absolute bg-green-500 w-1 h-full z-0 right-0 cursor-e-resize" />
	<div class=" absolute bg-green-500 w-full h-1 z-0 cursor-n-resize " />
	<div
		data-dataset.direction="b"
		class=" absolute bg-green-500 w-full h-1 z-0 bottom-0 cursor-s-resize"
		use:resize
	/> -->
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
	.animation {
		transition-duration: 50ms;
	}
	:global(.grabber) {
		position: absolute;
		box-sizing: border-box;
		outline: 0px;
		user-select: none;
	}

	:global(.grabber.right) {
		width: 10px;
		height: 100%;

		right: -5px;
		cursor: e-resize;
	}

	:global(.grabber.left) {
		width: 10px;
		height: 100%;

		left: -5px;
		cursor: w-resize;
	}

	:global(.grabber.top) {
		height: 10px;
		width: 100%;

		top: -5px;
		cursor: n-resize;
	}

	:global(.grabber.bottom) {
		height: 10px;
		width: 100%;

		bottom: -5px;
		cursor: s-resize;
	}

	:global(.grabber.top-left) {
		height: 20px;
		width: 20px;

		top: -10px;
		left: -10px;
		cursor: nw-resize;
		border-radius: 100%;
	}

	:global(.grabber.top-right) {
		height: 20px;
		width: 20px;

		top: -10px;
		right: -10px;
		cursor: ne-resize;
		border-radius: 100%;
	}

	:global(.grabber.bottom-left) {
		height: 20px;
		width: 20px;

		bottom: -10px;
		left: -10px;
		cursor: sw-resize;
		border-radius: 100%;
	}

	:global(.grabber.bottom-right) {
		height: 20px;
		width: 20px;

		bottom: -10px;
		right: -10px;
		cursor: se-resize;
		border-radius: 100%;
	}

	:global(.hide-grabber .grabber) {
		background: transparent !important;
		border: none !important;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
