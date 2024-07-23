<script>
  import { user, logout } from '../store';
  let currentUser;
  $: user.subscribe(value => currentUser = value);
</script>

<header>
  <nav>
    <ul>
      <li><a href="/about">About</a></li>
      <li><a href="/service">Service</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/signin">Sign In</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    background: #f8f9fa;
    padding: 1rem;
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  nav ul li {
    margin-right: 1rem;
  }

  nav ul li a {
    text-decoration: none;
  }
</style>

