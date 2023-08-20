import { createApp } from 'vue'
import './style/style.scss'
import App from './App.vue'
import FontAwesomeIcon from '@/components/utils/fontawesome-icons.ts'
import router from '@/router/index.ts'
import { createHead } from '@vueuse/head'
const head = createHead()
// import CONFIG from '../global-config.ts'


const app = createApp(App)
app.component("FontAwesomeIcon",FontAwesomeIcon)


app.use(router)
.use(head)
    
app.mount('#app')
