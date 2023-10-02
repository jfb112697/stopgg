// src/stores/user.ts
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';

interface User {
	name: string;
	access_token: string;
	refresh_token: string;
}

const initialData: User | null = localStorage.getItem('user')
	? JSON.parse(localStorage.getItem('user')!)
	: null;

export const user: Writable<User | null> = localStorageStore("user", initialData);
