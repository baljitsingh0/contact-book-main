import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // 👈 links your custom CSS

createApp(App).use(router).mount('#app')
