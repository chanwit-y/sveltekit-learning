<script lang="ts">
	import { get } from 'svelte/store';
	import { themeStore } from '$lib/data/stores/theme';
	import {
		DatabaseIcon,
		FolderIcon,
		ImageIcon,
		SettingsIcon,
		MoonIcon,
		SunIcon
	} from 'svelte-feather-icons';

	let open = false;
	let mode = get(themeStore).mode;
	themeStore.subscribe((t) => (mode = t.mode));

	const handleThemeMode = (mode: 'dark' | 'light') => {
		themeStore.set({
			mode: mode
		});
	};
</script>

<nav
	class="flex justify-between items-center sticky z-30 top-0 bg-white h-16 dark:bg-slate-600 dark:text-white"
>
	<a class="font-bold mx-4 text-2xl tracking-widest" href="/">Photo.log</a>
	<div class="flex gap-5 mx-6">
		{#if mode === 'dark'}
			<button on:click={() => handleThemeMode('light')}>
				<SunIcon />
			</button>
		{:else}
			<button on:click={() => handleThemeMode('dark')}>
				<MoonIcon />
			</button>
		{/if}
		<button on:click={() => (open = !open)}>
			<DatabaseIcon />
		</button>
		{#if open}
			<div class="absolute top-0 left-0 h-screen w-screen" on:click={() => (open = false)} />
			<div class="absolute top-14 right-14 w-52 h-22 bg-white dark:bg-slate-400 rounded shadow-md text-gray-600 p-3">
				<div class="w-4 h-4 bg-white dark:bg-slate-400 rotate-45 absolute right-4 top--5" />
				<a
					class="flex gap-2 my-1 p-2 rounded dark:hover:bg-slate-300 cursor-pointer"
					href="/admin/photo"
					on:click={() => (open = false)}
				>
					<ImageIcon />
					<span class="mx-1">Photo</span>
				</a>
				<!-- <div class="flex gap-2 my-1 p-2 rounded dark:hover:bg-slate-300 cursor-pointer">
					<ImageIcon />
					<span class="mx-1">Photo</span>
				</div> -->
			</div>
		{/if}
		<SettingsIcon />
	</div>
</nav>
