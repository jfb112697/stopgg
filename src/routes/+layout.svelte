<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailAnchor, Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { initializeApp } from 'firebase/app';
	import { getAuth } from 'firebase/auth';
	import FirebaseApp from '../../node_modules/sveltefire/dist/components/FirebaseApp.svelte';
	import { DocumentReference, doc, getDoc, getFirestore, onSnapshot } from 'firebase/firestore';
	import { getStorage } from 'firebase/storage';
	import { signInWithCustomToken } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { User, userStore } from "sveltefire";
	import { auth, firestore, storage } from "../firebase";
	import { writable } from 'svelte/store';
	import { docStore } from '../stores/docStore';

   const user = userStore(auth);
   interface UserDetails {
	name: string,
   }
   let userDoc = docStore<UserDetails>(firestore, `users/${$user?.uid}`);

  let userName: string | null = null;

  $: userName = $userDoc?.name || null;

	onMount(async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const token = urlParams.get('token');

		if (token) {
			try {
				await signInWithCustomToken(auth, token);
				// User is signed in, navigate to another page or whatever you need
			} catch (error) {
				console.error('Authentication failed', error);
			}
		}
	});
</script>

<!-- App Shell -->

<FirebaseApp {auth} {firestore} {storage}>
	<AppShell>
		<svelte:fragment slot="sidebarLeft">
			<AppRail>
				<AppRailAnchor
					href="/reporting"
					title="Reporting"
					selected={$page.url.pathname === '/reporting'}
				>
					<svelte:fragment slot="lead">(icon)</svelte:fragment>
					<span>Report Matches</span>
				</AppRailAnchor>
			</AppRail>
		</svelte:fragment>
		<svelte:fragment slot="header">
			<!-- App Bar -->
			<AppBar>
				<svelte:fragment slot="lead">
					<strong on:click={() => {console.log(userName)}}  class="text-xl uppercase font-mono">cease.gg</strong>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					
				<User let:user>
					{#if userName}
						<Avatar initials={userName.split(" ").map((w) => w.substring(0,1)).join("")} background="bg-primary-500" />
							{/if}
				</User>
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
	</AppShell>
</FirebaseApp>
