<script lang="ts">
	import { get } from 'svelte/store';
	import { themeStore } from '$lib/data/stores/theme';
	import { SettingsIcon, MoonIcon, SunIcon } from 'svelte-feather-icons';

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
	<div class="font-bold mx-4 text-2xl tracking-widest ">Photo.log</div>
	<div class="flex gap-4 mx-6">
		{#if mode === 'dark'}
			<button on:click={() => handleThemeMode('light')}>
				<SunIcon />
			</button>
		{:else}
			<button on:click={() => handleThemeMode('dark')}>
				<MoonIcon />
			</button>
		{/if}
		<SettingsIcon />
	</div>
</nav>
