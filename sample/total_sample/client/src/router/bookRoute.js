import BookList from '@/views/books/BookList.vue';
import BookInfo from '@/views/books/BookInfo.vue';
import BookForm from '@/views/books/BookForm.vue';

const bookRoutes = [
  {
    path: 'list',
    name: 'bookList',
    component: BookList
  },
  {
    path: 'info/:bno',
    name: 'bookInfo',
    component: BookInfo
  },
  {
    path: 'form',
    name: 'bookForm',
    component: BookForm
  },
  {
    path: '',
    redirect : { name : 'bookList'}
    
  },
]


export default bookRoutes;