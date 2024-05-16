<template>
  <!-- <mm v-if="show">
    李喵喵
  </mm> -->

<!-- 
  <transition name="mmTrans">
    <mmTrans v-if="show">
     <span>自定义过渡动画</span>
    </mmTrans>
  </transition> -->

  <!-- <transition name="qm">
    <qm v-if="show">
      自定义keyframes 动画
    </qm>
  </transition> -->

  <!-- <transition
    appear
    enter-active-class="animate__animated animate__tada"
    leave-active-class="animate__animated animate__bounceOutRight"
  >
    <qm v-if="show">自定义动画类</qm>
  </transition> -->

  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <qm v-if="show">使用动画沟子函数</qm>
  </transition>
  <button @click="show = !show">切换</button>
</template>

<script setup>
import { ref } from "vue";
import mm from "./components/mm.vue";
import mmTrans from "./components/mmTrans.vue";
import qm from "./components/qm.vue";
const show = ref(false);

const beforeEnter = (el) => {
  gsap.set(el,{
    opacity:0
  })
}

const enter = (el,done) => {
  gsap.to(el,{
    opacity:1,
    duration:2,
    onComplete:done
  })
}

const leave = (el,done) => {
  gsap.to(el,{
    opacity:0,
    duration:2,
    onComplete:done
  })
}
</script>

<style lang="scss" scoped>
// 初始状态
.mmTrans-enter-from {
  opacity: 0;
}

// 过渡状态
.mmTrans-enter-active {
  transition: 2s ease;
}

.mmTrans-enter-to {
  opacity: 1;
}

.mmTrans-leave-from {
  opacity: 1;
}

.mmTrans-leave-active {
  transition: 1s ease;
}

.mmTrans-leave-to {
  opacity: 0;
}
button {
  margin-top: 10px;
  display: block;
}

.qm-enter-active {
  animation: identifier 1s ease;
}

.qm-leave-active {
  animation: identifier 1s ease reverse;
}

@keyframes identifier {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1) rotateX(360deg);
  }
}
</style>
