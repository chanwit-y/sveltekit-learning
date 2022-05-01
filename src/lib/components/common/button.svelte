<script lang="ts">
	export let text: string;
	export let type: 'primary' | 'none' | 'danger';

</script>

<button
	class={`p-2 rounded m-1 text-sm min-w-80  ${
		type === 'primary'
			? `bg-blue-900  hover:bg-blue-800 active:bg-blue-700 focus:ring-blue-300 `
			: type === 'danger'
			? `bg-red-500  hover:bg-red-600 active:bg-red-700 focus:ring-red-300 `
			: ''
	} focus:outline-none focus:ring ease-in duration-200`}>{text}</button
>
