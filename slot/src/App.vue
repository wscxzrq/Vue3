<template>
  <div>
    <card>
      <div @click="loveMM">爱你呦喵喵</div>
    </card>


    <h1>命名插槽</h1>
    <name>
      <div>我是默认插槽</div>
      <template #header>喵</template>
      <template #main>喵喵</template>
      <template #footer>喵喵喵</template>
    </name>
    <br>

    <h1>插槽传递数据</h1>
    <lesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson">

      <template #icon="iconProps">
        {{ iconProps }}
        :)
      </template>
      <!-- 默认插槽 -->
      <template #default="slotProps">
        <button @click="del(slotProps.id)">删除</button>
      </template>
    </lesson> 
  </div>
</template>
<script>
import card from './components/card.vue'
import name from './components/name.vue'
import lesson from './components/lesson.vue'
import lessons from './index.js'
export default {
  name: "",
  components:{
    card,
    name,
    lesson
  },  
  data () {
    return {
      lessons,
    };
  },
  methods: {
    loveMM() {
      // 插槽的作用域是使用该插槽的作用域决定的
      console.log('parent 爱你呦喵喵');
    },
    del(id) {
      const index = this.lessons.findIndex(i => i.id == id)
      console.log('index',index)
      this.lessons.splice(index,1)
    }
  },
};
</script>

<style scoped>
</style>
