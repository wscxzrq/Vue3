<template>
  <div>
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
<script>
export default {
  name: "",
  data () {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid #ddd;
  margin-top: 20px;
  border-radius: 5px;
  header {
    border-bottom: solid 1px #ddd;
    padding: 10px;
    background-color: #f3f3f3;
  }
  main {
    padding: 10px;
  }
}
</style>
