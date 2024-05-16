<template>
  <div class="todo">
    <transition-group 
      :tag="props.tag"
      name="todo" 
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <slot></slot>
    </transition-group>
  </div>
</template>

<script setup>
import gsap from'gsap'

const props = defineProps({
  duration:{
    type:Number,
    default:1
  }, // 动画持续时间
  delay:{
    type:Number,
    default:1
  }, // 动画延迟时间
  tag:{
    type:String,
    default:null 
  }, // 动画标签
})
// 过渡动画开始前
const beforeEnter = (el,done) => {
  gsap.set(el,{
    opacity:0,
  })
}

const enter = (el,done) => {
  gsap.to(el,{
    opacity:1,
    delay:el.dataset.index * props.delay, // 延迟时间
    duration:props.duration,
    onComplete:done
  })
}
</script>

<style lang="scss" scoped>
.todo-leave-to {
  opacity: 0;
  transform: scale(0);
}

.todo-leave-active {
  transition:1s ease;
  position: absolute;
}
.todo-move {
  transition: all 1s ease;
}
</style>
