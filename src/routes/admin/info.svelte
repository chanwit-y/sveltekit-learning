<script lang="ts">
	import Button from '$lib/components/common/button.svelte';
	import ImageUpload from '$lib/components/common/imageUpload.svelte';
	import TextAear from '$lib/components/common/textAear.svelte';
	import TextField from '$lib/components/common/textField.svelte';
</script>

<div class="flex flex-col">
	<div class="flex">
		<div class="mr-2 ml-1 my-1 w-2/5">
			<ImageUpload hiddenUpload={true} />
		</div>
		<div class="flex flex-col w-3/5">
			<TextField label="Name" />
			<TextField label="Date" />
			<TextField label="# tag" />
		</div>
	</div>

	<TextAear label="description" />

	<div class="flex justify-end">
		<Button type="primary" text="Add" />
		<Button type="danger" text="Delete" />
	</div>
</div>
