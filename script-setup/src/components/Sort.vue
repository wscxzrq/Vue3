<template>
  <div class="sort">
    <button @click="order">{{ orderBy == 'asc' ? '升序' : '降序'}}</button>
  </div>
</template>

<script setup>
import useTodo from '../composables/useTodo';

const {orderBy} = useTodo();

const order = () => {
  orderBy.value = orderBy.value == 'asc' ? 'desc' : 'asc';
}
</script>

<style lang="scss" scoped>
.sort {
  display: flex;
  button {
    margin-left: 10px;
    background-color: #16a085;
    color: #fff;
    border: none;
    padding: 5px 10px;
  }
}
</style>