<template>
  <card>
    <template #header>
      微信
    </template>
    <div>
      <QM-Input title="姓名" v-model="appName"/>
      <QM-Textarea title="QM文本域" v-model="appName" />
      {{ appName }}
    </div>
  </card>
</template>

<script>

export default {
  inject:['config'],
  data() {
    return {
      appName:'李喵喵'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>