<script lang="ts">
	import AppBar from '$lib/components/layouts/app-bar.svelte';
	import { themeStore } from '$lib/data/stores/theme';
	import { get } from 'svelte/store';

	import '../app.css';

	let mode = get(themeStore).mode;
	themeStore.subscribe(t => (mode = t.mode));
</script>

<div class={mode}>
	<AppBar />
	<main class="bg-gray-100 h-screen">
		<slot />
	</main>
</div>
