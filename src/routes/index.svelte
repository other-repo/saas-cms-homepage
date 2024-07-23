<script>
  import { onMount } from 'svelte';
  import { user } from '../store';

  let currentUser;

  onMount(() => {
    user.subscribe(value => currentUser = value);
  });
</script>

{#if currentUser}
  <p>Welcome, {currentUser.name}!</p>
{:else}
  <p>Please log in to access your services.</p>
{/if}
