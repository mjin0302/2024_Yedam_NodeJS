// 프로젝트 내부에 등록된 라우팅을 관리함
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// 2) 페이지 단위로 호출
import DataBinding from '@/views/DataBinding.vue';
import ListBinding from '@/views/ListBinding.vue';
import IfBinding from '@/views/IfBinding.vue';
import OnEvent from '@/views/OnEvent.vue';
import ComputeWatch from '@/views/ComputedWatch.vue'

const routes = [
  {
    path: '/',  // 경로
    name: 'home',
    component: HomeView // 컴포넌트가 등록되어있음 -> 상단에 import되어있는 것
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') // 동적으로 import! -> 라우터를 등록하는 시점에 해당파일을 호출하지 않음 단, 사용자가 about을 누르는 그 순간에 about와 연동되어있는 component를 불러냄
  },
  {
    path : "/dataBinding",  // 경로
    name : "dataBind",      // 해당 경로의 이름 별칭 같은 느낌?
    component : DataBinding
  },
  {
    path : "/listBinding",  // 경로
    name : "listBind",      // 해당 경로의 이름 별칭 같은 느낌?
    component : ListBinding
  },
  {
    path : "/ifBinding",  // 경로
    name : "ifBinding",      // 해당 경로의 이름 별칭 같은 느낌?
    component : IfBinding
  },
  {
    path : "/onEvent",  // 경로
    name : "onEvent",      // 해당 경로의 이름 별칭 같은 느낌?
    component : OnEvent
  },
  {
    path : "/comWatch",  // 경로
    name : "comWatch",      // 해당 경로의 이름 별칭 같은 느낌?
    component : ComputeWatch
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // js의 History 내장 객체와 연동을 하겠다?(뒤로가기, 앞으로 가기)
  routes
})

export default router