<template>
  <div>
    <item class="item" v-for="todo of todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Item from "../components/item.vue";
const todos = ref([])

onMounted(async () => {
  todos.value = await fetch(`http://localhost:3000/news`).then(res => res.json())
})
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  .item {
    margin-bottom: 10px;
  }
}
</style>
