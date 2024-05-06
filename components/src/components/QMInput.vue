<template>
  <label>
    <div>{{ title }}</div>
    <input  v-model="content" @update:model-value="update">
  </label>
</template>
<script>
export default {
  props: ["title",'modelValue'],
  emits:['update:modelValue'],
  name: "",
  data () {
    return {
      content:this.modelValue
    };
  },
  watch:{
    content(value) {
      // console.log('value',value)
      this.$emit('update:modelValue',value)
    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  div {
    color: #666;
    font-size: 16px;
    margin-right: 10px;
  }
  input {
    border: solid 2px #ddd;
    padding: 5px 10px;
    color: #666;
    outline: none;
  }
}
</style>
