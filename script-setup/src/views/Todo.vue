<template>
  <div class="form">
    <Add class="add" />
    <Sort />
  </div>
  <div class="todo">
    <transition-group name="todo" appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
    <AnimateList>
      <item class="item" v-for="(todo,index) of todos" :key="todo.id" :todo="todo" :data-index="index"/>
    </AnimateList>
    </transition-group>
  </div>
</template>

<script setup>
import Item from "../components/item.vue";
import useTodo from './../composables/useTodo.js'
import Add from '../components/Add.vue'
import Sort from "../components/Sort.vue";
import AnimateList from './../components/AnimateList.vue'
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
  position: relative;
  .item {
    margin-bottom: 10px;
    margin-top: 10px;
    width: 100%;
  }
}
</style>
