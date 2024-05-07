<template>
  <card>
    <template #header>
      站点信息
    </template>
    <div>
      <QM-Input title="网站名称" v-model="config.site.title"/>
      <QM-Textarea title="网站介绍" v-model="config.site.icp" />
    </div>
  </card>
</template>

<script>

export default {
  inject:['config'],
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>