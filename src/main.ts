import { createApp } from 'vue'
import 'lib-flexible'
import 'vant/lib/index.css'
import './components/components.less'
import App from './App'
import router from './router'
import store from './store'
const app = createApp(App)
app.use(store).use(router).mount('#app')
