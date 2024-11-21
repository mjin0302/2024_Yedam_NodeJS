<!-- views/boardList.vue -->

<template>
   <div class="container">
      <table class="table table-striped table-hovere">
         <caption>data {{ count }}개</caption>
         <thead>
            <tr class="text-center">
               <th>NO.</th>
               <th>제목</th>
               <th>작성자</th>
               <th>작성일자</th>
               <th>댓글 수</th><!--  yyyy-MM-dd -->
            </tr>
         </thead>
         <tbody class="text-center">
            <tr v-for="(info) in boardList" :key="info.no" v-on:click="goToDetailInfo(info.no)">
               <td>{{ info.no }}</td>  <!-- NO -->
               <td>{{ info.title }}</td> <!-- 제목 -->
               <td>{{ info.writer }}</td> <!-- 작성자 -->
               <td>{{ dateFormat(info.created_date, 'yyyy-MM-dd') }}</td> <!-- 작성일자 -->
               <td>{{ info.comment }}</td> <!-- 댓글 수 -->
            </tr>
         </tbody>
      </table>
   </div>
</template>


<script>
   import axios from 'axios';

   export default {
      data() {
         return {
            boardList : [],
         }
      },
      computed : {
         count() {
            return this.boardList.length;
         },
      },
      created() { // 객체 생성완료 시점 => 초기화 데이터 호출
         this.getBoardList();
      },
      methods : {
         dateFormat(value, format) {
            let date = value == null ? new Date() : new Date(value);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDay()).slice(-2);

            let result = format.replace('yyyy', year).replace('MM', month).replace('dd', day);

            return result;
         },
         
         async getBoardList() {   // 전체조회;
            let result = await axios.get('/api/board')
                                    .catch(err => console.log(err));
            console.log(result.data)
            this.boardList = result.data;
         },
         goToDetailInfo(boardNo) {
            this.$router.push({ name: 'boardInfo', query : { no : boardNo } });
         }
      }
   }
</script>