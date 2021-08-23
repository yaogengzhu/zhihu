import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import ColumnDetail from './views/ColumnDetail.vue'

const app = createApp(App) // global Api 为了更好的tree-shaking

const routerHistory = createWebHistory() // web
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/columnDetail/:id', // 动态路由匹配
            name: 'columnDetail',
            component: ColumnDetail,
        }
    ]
})

app.use(router)
app.mount('#app')
