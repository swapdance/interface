import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import store from './store'
import router from './router'
import './index.css'


const app = createApp(App).use(router).use(store).use(createMetaManager())

app.mount('#app')
