import { createRouter, createWebHistory} from 'vue-router';
const Home = () => import('@/components/templates/Home.vue')
// const About = () => import('@/components/templates/About.vue')
// const Projects = () => import('@/components/templates/Projects.vue')
// const Work = () => import('@/components/templates/Work.vue')
// const Contact = () => import('@/components/templates/Contact.vue')


const routes = [
    {  path: '/', component: Home },
    // {  path: '/about', component: About },
    // {  path: '/projects', component: Projects },
    // {  path: '/work', component: Work },
    // {  path: '/contact', component: Contact }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
})

export default router