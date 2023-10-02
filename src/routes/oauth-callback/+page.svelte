<script>
	import { onMount } from 'svelte';
	import { localStorageStore } from '@skeletonlabs/skeleton';
	import { user } from '../../stores/user'; // Import the user store

	onMount(async () => {
		const urlParams = new URLSearchParams(window.location.search);
		const res = urlParams.get("res");
		if(res){
			const data = JSON.parse(res);
			const { access_token, refresh_token } = data;
			const query = `
      query {
        currentUser {
          name
        }
      }
    `;

		// Fetch user data using GraphQL
		const userInfoResponse = await fetch('https://api.smash.gg/gql/alpha', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${access_token}`
			},
			body: JSON.stringify({ query })
		});

		const userInfoData = await userInfoResponse.json();

		const currentUser = userInfoData.data.currentUser;

		console.dir(currentUser);

		user.set({access_token: access_token, refresh_token: refresh_token, name: currentUser.name});

		}

		// GraphQL query to fetch the user's name
		
		// Redirect to home or another page after successful OAuth
		window.location.href = '/';
	});
</script>
