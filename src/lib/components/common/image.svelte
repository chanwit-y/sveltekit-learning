<script lang="ts">
	import { decode } from 'blurhash';
	import { onMount } from 'svelte';

	export let src: string;
	export let blurhash: string;
	export let width: number = 334;
	export let height: number = 225;

	let loaded = false;
	let failed = false;

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
	<img class="rounded h-56 cursor-pointer hover:opacity-75" {src} alt={src} />
{:else}
	<div class="rounded h-56" id={`blurhash-${blurhash}`} />
{/if}
