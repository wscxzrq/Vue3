<template>
  <main>
    <div v-for="(component,index) in components" :key="index" 
    @click="currentComponent = component.name" :class="{active:component.name == currentComponent}"
    >
      {{ component.title }}
    </div>
  </main>
  <component :is="currentComponent" />
</template>
<script>
import Weixin from './components/Weixin.vue'
import Pay from './components/Pay.vue'
export default {
  components:{
    Weixin,
    Pay
  },
  provide:{
    webname:'李喵喵'
  },
  data () {
    return {
      currentComponent:'weixin',
      components:[
        {title:'微信管理',name:'weixin'},
        {title:'在线支付',name:'pay'},
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
