<template>
  <main>
    <div v-for="(component,index) in components" :key="index" 
    @click="currentComponent = component.name" :class="{active:component.name == currentComponent}"
    >
      {{ component.title }}
    </div>
  </main>
  <component :is="currentComponent" />

  <input type="text" v-model="spouseObj.name">
  {{ spouseObj.name }}
</template>
<script>
import Weixin from './components/Weixin.vue'
import Pay from './components/Pay.vue'
import Site from './components/Site.vue'
import config from './config'
import {computed} from 'vue'
export default {
  components:{
    Weixin,
    Site
  },
  // 传递一个静态的值
  // provide:{
  //   webname:'李喵喵爱你捏'
  // },
  // 传递 this 中的值
  // provide() {
  //   return {webname:this.spouse}
  // },
  // provide() {
  //   return {webname:computed(() => this.spouse)}
  // },
  // 传递响应式对象
  provide() {
    return {webname:this.spouseObj,config:this.config}
  },
  data () {
    return {  
      config,
      spouse:'李喵喵爱你捏',
      spouseObj:{name:'李喵喵'},
      currentComponent:'weixin',
      components:[
        {title:'微信管理',name:'weixin'},
        {title:'网站信息',name:'site'},
      ]
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  div {
    border: 1px solid #ddd;
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
    transition: all .5s;
    &.active {
      background-color: #16a085;
      color: #fff;
    }
  }
}
</style>
