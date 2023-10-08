<script lang="ts">
	import { page } from '$app/stores';
	import { Query, collection, query, where } from 'firebase/firestore';
	import { collectionStore } from 'sveltefire';
	import { firestore } from '../../../../firebase';
	import { tableMapperValues, type PaginationSettings, Table, Paginator } from '@skeletonlabs/skeleton';

	let eventId: string = '';

	let entrantsStore: any;
	$: {
		eventId = $page.params.eventId;
		const entrantsCollection = collection(firestore, 'entrants');
		const entrantsQuery = query(
			entrantsCollection,
			where('eventIds', 'array-contains', parseInt(eventId))
		) as Query<[{ name: string; id: string }]>;
		entrantsStore = collectionStore<[{ name: string; id: string }]>(firestore, entrantsQuery); // Fixed the query string issue here
		console.log('update store');
	}

	let paginationSettings: PaginationSettings = {
		page: 0,
		limit: 5,
		size: 0, // initialize with 0 or some default value
		amounts: [1, 2, 5, 10]
	};

	let paginatedSource: any[] = [];

	$: {
		if ($entrantsStore) {
			paginatedSource = ($entrantsStore as Array<any>).slice(
				paginationSettings.page * paginationSettings.limit,
				paginationSettings.page * paginationSettings.limit + paginationSettings.limit
			);
			paginationSettings.size = ($entrantsStore as Array<any>).length;
		}
	}

	$: tableSimple = {
		head: ['Name'],
		body: tableMapperValues(paginatedSource, ['name']),
		meta: tableMapperValues(paginatedSource, ['name']),
		foot: [
			'Total Entrants',
			'',
			`<span class="badge variant-soft-primary">${paginatedSource.length} Elements</span>`
		]
	};
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2" on:click={() => console.log(eventId, $entrantsStore)}>View Entrants</h2>
		<div class="card p-4">
			<Table source={tableSimple} />
			<Paginator
				bind:settings={paginationSettings}
				showFirstLastButtons={false}
				showPreviousNextButtons={true}
			/>
			<slot />
		</div>
	</div>
</div>
