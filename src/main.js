import 'normalize.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './utils/flexible.js'
import './style/common.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
