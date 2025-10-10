
import { createApp } from 'vue'
import App from './App.vue'
import './style.css' 
import { createPinia } from 'pinia'


import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
const pinia=createPinia()
app.use(pinia)
app.mount('#app')
