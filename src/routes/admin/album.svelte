<script context="module">
	export async function load() {
		const res = await FireStore.getAll('album');

		return {
			props: {
				albums: res
			}
		};
	}
</script>

<script lang="ts">
	import dayjs from 'dayjs';
	import { PlusSquareIcon } from 'svelte-feather-icons';
	import Card from '$lib/components/common/card.svelte';
	import Modal from '$lib/components/common/modal.svelte';
	import Image from '$lib/components/common/image.svelte';
	import { FireStore } from '$lib/data/firebase/firestore';

	export let albums: any[] = [];

	let openAddModal = false;
</script>

<div class="p-6 px-10">
	{openAddModal}
	<div class="flex justify-between">
		<h1 class="text-2xl font-bold tracking-wide">Album</h1>
		<button on:click={() => (openAddModal = !openAddModal)}>
			<PlusSquareIcon />
		</button>
	</div>

	<div class="grid grid-cols-4 gap-2 my-4">
		{#each albums as album}
			<Card>
				<Image src={album.imageUrl} blurhash={album.blurhash} width={285} />
				<div class="flex justify-between text-sm text-gray-500 mt-2">
					<span class="font-bold">{album.name}</span>
					<span>{dayjs(album.date.toDate().toDateString()).format('DD-MM-YYYY')}</span>
				</div>
				<div class="truncate">
					<span class="text-xs h-12">{album.description}</span>
				</div>
			</Card>
		{/each}
	</div>
</div>

<!-- add event handle open -->
<Modal headerText="Add Album" open={openAddModal}>
	<div>Hi</div>
</Modal>
