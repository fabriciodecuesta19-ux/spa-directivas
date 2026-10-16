<template>
  <nav class="nav">
    <router-link to="/">Inicio</router-link>
    <router-link to="/v-if">v-if / v-else-if / v-else</router-link>
    <router-link to="/v-show">v-show</router-link>
    <router-link to="/v-for">v-for</router-link>
    <router-link to="/v-bind-key">v-bind:key</router-link>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
  background: #2c3e50;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.nav a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav a.router-link-active {
  font-weight: bold;
  color: #42b983;
  background: rgba(66, 185, 131, 0.15);
}
</style>