<script>
  import TabContent from './TabContent.svelte';
</script>

<main class="flex flex-col md:flex-row mt-4">
   <aside class="md:w-1/4 p-4 bg-secondary text-white">
     <!-- Sidebar content -->
   </aside>
   <section class="md:w-3/4 p-4">
     <!-- Main content with tabs -->
     <div class="tab-content">
       <TabContent />
     </div>
   </section>
</main>
