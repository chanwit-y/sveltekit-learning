<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import { XCircleIcon } from 'svelte-feather-icons';

	export let headerText = '';
	export let open = false;

	const dispatch = createEventDispatcher();
	const pageTransitionDuration = 150;

	$: open, dispatch('open', open);

	const handleClose = () => (open = false);
</script>

{#if open}
	<div
		id="defaultModal"
		tabindex="-1"
		class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 w-full md:inset-0 h-modal md:h-full "
	>
		<div
			class="absolute top-0 right-0 left-0 w-full md:inset-0 h-modal md:h-full z-40 dark:bg-slate-400 cursor-pointer opacity-80"
			in:fly={{ x: -5, duration: pageTransitionDuration, delay: pageTransitionDuration }}
			out:fly={{ x: 5, duration: pageTransitionDuration }}
			on:click|preventDefault={handleClose}
		/>
		<div
			class="relative p-4  max-w-2xl  md:h-auto z-50 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  bg-white  dark:bg-slate-600 h-auto  text-black rounded shadow-2xl w-2/5 "
			in:fly={{ x: -5, duration: pageTransitionDuration, delay: pageTransitionDuration }}
			out:fly={{ x: 5, duration: pageTransitionDuration }}
		>
			<div class="flex justify-between h-5 p-2 mb-5 font-bold tracking-wider dark:text-white">
				{headerText}
				<button on:click|preventDefault={handleClose}>
					<XCircleIcon />
				</button>
			</div>
			<hr class="border-grey mb-2" />
			<slot />
		</div>
	</div>
{/if}
