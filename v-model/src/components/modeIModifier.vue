<template>
  <!-- v-model 修饰符 -->
  <div>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
  </div>
</template>
<script>

export default {
  props:['modelValue','modelModifiers'],
  emits:["update:modelValue"],
  name: "",
  data () {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>
