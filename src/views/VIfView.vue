<template>
  <main>
    <h1>v-if / v-else-if / v-else</h1>

    <p>La directiva <strong>v-if</strong> renderiza un elemento solo si la condición es verdadera. Si es falsa, el elemento NO existe en el DOM. Con <strong>v-else-if</strong> se encadenan condiciones y con <strong>v-else</strong> se define el caso por defecto.</p>

    <p>Haz clic en un botón para cambiar el estado:</p>

    <div>
      <button @click="estado = 'activo'">Activo</button>
      <button @click="estado = 'inactivo'">Inactivo</button>
      <button @click="estado = 'otro'">Otro</button>
    </div>

    <p v-if="estado === 'activo'">✅ Usuario activo</p>
    <p v-else-if="estado === 'inactivo'">⛔ Usuario inactivo</p>
    <p v-else>❓ Estado desconocido</p>
  </main>
</template>

<script setup>
import { ref } from 'vue'
const estado = ref('activo')
</script>