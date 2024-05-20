import '@/assets/css/tailwindcss.css'

import {createApp} from 'vue'
import Antd from 'ant-design-vue';
import App from '@/App.vue';
import 'ant-design-vue/dist/reset.css';
import route from '@/route'

createApp(App)
    .use(Antd)
    .use(route)
    .mount('#app')
