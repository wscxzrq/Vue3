import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/card.vue'
import QMInput from './components/QMInput.vue'
import QMTextarea from './components/QMTextarea.vue'

const app = createApp(App)
app.component('card',Card)
app.component('QM-Input',QMInput) 
app.component('QM-Textarea',QMTextarea) 
app.config.unwrapInjectedRef = true
app.mount('#app')

