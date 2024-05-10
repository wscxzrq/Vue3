<template>
  <!-- 被 suspense 包裹的元素当异步完成时才会渲染 -->
  <suspense>
    <template #default>
      <div>
        <Todo />
      </div>
    </template>

    <!-- 在异步中时渲染的内容 -->
    <template #fallback> Loading... </template>
  </suspense>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Todo from "./views/Todo.vue";
</script>

<style scoped></style>
