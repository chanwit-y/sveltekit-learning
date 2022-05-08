<script context="module">
	export async function load() {
		const res = await FireStore.getAll('album');

		return {
			props: {
				photos: res
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
	import Info from './info.svelte';
import Modal2 from '$lib/components/common/modal.svelte';

	export let photos: any[] = [];

	let openAddModal = false;
</script>

<div class="p-6 px-10">
	<div class="flex justify-between">
		<h1 class="text-2xl font-bold tracking-wide">Photo</h1>
		<button on:click={() => (openAddModal = !openAddModal)}>
			<PlusSquareIcon />
		</button>
	</div>

	<div class="grid grid-cols-4 gap-2 my-4">
		{#each photos as photo}
			<Card>
				<Image src={photo.imageUrl} blurhash={photo.blurhash} width={285} canPerview={false} />
				<div class="flex justify-between text-sm text-gray-500 mt-2">
					<span class="font-bold">{photo.name}</span>
					<span class="text-xs"
						>{dayjs(photo.date.toDate().toDateString()).format('DD-MM-YYYY')}</span
					>
				</div>
				<div class="truncate">
					<span class="text-xs h-12">{photo.description}</span>
				</div>
			</Card>
		{/each}
	</div>
</div>

<Modal headerText="Add Photo" open={openAddModal} on:open={(e) => (openAddModal = e.detail)}>
	<Info />
</Modal>

<!-- <Modal2 open={openAddModal} on:open={(e) => (openAddModal = e.detail)} /> -->
