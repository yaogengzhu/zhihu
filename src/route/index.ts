
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ColumnDetail from '../views/ColumnDetail.vue'

const routes =  [
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
export default routes
