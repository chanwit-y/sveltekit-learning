<script lang="ts">
	export let type: 'primary' | 'warning' | 'none' | 'danger';
	export let minWidth: string = 'min-w-80';
	export let isRounded: boolean = false;
	export let handleClick: () => void;
</script>

<button
	on:click={handleClick}
	class={`p-2 rounded m-1 text-sm font-bold tracking-wide shadow-2xl ${
		type === 'primary'
			? `bg-blue-500  hover:bg-blue-800 active:bg-blue-600 focus:ring-blue-500 `
			: type === 'danger'
			? `bg-red-500  hover:bg-red-800 active:bg-red-600 focus:ring-red-500 `
			: type === 'warning'
			? 'bg-yellow-500  hover:bg-yellow-800 active:bg-yellow-600 focus:ring-yellow-500 '
			: ''
	} ${minWidth} ${
		isRounded ? 'rounded-full w-10' : ''
	} focus:outline-none focus:ring ease-in duration-200`}
>
	<slot />
</button>
