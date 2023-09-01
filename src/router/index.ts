import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/pages/Home.vue')
const About = () => import('@/pages/About.vue')
// const About = () => import('@/components/templates/About.vue')
// const Projects = () => import('@/components/templates/Projects.vue')
// const Work = () => import('@/components/templates/Work.vue')
// const Contact = () => import('@/components/templates/Contact.vue')

const routes = [
   {
      path: '/',
      component: Home,
      meta: {
         progress: {
            func: [
               { call: 'color', modifier: 'temp', argument: 'rgba(0, 123, 255, 0.8)' }, // Beautiful blue with 80% opacity
               { call: 'fail', modifier: 'temp', argument: '#6e0000' }, // Keeping this unchanged
               { call: 'location', modifier: 'temp', argument: 'top' }, // No change here
               {
                  call: 'transition',
                  modifier: 'temp',
                  argument: { speed: '1.5s', opacity: '0.6s', termination: 400 },
               },
            ],
         },
      },
   },
   {
      path: '/about',
      component: About,
      meta: {
         progress: {
            func: [
               { call: 'color', modifier: 'temp', argument: 'rgba(0, 123, 255, 0.8)' }, // Beautiful blue with 80% opacity
               { call: 'fail', modifier: 'temp', argument: '#6e0000' }, // Keeping this unchanged
               { call: 'location', modifier: 'temp', argument: 'top' }, // No change here
               {
                  call: 'transition',
                  modifier: 'temp',
                  argument: { speed: '1.5s', opacity: '0.6s', termination: 400 },
               },
            ],
         },
      },
   },
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
