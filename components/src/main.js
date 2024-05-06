import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/card.vue'
import QMInput from './components/QMInput.vue'
const app = createApp(App)
app.component('card',Card)
app.component('QM-Input',QMInput)
app.mount('#app')

