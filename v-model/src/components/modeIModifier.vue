<template>
  <!-- v-model 修饰符 -->
  <div>
    <input type="text" :value="title" @input="changeTitle">
  </div>
</template>
<script>

export default {
  props:['title','titleModifiers'],
  emits:["update:title"],
  name: "",
  data () {
    return {};
  },
  created() {
    console.log('this.titleModifiers',this.titleModifiers)
  },  
  methods: {
    changeTitle(e) {
      let value = e.target.value
      if(this.titleModifiers.toupper) {
        value = value.toUpperCase()
      }
      this.$emit("update:title",value)
    }
  },
};
</script>

<style scoped>
</style>
