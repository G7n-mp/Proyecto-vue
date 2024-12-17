<template>
<h1>Hola</h1>
<p>{{ contador }}</p>
<button @click="incrementar">incrementar</button>
<button @click="noincrementar">decrementar</button>
</template>

<script setup>
import{ref} from 'vue'
const contador = ref(0)
const incrementar = () => {
  contador.value++
}
const noincrementar = () => {
  contador.value--
}
</script>

<style scoped>
p {
  color: blue;
}
</style>
