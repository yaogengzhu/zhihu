import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './route'

const app = createApp(App) // global Api 为了更好的tree-shaking
const routerHistory = createWebHistory() // web
const router = createRouter({
    history: routerHistory,
    routes,
})

app.use(router)
app.mount('#app')
