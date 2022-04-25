<script lang="ts">
	import { tick } from 'svelte';

	let count = 0;
	let input: HTMLInputElement;
	let show = false;
	// let text = '';

	$: console.log(count);
	$: double = count * 2;
</script>

<nav class="flex justify-between items-center sticky z-30 top-0 bg-white h-16 dark:bg-slate-600">
	<div class="font-bold mx-4 text-2xl tracking-widest dark:text-white">Photo.log</div>
	<div>
		{#if show}
			<input bind:this={input} />
		{/if}
		{count}
		<button
			on:click={async () => {
				count++;
				console.log('before tick', double);
				// tick().then(() => {
				// 	console.log('after tick', double);
				// });
				await tick(); // tick() will do state changed
				console.log('2 after tick', double);
				// text = "reset"
				// await tick()
				// input.focus();
			}}>test</button
		>
	</div>
	<!-- <div>aa</div> -->
</nav>
