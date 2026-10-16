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
  padding: 1rem;
  background: #2c3e50;
}
.nav a {
  color: white;
  text-decoration: none;
}
.nav a.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>