<template>
  <div class="todo">
    <item class="item" v-for="todo of todos" :key="todo.id" :todo="todo"/>
  </div>
  <Add />
</template>

<script setup>
import Item from "../components/item.vue";
import useTodo from './../composables/useTodo.js'
import Add from '../components/Add.vue'

const {todos,load} = useTodo()
load()
</script>

<style lang="scss" scoped>
div.todo {
  display: flex;
  flex-direction: column;
  .item {
    margin-bottom: 10px;
  }
}
</style>
