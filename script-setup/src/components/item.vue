<template>
  <div class="item">
    <input type="text" :value="todo.title">
    <button @click="del(todo.id)">删除</button>
  </div>
</template>

<script setup>
import useTodo from '../composables/useTodo';
const {del} = useTodo();
// defineProps 无需自动引入
const {todo} = defineProps({
  todo:{
    type:Object,
    required:true
  }
})
// const emit = defineEmits(['del'])
// const del = async() => {
//   await request.delete(todo.id)
//   emit('del')
// }
</script>

<style lang="scss">
div.item {
  display: flex;
  flex-direction: row;
  input {
    padding: 10px;
    flex: 1;
  }
}
</style>