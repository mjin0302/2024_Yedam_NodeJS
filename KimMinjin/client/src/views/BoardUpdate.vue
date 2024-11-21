<!-- views/BoardUpdate.vue -->

<template>
   <div class="container mx-auto">
      <table class="table mx-auto">
         <tr>
            <th class="text-right">No</th>
            <td class="text-left">{{ boardInfo.no }}</td>
         </tr>
         <tr>
            <th class="text-center">제목</th>
            <td class="text-left"><input type="text" v-model="boardInfo.title"></td>
         </tr>
         <tr>
            <th class="text-center">작성자</th>
            <td class="text-left"><input type="text" v-model="boardInfo.writer"></td>
         </tr>
         <tr>
            <th class="text-center">내용</th>
            <td class="text-left"><input type="text" v-model="boardInfo.content"></td>
         </tr>
         <tr>
            <th class="text-center">작성일자</th>
            <td class="text-left"><input type="text" v-model="boardInfo.created_date" readonly></td>
         </tr>
      </table>
      <div class="mx-auto text-center">
         <button class="btn btn-info" @click="updateBoardInfo">저장</button>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

   export default {
      data() {
         return {
            boardInfo : {} 
         }
      },
      created() {
         // 1) 사용자가 선택한 대상을 확인
         // this.$router.push({name : 'userUpdate', params : { userNo} });
         let selected = this.$route.params.no;
         // 2) 실제 데이터를 서버에서 가져옴
         this.getBoardInfo(selected);
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
            console.log(result.data);
            this.boardInfo = result.data;
            this.boardInfo.created_date = this.dateFormat(this.boardInfo.created_date, 'yyyy-MM-dd');
         },
         async updateBoardInfo() {
            let obj = {
               no : this.boardInfo.no,
               title : this.boardInfo.title,
               writer : this.boardInfo.writer,
               content : this.boardInfo.content,
               created_date : this.dateFormat(this.boardInfo.created_date, 'yyyy-MM-dd')
            }

            let result = await axios.put(`/api/board/${this.boardInfo.no}`, obj)
                                    .catch(err => console.log(err))
            console.log(result.data);
            let updateRes = result.data;
            if(updateRes.result) {
               alert("수정 되었습니다.");
            } else {
               alert("수정 x")
            }
         }
      }
   }
</script>

<style>

</style>