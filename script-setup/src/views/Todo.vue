<template>
  <h2>李喵喵</h2>
  <div>{{ todos }}</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const todos = ref([])

onMounted(async () => {
  todos.value = await fetch(`http://localhost:3000/news`).then(res => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(res.json()),2000)
    })
  })
})
</script>

<style scoped>
div {
  color: #fff;
}
</style>
