<template>
  <count :init="3" @change="changeHandle" ref="countComponent" style="color:red">
    <h1>憨憨小菜</h1>
    <p>只爱喵喵</p>  
  </count>
  <br />
  {{ changeHandle() }}
</template>

<script>
import Count from './components/count.vue'
import {ref, onMounted,onBeforeMount,onBeforeUpdate,onUpdated,onUnmounted,onBeforeUnmount,provide} from 'vue'
export default {
  components:{Count},
  // setup 的运行时机在 beforeCreate 和 created 之间 当成 created 的替代品
  setup() {
    let wife = ref('李喵喵')
    provide('wife',wife)
    // 子组件修改父组件传递的数据
    provide('updateWife',(newValue) => wife.value = newValue)
    setTimeout(() => wife.value = '珊珊',1000)
    const countComponent = ref()
    onMounted(() => {
      console.log('countComponent.value.num',countComponent.value.num)
    })
    const changeHandle = (v) => countComponent.value?.num
    return {changeHandle,countComponent}
  }
}
</script>
<style scoped>

</style>
