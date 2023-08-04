import { createApp } from 'vue'
import './style/style.scss'
import App from './App.vue'
import FontAwesomeIcon from '@/components/utils/fontawesome-icons.ts'
import router from '@/router/index.ts'
import CONFIG from '../global-config.ts'
import VueScrollTo from 'vue-scrollto'

// import VueScrollTo from 'vue-scrollto'


const app = createApp(App)
app.component("FontAwesomeIcon",FontAwesomeIcon)

app.use(VueScrollTo, {
    ...CONFIG.VUE_SCROLL_CONFIG_OPTION
})

app.use(router)
app.mount('#app')
