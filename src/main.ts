import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App) // global Api 为了更好的tree-shaking

app.mount('#app')
