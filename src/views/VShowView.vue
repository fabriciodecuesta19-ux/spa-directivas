<template>
  <main>
    <h1>v-show</h1>

    <p>La directiva <strong>v-show</strong> alterna la visibilidad de un elemento usando CSS (<code>display: none</code>). A diferencia de <strong>v-if</strong>, el elemento SIEMPRE permanece en el DOM.</p>

    <p>Haz clic para mostrar u ocultar el mensaje:</p>

    <button @click="visible = !visible">Mostrar / Ocultar</button>

    <p v-show="visible">👋 ¡Hola! Estoy visible gracias a v-show.</p>
    <p v-show="!visible">🙈 Ahora estoy oculto. ¡Vuelve a hacer clic!</p>
  </main>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(true)
</script>