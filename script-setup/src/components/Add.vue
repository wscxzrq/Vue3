<template>
  <div class="add">
    <input type="text" placeholder="回车提交任务" @keyup.enter="onSubmit" v-model="title">
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useTodo from '../composables/useTodo';
const {add} = useTodo()
const title = ref('')
const onSubmit = () => {
  add({title:title.value})
  title.value = ''
}
</script>

<style lang="scss">
div.add {
  display: flex;
  input {
    border: 5px solid #8e44ad;
    padding: 10px;
    flex: 1;
  }
}
</style>