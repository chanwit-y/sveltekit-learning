<script lang="ts">
	import { decode } from 'blurhash';
	import { fade } from 'svelte/transition';
	import { onMount, createEventDispatcher } from 'svelte';
	import { XCircleIcon } from 'svelte-feather-icons';

	export let src: string;
	export let blurhash: string;
	export let width: number = 334;
	export let height: number = 225;

	const pageTransitionDuration = 150;
	// let dispatch = createEventDispatcher();

	let loaded = false;
	let failed = false;
	let open = false;

	// $: open, dispatch('open', open);

	const getBlurhash = (blurhash: string) => {
		const pixels = decode(blurhash, width, height);
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d')!;
		const imageData = ctx.createImageData(width, height);
		canvas.className = 'rounded h-56 w-80';
		imageData.data.set(pixels);
		ctx.putImageData(imageData, 0, 0);
		document.getElementById(`blurhash-${blurhash}`)?.append(canvas);
	};

	onMount(() => {
		getBlurhash(blurhash);
		const img = new Image();
		img.src = src;

		img.onload = () => {
			loaded = true;
		};
		img.onerror = () => {
			failed = true;
		};
	});
</script>

{#if loaded}
	<img
		on:click={() => (open = !open)}
		class={`rounded h-56 hover:opacity-75 cursor-pointer `}
		{src}
		alt={src}
	/>
	{#if open}
		<!-- <div class="bg-bottom bg-gray-400 bg-no-repeat h-48 w-64" style="background-image: url('https://tailwind.build/placeholders/pictures/office.jpg'); background-size: 12rem 8rem"></div> -->
		<!-- .bg-bottom {
			background-position: bottom;
		      } -->
		<div
			class="absolute top-0 left-0 opacity-80 z-40 w-screen h-screen bg-slate-100 cursor-pointer dark:bg-slate-400"
			in:fade={{ duration: pageTransitionDuration, delay: pageTransitionDuration }}
			out:fade={{ duration: pageTransitionDuration }}
			on:click|preventDefault={() => (open = false)}
		/>
		<div
			class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white  dark:bg-slate-600 z-50 text-black rounded shadow-2xl "
			in:fade={{ duration: pageTransitionDuration, delay: pageTransitionDuration }}
			out:fade={{ duration: pageTransitionDuration }}
		>
			<button
				class="absolute top-0 right-0 m-2 rounded-full bg-black text-white"
				on:click|preventDefault={() => (open = false)}
			>
				<XCircleIcon />
			</button>
			<img class="rounded-md" on:click={() => (open = !open)} {src} alt={src} />
		</div>
	{/if}
{:else}
	<div class="rounded h-56" id={`blurhash-${blurhash}`} />
{/if}
