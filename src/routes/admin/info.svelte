<script lang="ts">
	import Button from '$lib/components/common/button.svelte';
	import TextField from '$lib/components/common/textField.svelte';
</script>

<div class="flex flex-col">
	<div class="flex">
		<div class="rounded bg-white mr-2 ml-1 my-1 w-1/3" />
		<div class="flex flex-col w-2/3">
			<TextField label="Name" />
			<TextField label="Date" />
			<TextField label="location" />
		</div>
	</div>

	<TextField label="description" />
	<div class="flex justify-end">
		<Button type="primary" text="Add" />
	</div>
</div>
