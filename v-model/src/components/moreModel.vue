<template>
  <!-- 多个 v-model -->
  <div>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
    <input type="text" :value="secondValue" @input="$emit('update:secondValue',$event.target.value)" >
  </div>
</template>
<script>

export default {
  props:["modelValue","secondValue"],
  emit:["update:modelValue","update:secondValue"],
  name: "",
  data () {
    return {
      // first:this.modelValue,
      // second:this.secondValue
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
