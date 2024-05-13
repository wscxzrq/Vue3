import useRequest from './../composables/useRequest.js'
import { ref } from 'vue'

const todos = ref([])

export default () => {
  const request = useRequest()
  
  const load = async () => {
    todos.value = await request.get()
  }

  const del = async (id) => {
    await request.delete(id)
    load()
  }

  const add = async (todo) => {
    console.log('todo',todo)
    await request.post(todo)
    load()
  }
  return {todos,load,del,add}
}