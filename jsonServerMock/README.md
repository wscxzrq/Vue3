1. `npm install -g json-server` 全局安装json-server

2.  文件目录下创建 db.json 文件
3.  db.json 文件内容
```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```
4.  启动 json-server
json-server --watch --port 3003 --host 127.0.0.1 db.json