<script lang="ts">
	import { fade } from 'svelte/transition';
	import { FireStore } from '$lib/data/firebase/firestore';
	import { ImageIcon, UploadIcon, Trash2Icon } from 'svelte-feather-icons';

	export let hiddenUpload = false;

	let files: FileList;
	let fileInput: HTMLInputElement;
	let base64: string | ArrayBuffer | null | undefined;

	const getBase64 = (image: File) => {
		const reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			base64 = e?.target?.result;
		};
	};

	$: files && getBase64(files[0]);
	$: console.log(fileInput);
</script>

{#if !base64}
	<div
		on:click={() => {
			fileInput.click();
		}}
		in:fade={{ duration: 2000 }}
		class="p-1 w-full h-full text-slate-800  border-4 border-slate-300 rounded border-dashed cursor-pointer hover:opacity-80"
	>
		<div class="flex flex-col justify-center items-center rounded bg-white w-full h-full ">
			<ImageIcon class="w-4/5 h-4/5 text-slate-600" />
			<div class="text-xs">
				<span>Click hear for </span>
				<span class=" text-blue-500 font-bold">browse</span>
				<input
					class="hidden"
					bind:this={fileInput}
					bind:files
					type="file"
					name="mainPicture"
					accept=".png,.jpg"
					id="mainPicture"
				/>
			</div>
		</div>
	</div>
{:else}
	<div
		class="relative w-full h-full text-slate-800  border-4 border-slate-300 rounded border-dashed"
		in:fade={{ duration: 2000 }}
>
		<img class="w-full h-full p-1 rounded " src={base64.toString()} alt="preview" />
		<div class="flex gap-2 absolute bottom-0 right-0 p-1">
			<button
				class="rounded-full bg-red-800 hover:bg-red-600 text-white text-xs m-2 p-1 border-2 border-white shadow-md"
				on:click={() => (base64 = undefined)}
			>
				<Trash2Icon class="w-4 h-4" />
			</button>
			{#if !hiddenUpload}
				<button
					class="rounded-full bg-blue-600 text-white text-xs m-2"
					on:click={async () => {
						const result = await FireStore.uploadFile('01', 'beer', files[0]);
						console.log(result);
					}}
				>
					<UploadIcon />
				</button>
			{/if}
		</div>
	</div>
{/if}
