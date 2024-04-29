<template>
  <!-- 命名插槽 -->
  <div>
    <!-- 默认插槽 -->
    <slot></slot>
    <br>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
div {
  border: 1px solid #ddd;
}
main {
  border-width: 1px 0 1px 0;
  border-style: solid;
  border-color: #ddd;
}
header,main,footer {
  padding: 10px;
}
</style>
