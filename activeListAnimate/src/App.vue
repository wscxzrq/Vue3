
<template>
  <transition 
    mode="out-in"
    enter-active-class="animate__animated animate__zoomIn mm"
    leave-active-class="animate__animated animate__zoomOut mm"
  >
    <button v-if="action == 'on'" class="on" @click="action = 'off'">开启</button>
    <button v-else @click="action = 'on'" class="off">关闭</button>
  </transition>
</template>

<script setup>
import('animate.css')
import { ref } from 'vue'
const action = ref('on')
</script>

<style lang="scss">
.mm{
  animation-duration: .5s !important;
}
button {
  border: none;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  &.on {
    background-color: #16a085;
  }
  &.off {
    background-color: #d35400;
  }
}
</style>
