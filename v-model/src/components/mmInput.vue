<template>
  <!-- v-model 实现原理 -->
  <div>
    <input type="text" :value="content" @input="change">
    <h2>{{ content }}</h2>
  </div>
</template>
<script>
export default {
  name: "",
  props:['modelValue'],
  emit:['update:modelValue'],
  data () {
    return {
      content:this.modelValue
    };
  },
  methods: {
    change(event) {
      this.content = event.target.value
      this.$emit("update:modelValue",event.target.value)
    }
  },
};
</script>

<style scoped>
</style>
