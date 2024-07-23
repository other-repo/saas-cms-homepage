<script>
  import { marked } from 'marked';
  export let content = '';

  $: htmlContent = marked(content);
</script>

<div class="markdown" bind:this={markdownElement}></div>

<style>
  .markdown {
    font-family: Arial, sans-serif;
    line-height: 1.6;
  }
</style>
