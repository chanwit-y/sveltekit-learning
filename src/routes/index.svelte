<script lang="ts">
	import { FireStore } from '$lib/data/firebase/firestore';
	import { onMount } from 'svelte';
	import Image from '$lib/components/common/image.svelte';

	let items: any[] = [];

	const getPhoto = async () => {
		items = await FireStore.getAll('photo');
	};

	onMount(async () => {
		await getPhoto();
	});
</script>

{#if items.length !== 0}
	<div id="photo-container" class="p-4 grid gap-4 grid-cols-4">
		{#each items as item}
			<Image src={item.imageUrl} blurhash={item.blurhash} />
		{/each}
	</div>
{:else}
	<div class="flex flex-col h-screen my-auto items-center justify-center pb-20">
		<span class="text-center text-xl font-bold text-gray-500 tracking-wider">Loading...</span>
	</div>
{/if}
