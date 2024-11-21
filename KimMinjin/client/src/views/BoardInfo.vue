<!-- views/BoardInfo.vue -->

<template>
   <div class="container">
      <table board="1" class="table">
         <thead class="text-center">
            <tr >
               <th class="table-info">번호</th>
               <td>{{ boardInfo.no }}</td>
               <th class="table-info">작성일</th>
               <td>{{ dateFormat( boardInfo.created_date, 'yyyy-MM-dd') }}</td>
               <th class="table-info">이름</th>
               <td>{{ boardInfo.writer }}</td>
            </tr>
         </thead>
         <tbody>
            <tr>
               <th colspan="2" class="table-info text-center">제목</th>
               <td colspan="4" class="text-left">{{ boardInfo.title }}</td>     
            </tr>
            <tr>
               <td id="contentTd" colspan="6" class="text-left p-2">{{ boardInfo.content }}</td>
            </tr>
         </tbody>
         <tfoot>
            <tr class="text-center">
               <td colspan="6"><button type="button" class="btn btn-info" @click="goToUpdateForm(boardInfo.no)">수정</button></td>
            </tr>
         </tfoot>
      </table>

      <table board="1" class="table">
         <thead class="text-center">
            <tr >
               <th>내용</th>
               <th>작성자</th>
               <th>작성일자</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="(info) in commentList" :key="info.no">
               <td>{{ info.no }}</td>   
               <td>{{ info.writer }}</td>
               <td>{{ info.content }}</td>
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
            boardInfo : {},
            commentList : [],
         }
      },
      created() {
         // 1) 사용자가 선택한 대상을 확인
         // UserList.vue에서 넘겨줌 =>  this.$router.push({ name:'userinfo', query : { no : userNo } })
         // $router을 받을때는 $route
         let selected = this.$route.query.no;

         // 2) 실제 데이터를 서버에서 가져옴
         this.getBoardInfo(selected)
         
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

         async getBoardInfo(boardNo) {
            let result = await axios.get(`/api/board/${boardNo}`)
                                    .catch(err => console.log(err))
            console.log(result.data)
            this.boardInfo = result.data
         },

         async getCommentList() {
            let result = await axios.get(`/api/comment/${this.boardInfo.no}`)
                                    .catch(err => console.log(err))
            console.log("comment",result.data)
            this.commentList = result.data
         },
         goToUpdateForm(boardNo) {
            this.$router.push({ name : 'boardUpdate', params : { no : boardNo } });
         }
      }  // end methods
   }
</script>

<style>
   table {
      border: 1px solid #ebeaea;
   }
   tr, th, td {
      border: 1px solid #ebeaea !important;
   }
   #contentTd {
      height: 300px;
   }
</style>