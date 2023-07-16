import { createApp } from 'vue'
import App from './App.vue'

import 'virtual:uno.css'
import '@unocss/reset/normalize.css'

import { router } from './router'
import '@/permissions'

import { createPinia } from 'pinia'

import vant from 'vant'
import 'vant/lib/index.css';

import '@/assets/style/theme.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(vant)

app.mount('#app')
