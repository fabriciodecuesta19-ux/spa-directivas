<template>
  <main>
    <h1>v-for</h1>

    <p>La directiva <strong>v-for</strong> permite iterar sobre arrays u objetos para renderizar listas de elementos de forma dinámica.</p>

    <p>Lista de frutas generada con v-for:</p>

    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
  </main>
</template>

<script setup>
import { ref } from 'vue'
const frutas = ref(['Manzana', 'Pera', 'Uva', 'Mango', 'Fresa'])
</script>