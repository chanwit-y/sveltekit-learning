<script lang="ts">
	export let label: string;
</script>

<div class="flex flex-col m-1">
	<label class="text-xs text-gray-200 mb-1" for="input">{label}</label>
	<textarea class="rounded p-2 dark:text-black" cols="30" rows="5" />
</div>
