import './assets/main.css'

import { createApp } from 'vue'
// 正常引入.vue文件为什么没有报错呢,正常情况需要已经声明过,通过查找env.d.ts已经声明过
import App from './App.vue'

createApp(App).mount('#app')
