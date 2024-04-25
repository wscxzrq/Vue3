<template>
  <div>
    <div>
      实现v-model
      <div>
        <input type="text" :value="mm" @input="mm=$event.target.value"> 
      </div>
      <h2>{{ mm }}</h2>
    </div>
    <br>
    <div>
      vue3 实现v-model
      <!-- <mmInput :value="mm" @update:value="change"/> -->
      <!-- <mmInput v-model:value="mm" />  -->
      <!-- 如果v-model:modelValue 其中 modelValue 可以省略 -->
      <mmInput v-model="mm" />
    </div>
    <br>
    <div>
      多个v-model
      <moreModel v-model="firstvalue"  v-model:secondValue="secondValue"/>
      <h2>{{ firstvalue }}</h2>
      <h2>{{ secondValue }}</h2>
    </div>
    <br>
    <div>
      v-model 修饰符 
      <moreModel v-model.toupper="modifier"/>
      <h2>{{ modifier }}</h2>
    </div>
  </div>
</template>
<script>
import mmInput from './components/mmInput.vue'
import moreModel from './components/moreModel.vue'
export default {
  name: "",
  components:{
    mmInput,
    moreModel
  },
  data () {
    return {
      mm:'李喵喵',
      firstvalue:"第一个 v-model",
      secondValue:"第二个 v-model",
      modifier:''
    };
  },
  methods: {
    change(v) {
      this.mm = v
    }
  },
};
</script>

<style scoped>
</style>
