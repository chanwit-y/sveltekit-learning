<script lang="ts">
	import { createEventDispatcher } from "svelte";
	export let label: string;

	let value: string;
	let dispatch = createEventDispatcher();

	$: value, dispatch("value", value);
</script>

<div class="flex flex-col m-1">
	<label class="text-xs text-gray-200 mb-1" for="input">{label}</label>
	<textarea bind:value={value} class="rounded p-2 dark:text-black" cols="30" rows="5" />
</div>
