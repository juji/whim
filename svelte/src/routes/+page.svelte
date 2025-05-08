<script lang="ts">
  import { onMount } from 'svelte';
  let isDarkMode = false;

  onMount(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    isDarkMode = darkModeMediaQuery.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      isDarkMode = e.matches;
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  });
</script>

<style>
  .centered {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
</style>

<div
  class="centered"
  style="background-color: {isDarkMode ? '#121212' : '#ffffff'}; color: {isDarkMode ? '#ffffff' : '#000000'}"
>
  <p>{isDarkMode ? 'Dark mode detected' : 'Light mode detected'}</p>
</div>
