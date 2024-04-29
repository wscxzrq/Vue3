<template>
  <div>
    <div style="color: red;">
      <slot>是喵喵老婆捏</slot>
      <!-- 该数据属于插槽的默认值，如果插槽有内容，则插槽的内容会覆盖默认值 -->
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data () {
    return {};
  },
  methods: {
    loveMM() {
      console.log("children 爱你呦喵喵");
    },
  },
};
</script>

<style scoped>
</style>
