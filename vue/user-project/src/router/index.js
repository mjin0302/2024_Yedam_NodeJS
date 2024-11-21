import { createRouter, createWebHistory } from 'vue-router'
import UserList from '@/views/UserList.vue';
import UserInfo from '@/views/UserInfo.vue';
import UserAdd from '@/views/UserAdd.vue';
import UserUpdate from '@/views/UserUpdate.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect : { name : 'userList' }
  },
  {
    path : '/userList',
    name : 'userList',
    component : UserList
  },
  {
    path : '/userInfo', // 1) query 2)params 중 선택하기
    name : 'userInfo',
    component : UserInfo
  },
  {
    path : "/userAdd",
    name : "userAdd",
    component : UserAdd

  },
  {
    path : "/userUpdate/:user_no",
    name : "userUpdate",
    component : UserUpdate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
