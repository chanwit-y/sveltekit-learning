<script lang="ts">
	import { PlusSquareIcon } from 'svelte-feather-icons';
	import Card from '$lib/components/common/card.svelte';
	import Modal from '$lib/components/common/modal.svelte';

	let albums = [1, 2, 3, 4, 5, 6, 7, 8];
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

	<div class="grid grid-cols-4 gap-4 my-4">
		{#each albums as album}
			<Card />
		{/each}
	</div>
</div>

<!-- add event handle open -->
<Modal headerText="Add Album" open={openAddModal}>
	<div>Hi</div>
</Modal>
