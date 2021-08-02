import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

 const router = new VueRouter({
  routes: [
    {
      path:'',
      redirect:'/main'
    },
    {
      path:'/main',
      component:()=>import('../views/home/Main')
    },
    {
      path:'/category',
      component:()=>import('../views/category/Category')
    },
    {
      path:'/cart',
      component:()=>import('../views/cart/Cart')
    },
    {
      path:'/profile',
      component:()=>import('../views/profile/Profile')
    },
    {
      path:'/detail/:id',
      component:()=>import('../views/detail/Detail')
    },
  ],
  mode:'history'
})
export default router