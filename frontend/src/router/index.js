import Vue from 'vue'
import Router from 'vue-router'

// body template 
import body from '@/components/body'

// pages
const homePage = ()=> import('@/components/homePage')
const result = ()=> import('@/components/result')
const notFound = ()=> import('@/components/notFound')
const contact = ()=> import('@/components/contact')
const bug = ()=> import('@/components/bug')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: body,
      children:[
      	{	
      		path:'/',
      		component:homePage
      	},
      	{
      		path:'/get/:id',
      		component:result
      	},
      	{
      		path:'/contact',
      		component:contact
      	},
      	{
      		path:'/bug',
      		component:bug
      	}
      ]
    },
    {path:'*', component:body, children:[{path:'',component:notFound}]}
  ]
})
