import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(VueRouter);

/*
  name:'router-name'             the name field is required when using <keep-alive>, it should also match its component's name property
                                 detail see : https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    roles: ['admin', 'editor']   will control the page roles (allow setting multiple roles)
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    hidden: true                 if true, this route will not show in the sidebar (default is false)
    alwaysShow: true             if true, will always show the root menu (default is false)
                                 if false, hide the root menu when has less or equal than one children route
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    noCache: true                if true, the page will not be cached (default is false)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
*/

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    // component: Layout,
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
    // children: [
    //   {
    //     path: 'dashboard',
    //     component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
    //     name: 'Dashboard',
    //     meta: {
    //       title: 'dashboard',
    //       icon: 'dashboard'
    //     }
    //   }
    // ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue'),
  },
];

const createRouter = () => new VueRouter({
  // scrollBehavior???????????? HTML5 history ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
  // mode: 'history',
  // scrollBehavior: (to, from, savedPosition) => {
  //   if (savedPosition) {// ???????????? popstate ?????? (?????????????????? ??????/?????? ????????????) ????????????
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

export default router