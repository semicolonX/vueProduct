
import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from './components/layout'
import IndexPage from './components/index'
import PolicyList from './components/policyList'
import PolicyInfo from './components/policyInfo'

import './assets/css/public.css' /*引入公共样式*/

Vue.config.productionTip = false

/*
 * 路由
 * */
Vue.use(VueRouter)
let router = new VueRouter({
	//mode: 'history',
	routes: [
		{
			path: '/indexPage',
			component: IndexPage
		},
	
		{
			path: '/policyList',
			component: PolicyList
		}
		,{
			path: '/policyInfo',
			name:'test',
			component: PolicyInfo
		},
		{
		    path: '/', 
		    redirect: '/indexPage' 
		},
		{ 
		    path: '*', 
		    redirect: '/indexPage' 
		}
	]
})
/* eslint-disable no-new */
new Vue({
	el: '#layout',
	router,
	render: h => h(Layout)
})

