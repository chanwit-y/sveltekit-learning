<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import { XCircleIcon } from 'svelte-feather-icons';
	export let headerText = '';
	export let open = false;

	const dispatch = createEventDispatcher();
	const pageTransitionDuration = 150;

	$: open, dispatch('open',  open);

	const handleClose = () => (open = false);
</script>

{#if open}
	<div
		class="absolute top-0 left-0 opacity-80 z-40 w-screen h-screen bg-slate-100 cursor-pointer dark:bg-slate-400"
		in:fly={{ x: -5, duration: pageTransitionDuration, delay: pageTransitionDuration }}
		out:fly={{ x: 5, duration: pageTransitionDuration }}
		on:click|preventDefault={handleClose}
	/>
	<div
		class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white w-80 dark:bg-slate-600 h-auto z-50 text-black rounded"
		in:fly={{ x: -5, duration: pageTransitionDuration, delay: pageTransitionDuration }}
		out:fly={{ x: 5, duration: pageTransitionDuration }}
	>
		<div class="flex justify-between h-5 p-2 mb-5 font-bold tracking-wider dark:text-white">
			{headerText}
			<button on:click|preventDefault={handleClose}>
				<XCircleIcon />
			</button>
		</div>
		<hr class="border-black" />
		<div class="px-4 my-2 dark:text-white">
			<slot />
		</div>
	</div>
{/if}
