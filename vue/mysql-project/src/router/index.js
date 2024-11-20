import { createRouter, createWebHistory } from 'vue-router'
import CustomerList from '@/views/CustomerList.vue'
import CustomerInfo from '@/views/CustomerInfo.vue'
import CustomerAdd from '@/views/CustomerAdd.vue';
import CustomerUpdate from '@/views/CustomerUpdate.vue';

const routes = [
  { // 루트가 제대로 등록되지 않으면 페이지가 깨진다 그래서 전체조회 페이지로 이동시킨 것
    path : '/',
    redirect : { name : 'customerList' }
  },
  {
    path: '/customerList',
    name : 'customerList',
    component : CustomerList
  },
  {
    path : '/customerInfo',
    name : 'customerInfo',
    component : CustomerInfo
  },
  {
    path : "/customerAdd",
    name : "customerAdd",
    component : CustomerAdd
  },
  {
    path : "/customerUpdate/:customerId",  // params
    name : "customerUpdate",
    component : CustomerUpdate
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
