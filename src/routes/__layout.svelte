<script>
	import AppBar from '$lib/layouts/app-bar.svelte';

	import '../app.css';
</script>

<div class="dark">
	<AppBar />
	<div class="bg-gray-100 h-screen">
		<slot />
	</div>
</div>
