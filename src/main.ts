import { createApp } from 'vue'
import './style/style.scss'
import App from './App.vue'
import FontAwesomeIcon from '@/components/utils/fontawesome-icons.ts'
import router from '@/router/index.ts'
import { createHead } from '@vueuse/head'
import VueProgressBar from '@aacassandra/vue3-progressbar'
import CONFIG from '../global-config'
const head = createHead()

const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router).use(head).use(VueProgressBar, CONFIG.vueProgressBarOption)

app.mount('#app')
