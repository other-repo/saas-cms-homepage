<script>
  import { login } from '../store';
  let username = '';
  let password = '';

  function handleLogin() {
    // 假设用户名和密码验证成功
    login({ name: username });
  }
</script>

<form on:submit|preventDefault={handleLogin}>
  <label>
    Username:
    <input type="text" bind:value={username} />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} />
  </label>
  <button type="submit">Login</button>
</form>

