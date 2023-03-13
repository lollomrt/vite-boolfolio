import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//Importare router ed agiungerlo in basso nel createApp
import { router } from './router'

createApp(App).use(router).mount('#app')
