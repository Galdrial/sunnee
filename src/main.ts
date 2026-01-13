// Import global styles
import './assets/base.css'
import './assets/main.css'

// Import Vue and core dependencies
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Create and configure Vue application
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
