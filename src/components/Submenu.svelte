<!-- src/components/Submenu.svelte -->
<script lang="ts">
  export let tournamentSlug: string;
  export let events: Event[];

  interface Event {
    id: string;
    name: string;
  }
</script>

<section class="p-4 pb-20 space-y-4 overflow-y-auto">
  <p class="font-bold pl-4 text-2xl">Events</p>
  <nav class="list-nav">
    <ul>
      {#each events as event}
        <li>
          <a href={`/tournament/${tournamentSlug}/${event.id}`} data-sveltekit-preload-data="hover">
            <span class="flex-auto">{event.name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</section>