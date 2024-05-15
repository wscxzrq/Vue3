<template>
  <div class="form">
    <Add class="add" />
    <Sort />
  </div>
  <div class="todo">
    <item class="item" v-for="todo of todos" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script setup>
import Item from "../components/item.vue";
import useTodo from './../composables/useTodo.js'
import Add from '../components/Add.vue'
import Sort from "../components/Sort.vue";
const {todos,load} = useTodo()
load()
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  .add {
    flex: 1;
  }
}
div.todo {
  display: flex;
  flex-direction: column;
  .item {
    margin-bottom: 10px;
    margin-top: 5px;
  }
}
</style>
