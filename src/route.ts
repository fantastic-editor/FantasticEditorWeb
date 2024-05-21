import {createRouter, createWebHistory} from 'vue-router'

const route = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // 主页
            path: '/',
            name: 'BaseHome',
            component: () => import('@/views/BaseHome.vue'),
            children: [
                {
                    path: '',
                    name: 'HomeIndex',
                    component: () => import('@/views/home/HomeIndex.vue')
                }
            ]
        },
        {
            // 登录
            path: '/auth',
            name: 'BaseAuth',
            component: () => import('@/views/BaseAuth.vue'),
            children: [
                {
                    path: '',
                    name: 'AuthLogin',
                    component: () => import('@/views/auth/AuthLogin.vue')
                },
                {
                    path: 'register',
                    name: 'AuthRegister',
                    component: () => import('@/views/auth/AuthRegister.vue')
                }
            ]
        }
    ]
})

export default route
