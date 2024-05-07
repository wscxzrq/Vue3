<template>
  <label>
    <div>{{ title }}</div>
    <textarea :rows="rows" v-model="content" @input="$emit('update:modelValue',$event.target.value)"></textarea>
  </label>
</template>
<script>
export default {
  props:{
    title:String,
    modelValue:String,
    rows:{
      type:Number,
      default:10
    }
  },
  emits:['update:modelValue'],
  inject:['webname'],
  name: "",
  data () {
    return {
      content:this.modelValue
    };
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
