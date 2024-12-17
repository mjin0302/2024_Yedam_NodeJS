import BoardList from '@/views/boards/BoardList.vue';
import BoardInfo from '@/views/boards/BoardInfo.vue';
import BoardForm from '@/views/boards/BoardForm.vue';

const boardRoutes = [
  {
    path: '',
    redirect : { name : 'boardList'}
    
  },
  {
    path: 'list',
    name: 'boardList',
    component: BoardList
  },
  {
    path: 'info/:bno',
    name: 'boardInfo',
    component: BoardInfo
  },
  {
    path: 'form',
    name: 'boardForm',
    component: BoardForm
  },
]

export default boardRoutes;