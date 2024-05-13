1. json-server 部分需要使用 `db.cjs` 因为 package.json 的 type: module 使用 ES 模块，而json-server 默认使用 CommonJS 模块

2. scoped 会添加属性选择器，使用属性选择器会造成性能浪费，如果样式是针对某个元素，可以添加 class，如果样式是针对某个元素，可以添加 class