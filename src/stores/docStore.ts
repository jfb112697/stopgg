import { writable } from 'svelte/store';
import { doc, onSnapshot } from 'firebase/firestore';
import type { Firestore, DocumentReference, DocumentData } from 'firebase/firestore';

interface DocStoreOptions<T> {
	startWith?: T;
	deserialize?: (data: DocumentData) => T; // Ensure deserialize always returns T
}

export function docStore<T>(
	firestore: Firestore,
	ref: string | DocumentReference,
	options?: DocStoreOptions<T>
) {
	const { startWith = null, deserialize = (data: DocumentData) => data as unknown as T } =
		options || {};
	let unsubscribe: (() => void) | undefined;

	const docRef = typeof ref === 'string' ? doc(firestore, ref) : ref;

	const { subscribe } = writable<T | null>(startWith, (set) => {
		unsubscribe = onSnapshot(docRef, (snapshot) => {
			set(snapshot.exists() ? deserialize(snapshot.data()!) : null); // Use deserialize here
		});
		return () => unsubscribe && unsubscribe();
	});

	return {
		subscribe,
		ref: docRef,
		id: docRef.id
	};
}