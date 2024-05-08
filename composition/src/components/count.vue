<template>
  <component :is="defaults[0]" />
    <button @click="sub">-</button>
    <span :style="attrs.style">{{ num }}</span>
    <button @click="add">+</button>
  <component :is="defaults[1]"/>
  {{ sum }}
  <hr>
  

  <button @click="updateWife('我老婆就是喵喵哦')">{{ wife }}</button>
</template>

<script>
import {ref,watchEffect,computed,inject} from 'vue'
export default {
  props :{
    init:{type:Number,default:3}
  },
  emits:['change'],
  inheritAttrs:false, // 完全手动处理 父组件传递的属性
  setup(props,contex) {
    const wife = inject('wife','是李喵喵捏') // 第二个参数是默认值
    const updateWife = inject('updateWife')

    const {emit,expose,attrs,slots} = contex
    const defaults = slots.default()
    let num = ref(props.init)
    let sum = computed(() => {
      return num.value+100
    })
    let add = () => {
      num.value++
      emit('change')
    }

    let sub = () => {
      num.value--
      emit('change')
    }

    watchEffect(() => {
      if(num.value < 0) num.value = 0
      emit('change')
    })
    // 父组件通过 ref 获取子组件数据时 子组件可以通过 expose 来指定暴露的数据 
    expose({num})
    return {num,add,sub,attrs,defaults,sum,wife,updateWife}
  }
}
</script>

<style lang="scss" scoped>

</style>