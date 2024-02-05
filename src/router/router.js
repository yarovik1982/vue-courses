import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path:'/',
      name:'home',
      component: () => import('../views/HomeView.vue')
   },
   {
      path:'/courses',
      name:'courses',
      component: () => import('../views/CoursesVuew.vue')
   },
   {
      path:'/about',
      name:'about',
      component: () => import('../views/AboutView.vue')
   },
   {
      path:'/pricing',
      name:'pricing',
      component: () => import('../views/PricingView.vue')
   },
   {
      path:'/contact',
      name:'contact',
      component: () => import('../views/ContactView.vue')
   },
   {
      path:'/login',
      name:'login',
      component: () => import('../views/LoginView.vue')
   },
   {
      path:'/register',
      name:'register',
      component: () => import('../views/RegisterView.vue')
   },
]

const router = createRouter({
   routes,
   history: createWebHistory(),
   // history: createWebHistory(import.meta.env.BASE_URL),
})
export default router