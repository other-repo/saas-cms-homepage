import { writable } from 'svelte/store';

export const user = writable(null);

export function checkAuth() {
  const userData = localStorage.getItem('user');
  if (userData) {
    user.set(JSON.parse(userData));
  }
}

export function login(userData) {
  localStorage.setItem('user', JSON.stringify(userData));
  user.set(userData);
}

export function logout() {
  localStorage.removeItem('user');
  user.set(null);
}
