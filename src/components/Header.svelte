<script>
  import { user, logout } from '../store';
  let currentUser;
  $: user.subscribe(value => currentUser = value);
</script>

<div class="bg-primary text-white p-4">
  <header class="flex items-center justify-between">
  <h1 class="text-2xl">My SaaS CMS Homepage</h1>
    <nav class="space-x-4">
      <a href="#about" class="hover:underline">About</a>
      <a href="#services" class="hover:underline">Services</a>
      <a href="#login" class="hover:underline">Login/Sign In</a>
    </nav>
</header>
</div>
