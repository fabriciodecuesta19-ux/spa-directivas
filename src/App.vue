<template>
  <NavBar />
  <router-view />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f4f4;
  color: #2c3e50;
}

main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

button {
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background: #369870;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 1rem;
  margin: 0.25rem 0;
  background: #ecf0f1;
  border-radius: 4px;
}
</style>