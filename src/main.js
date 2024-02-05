import { createApp } from 'vue'
import router from './router/router'
import './style.css'
import App from './App.vue'

import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App)
app.use(router)
.mount('#app')
