<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { XCircleIcon } from 'svelte-feather-icons';

	export let label: string;

	let inputRef: HTMLInputElement;
	let tag: string = '';
	let tags: string[] = [];

	let dispatch = createEventDispatcher();

	const addTags = () => {
		if (tag !== '') {
			tags = [...tags, tag];
			tag = '';
		}
	};

	$: tags, dispatch('values', tags);
</script>

<div class="flex flex-col m-1" on:click={() => inputRef.focus()}>
	<label class="text-xs text-gray-200 mb-1" for="input">{label}</label>
	<div class="flex items-start flex-wrap gap-1 rounded p-2 text-black bg-white min-h-24">
		{#each tags as tag}
			<span
				class="flex items-center text-xs px-1 gap-1 border-2 border-gray-500 rounded-xl hover:bg-gray-100"
			>
				<span>{tag}</span>
				<button on:click={() => (tags = tags.filter((f) => f !== tag))}>
					<XCircleIcon class="w-4" />
				</button>
			</span>
		{/each}

		<input
			bind:this={inputRef}
			bind:value={tag}
			on:blur={() => addTags()}
			on:keypress={(e) => {
				if (e.key === 'Enter') addTags();
			}}
			class="ml-1 w-auto outline-0"
			type="text"
		/>
	</div>
</div>
