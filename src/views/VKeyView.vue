<template>
  <main>
    <h1>v-bind:key dentro de un v-for</h1>

    <p>El atributo <strong>:key</strong> (abreviatura de v-bind:key) asigna una clave única a cada elemento dentro de un bucle v-for. Esto permite a Vue identificar cada ítem y optimizar el renderizado cuando la lista cambia.</p>

    <p>Lista de alumnos con clave única:</p>

    <ul>
      <li v-for="alumno in alumnos" :key="alumno.id">
        {{ alumno.id }} — {{ alumno.nombre }}
      </li>
    </ul>
  </main>
</template>

<script setup>
import { ref } from 'vue'
const alumnos = ref([
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' },
  { id: 3, nombre: 'María' },
  { id: 4, nombre: 'Pedro' }
])
</script>