# v-model 实现原理
1. 在 vue2 中，v-model 的实现原理是： 通过 v-bind 绑定 value 属性，通过 v-on 绑定 input 事件，在 input 事件中，将 value 值更新到 data 中。
```html
<input :value="mm" @input="mm = $event.target.value>
```

2. 在 vue3 中，v-model 的实现原理是： 通过 v-bind 绑定 value 属性，通过 v-on 绑定 input 事件，在 input 事件中，将 value 值更新到 data 中。
但是在 vue3 中提供了 `v-model:value` 语法糖 来实现父子组件中的双向数据通信
```javascript
// 父组件代码
<mmInput :value='mm' @update:value="change"/>
change(v) {
  this.mm = v;
}
```
```javascript
// 子组件代码
<input type="text" :value="content" @input="change">
props:["value"],
emit:["update:value"]
data() {
  content:this.value
},
change(v) {
  this.content = v.event.target.value
  this.$emit("update:value",this.content)
}
```
由此衍生出语法糖 实现父子组件间的双向数据通信
```javaScript
<mmInput v-model:value="mm" />
```

3. 多个 v-model 的使用

  父组件
  ```javascript
  <moreModel v-model="firstValue" v-model:secondValue="secondValue" />
  {{firstValue}}
  {{secondValue}}
  ```

  子组件
  ```javascript
  <input type="text" :value="modelValue" @input="$emit("update:modelValue",$event.target.value)">
  <input type="text" :value="secondValue" @input="$emit("update:secondValue",$event.target.value)">

  props:["modelValue","secondValue"],
  emit:["update:modelValue","update:secondValue"]
  ```