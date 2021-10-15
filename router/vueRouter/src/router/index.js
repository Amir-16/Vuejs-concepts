import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Contact from '@/components/Contact'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/products',
      name:'Products',
      component:Products
    },
    {
      path:'/contact',
      name:'Contact',
      component:Contact
    },
    {
      path:'/About',
      name:'About',
      component:About,
    }


  ]
})
