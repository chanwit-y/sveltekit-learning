<script lang="ts">
	import { SaveIcon, TrashIcon, RefreshCcwIcon } from 'svelte-feather-icons';
	import Button from '$lib/components/common/button.svelte';
	import ImageUpload from '$lib/components/common/imageUpload.svelte';
	import TextAear from '$lib/components/common/textAear.svelte';
	import TextField from '$lib/components/common/textField.svelte';
	import TagField from '$lib/components/common/tagField.svelte';

	let image: File;
	let name: string = '';
	let tags: string[] = [];
	let description: string = '';

	const handleSave = () => {
		console.log({
			image,
			name,
			tags,
			description
		});
	};
</script>

<div class="flex flex-col">
	<div class="flex">
		<div class="mr-2 ml-1 my-1 w-2/5">
			<ImageUpload hiddenUpload={false} on:value={(v) => (image = v.detail)} />
		</div>
		<div class="flex flex-col w-3/5">
			<TextField label="Name" on:value={(v) => (name = v.detail)} />
			<TagField label="# Tag" on:values={(t) => (tags = t.detail)} />
		</div>
	</div>

	<TextAear label="Description" on:value={(v) => (description = v.detail)} />

	<div class="flex justify-end">
		<Button type="primary" minWidth="" isRounded={true} handleClick={handleSave}>
			<div class="flex justify-center items-center gap-1">
				<SaveIcon class="w-5" />
			</div>
		</Button>
		<Button type="warning" minWidth="" isRounded={true} handleClick={() => {}}>
			<div class="flex justify-center items-center gap-1">
				<RefreshCcwIcon class="w-5" />
			</div>
		</Button>
		<Button type="danger" minWidth="" isRounded={true} handleClick={() => {}}>
			<div class="flex justify-center items-center gap-1">
				<TrashIcon class="w-5" />
			</div>
		</Button>
	</div>
</div>
