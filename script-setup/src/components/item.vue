<template>
  <input type="text" :value="todo.title">
</template>

<script setup>
// defineProps 无需自动引入
defineProps({
  todo:{
    type:Object,
    required:true
  }
})
</script>

<style lang="scss" scoped>
input {
  padding: 10px;
}
</style>