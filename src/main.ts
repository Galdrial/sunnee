// Import global styles
import './assets/main.css'
import './assets/base.css'

// Import Vue and core dependencies
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// Create and configure Vue application
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
