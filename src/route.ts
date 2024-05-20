import {createRouter, createWebHistory} from 'vue-router'

const route = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'BaseHome',
            component: () => import('@/views/BaseHome.vue'),
            children: [
                {
                    path: '',
                    name: 'HomeIndex',
                    component: () => import('@/views/Home/HomeIndex.vue')
                }
            ]
        }
    ]
})

export default route
