<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailAnchor, Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { initializeApp } from 'firebase/app';
	import { getAuth, signOut } from 'firebase/auth';
	import FirebaseApp from '../../node_modules/sveltefire/dist/components/FirebaseApp.svelte';
	import { collection, query, type DocumentData, where } from 'firebase/firestore';
	import { getStorage } from 'firebase/storage';
	import { signInWithCustomToken } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { User, collectionStore, userStore } from "sveltefire";
	import { auth, firestore, storage } from "../firebase";
	import { writable } from 'svelte/store';
	  import { derived } from 'svelte/store';
	import { docStore } from '../stores/docStore';
	import SecondarySidebar from './tournament/[tournamentId]/SecondarySidebar.svelte';
	import Submenu from '../components/Submenu.svelte';

  const isTournamentRoute = derived(
    page,
    $page => $page.url.pathname.startsWith('/tournament/')
  );
  let tournamentSlug : string;
  	$: {  
		tournamentSlug = $page.params.tournamentId;
	}

   const user = userStore(auth);
   interface UserDetails {
	name: string,
   }
  let userDoc :any;
  let userTournamentsStore :any;

$: {
  if ($user && $user.uid) {
    userDoc = docStore<UserDetails>(firestore, `users/${$user.uid}`);
		
    const tournamentsRef = collection(firestore, 'tournaments');
    const q = query(tournamentsRef, where('managedBy', 'array-contains', $user.uid.toString()));
    userTournamentsStore = collectionStore(firestore, q);
  }
  else{
	userTournamentsStore = null;
  }
}

  let userName: string | null = null;

  let eventsForCurrentTournament : [{
	name: string,
	id: string,
  }];
  $: userName = $userDoc?.name || null;
  $: {
	if($userTournamentsStore) {
		console.log("updatingCurrentStore");
    const currentTournament = $userTournamentsStore.find((t: {id: string}) => t.id == tournamentSlug);
	console.log(currentTournament);
	console.log($userTournamentsStore);
    eventsForCurrentTournament = currentTournament ? currentTournament.events : [];
	}
	}
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
						<div class="grid grid-cols-[auto_1fr] h-full border-r">
			<AppRail>
				{#if $userTournamentsStore}
					{#each $userTournamentsStore as userTournament}
						<AppRailAnchor href={`/tournament/${userTournament.id}`} title="Manage Tournament">
	<svelte:fragment slot="lead"><img src={userTournament.picUrl || ""} alt={userTournament.name}/></svelte:fragment>
	<span>{userTournament.name}</span>
</AppRailAnchor>
					{/each}
				{/if}
			</AppRail>
			{#if $isTournamentRoute && eventsForCurrentTournament}
    			<Submenu tournamentSlug={tournamentSlug}  events={eventsForCurrentTournament}  />			{:else}
			<!-- content to render on other routes -->
			{/if}
			</div>
		</svelte:fragment>
		<svelte:fragment slot="header">
			<!-- App Bar -->
			<AppBar>
				<svelte:fragment slot="lead">
					<strong on:click={() => console.log($user?.uid)} class="text-xl uppercase font-mono">cease.gg</strong>
				</svelte:fragment>
				<svelte:fragment slot="trail">
					
					{#if userName && $user}
					<a href="/">
						<Avatar initials={userName.split(" ").map((w) => w.substring(0,1)).join("")} background="bg-primary-500" on:click={() => {auth.signOut()}}/>
							</a>
					{/if}
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
	</AppShell>
</FirebaseApp>
