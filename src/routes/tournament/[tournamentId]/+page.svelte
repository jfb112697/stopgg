<script lang="ts">
    import { page } from '$app/stores';
	import { collectionStore, docStore, userStore } from 'sveltefire';
	import { auth, firestore } from '../../../firebase';
	import { ListBox, ListBoxItem, Paginator, type PaginationSettings, Table, type TableSource, tableMapperValues, InputChip } from '@skeletonlabs/skeleton';
	import { Query, collection, query, where } from 'firebase/firestore';
	import SecondarySidebar from './SecondarySidebar.svelte';

	let tournamentSlug :string;
    $: {
        tournamentSlug = $page.params.tournamentId;
    }

	interface TournamentDetails {
		id: string;
		events: [
			{
				name: string;
				id: string;
			}
		];
	}
	let tournamentDoc: any;
	const user = userStore(auth);

	$: {
		if ($user && $user.uid) {
			tournamentDoc = docStore<TournamentDetails>(firestore, `tournaments/${tournamentSlug}`);
		}
	}

	let valueSingle: string = '';
    
	let entrantsStore;


	let paginationSettings: PaginationSettings = {
		page: 0,
		limit: 5,
		size: 0,  // initialize with 0 or some default value
		amounts: [1, 2, 5, 10]
	};

$: {
    if($tournamentDoc) {
        const entrantsCollection = collection(firestore, 'entrants');
        const entrantsQuery = query(entrantsCollection, where('tournamentIds', 'array-contains', $tournamentDoc.tournamentId)) as Query<[{ name: string; id: string; }]>;
        entrantsStore = collectionStore<[{name: string, id: string}]>(firestore, entrantsQuery);  // Fixed the query string issue here
        console.log("update store");
    }
    /*if ($entrantsStore) {
        paginationSettings = {
            ...paginationSettings,
            size: ($entrantsStore as Array<any>).length  // Assuming entrantsStore has a length property
        };
    }*/
}
	let paginatedSource: any[] = [];

	$:{ 
		
		if($entrantsStore) {
		if (searchValue.length > 0) {
			let source :any = $entrantsStore as any;
			source = source.filter((e: any) => e.name.toLowerCase().includes(searchValue[0].toLowerCase()));			console.log(source);
			if(source && source.length > 0){
			paginationSettings.page = 0;
			paginatedSource = (source as Array<any>).slice(
			paginationSettings.page * paginationSettings.limit,
			paginationSettings.page * paginationSettings.limit + paginationSettings.limit);
			paginationSettings.size = (source as Array<any>).length;
			}
		}
		else{
			paginatedSource = ($entrantsStore as Array<any>).slice(
			paginationSettings.page * paginationSettings.limit,
			paginationSettings.page * paginationSettings.limit + paginationSettings.limit);
			paginationSettings.size = ($entrantsStore as Array<any>).length;
		}
	}
	}

$: tableSimple = {
	head: ['Name'],
	body: tableMapperValues(paginatedSource, ['name']),
	meta: tableMapperValues(paginatedSource, ['name']),
	foot: ['Total Entrants', '', `<span class="badge variant-soft-primary">${paginatedSource.length} Elements</span>`]
};
let searchValue: string[];

$: {
	
}
</script>
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
        	<h2 class="h2"
		on:click={() => {
			console.log($entrantsStore);
		}}
	>
		View Signups
	</h2>
	<InputChip bind:value={searchValue} name="chips" placeholder="Search participants in the entire tournament" />
	<div class="card p-4">
		<Table source={tableSimple}/>
			<Paginator
				bind:settings={paginationSettings}
				showFirstLastButtons={false}
				showPreviousNextButtons={true}
			/>
		
	</div>

    </div>
</div>