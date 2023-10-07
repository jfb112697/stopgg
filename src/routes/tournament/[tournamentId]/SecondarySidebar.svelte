<!-- SecondarySidebar.svelte -->
<script lang="ts">
  export let events: { id: string; name: string; }[] = [];
  export let title: string = '';
  export let tournamentSlug: string = '';
</script>

<div class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30">

<section class="p-4 pb-20 space-y-4 overflow-y-auto">
  <!-- Title -->
  <p class="font-bold pl-4 text-2xl">{title}</p>
  <!-- Nav List -->
  <nav class="list-nav">
    <ul>
      {#each events as { id, name }}
        <li>
          <a href={`/tournaments/${tournamentSlug}/${id}`} class="...">
            <span class="flex-auto">{name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</section>
</div>