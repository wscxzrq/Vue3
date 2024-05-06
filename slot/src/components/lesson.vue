<template>
  <div>
    <slot name="icon" iconNme="我是具名插槽内容" />
    <slot name="title" :lesson="lesson" />
    {{ lesson.title }}
    <slot :id="lesson.id" />
  </div>
</template>
<script>

export default {
  name: "",
  props:['lesson'],
  data () {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped>
div {
  width: 200px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
}
</style>
