<script lang="ts">
  import { onMount } from 'svelte';
  import { user, checkAuth } from './store';
  import svelteLogo from './assets/svelte.svg'
  import Header from './components/Header.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import MainContent from './components/MainContent.svelte';

  onMount(() => {
    checkAuth();
  });
</script>

<Header />

<div class="flex">
  <Sidebar />
  <MainContent class="flex-1" />
</div>

<style>
  .flex {
    display: flex;
  }
</style>
