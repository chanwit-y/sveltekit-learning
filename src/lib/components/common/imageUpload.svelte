<script lang="ts">
	import { FireStore } from '$lib/data/firebase/firestore';

	import { UploadCloudIcon } from 'svelte-feather-icons';

	let files: FileList;
	let fileInput: HTMLInputElement;

	$: console.log(fileInput);
	// $: FireStore.uploadFile("01", "beer", files[0])
</script>

<div
	class="p-1 w-full h-full text-slate-800  border-4 border-slate-300 rounded border-dashed cursor-pointer hover:opacity-80"
>
	<div class="flex flex-col justify-center items-center rounded bg-white w-full h-full ">
		<UploadCloudIcon class="w-4/5 h-4/5 text-slate-600" />
		<div class=" text-xs">
			<span>Click hear for </span>
			<span class=" text-blue-500 font-bold">browse</span>
			<input
				bind:this={fileInput}
				bind:files
				type="file"
				name="mainPicture"
				accept=".png,.jpg"
				id="mainPicture"
			/>
			<button
				on:click={async () => {
					console.log(files[0]);
					const result = await FireStore.uploadFile('01', 'beer', files[0]);
					console.log(result);
					
				}}>upload</button
			>
		</div>
	</div>
</div>
