import { writable } from 'svelte/store';

export interface Theme {
	mode: 'dark' | 'light';
}

export const themeStore = writable<Theme>({
	mode: 'dark'
});
