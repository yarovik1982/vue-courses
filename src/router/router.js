import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path:'/',
      name:'home',
      component: () => import('../views/HomeView.vue')
   },
   // {
   //    path:'',
   //    name:'',
   //    component: () => import('')
   // },
   // {
   //    path:'',
   //    name:'',
   //    component: () => import('')
   // },
   // {
   //    path:'',
   //    name:'',
   //    component: () => import('')
   // },
   // {
   //    path:'',
   //    name:'',
   //    component: () => import('')
   // },
]

const router = createRouter({
   routes,
   history: createWebHistory(),
   // history: createWebHistory(import.meta.env.BASE_URL),
})
export default router