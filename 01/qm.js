const app = Vue.createApp({
  data() {
    return {
      name:'喵喵'
    }
  },
  template:`
    <div>{{name}}<qm/></div>
  `
})

app.component('qm',{
  data() {
    return {
      name:'qm'
    }
  },
  template:`<h1 style="background-color:red">李启明</h1>`
})
const vm = app.mount("#app");

console.log('vm',vm)