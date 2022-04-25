<script lang="ts">
	import { decode } from 'blurhash';
	import { onMount } from 'svelte';

	export let src: string;
	export let blurhash: string;

	let loaded = false;
	let failed = false;

	const getBlurhash = (blurhash: string) => {
		const pixels = decode(blurhash, 334, 225);
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d')!;
		const imageData = ctx.createImageData(334, 225);
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
	<img class="rounded cursor-pointer hover:opacity-75" {src} alt={src} />
{:else}
	<div id={`blurhash-${blurhash}`} />
{/if}
