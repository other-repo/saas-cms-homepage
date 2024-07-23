<script>
  let currentTab = 'tab1';
</script>

<div>
  <div>
    <button on:click={() => currentTab = 'tab1'}>Tab 1</button>
    <button on:click={() => currentTab = 'tab2'}>Tab 2</button>
  </div>
  <div>
    {#if currentTab === 'tab1'}
      <p>Content for Tab 1</p>
    {:else}
      <p>Content for Tab 2</p>
    {/if}
  </div>
</div>
