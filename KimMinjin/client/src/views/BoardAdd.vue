<!-- views/BoardAdd.vue -->

<template>
   <div class="container mx-auto">
      <table class="table mx-auto">
         <!-- <tr>
            <th class="text-right">No</th>
            <td class="text-left"><input type="text" v-model="boardInfo.user_id"></td>
         </tr> -->
         <tr>
            <th class="text-center">제목</th>
            <td class="text-left"><input type="text" class="form-control" v-model="boardInfo.title"></td>
         </tr>
         <tr>
            <th class="text-center">작성자</th>
            <td class="text-left"><input type="text" class="form-control" v-model="boardInfo.writer"></td>
         </tr>
         <tr>
            <th class="text-center">내용</th>
            <td class="text-left">
               <textarea class="form-control" style="width: 100%;" rows="10" v-model="boardInfo.content"></textarea>
            </td>
         </tr>
         <tr>
            <th class="text-center">작성일자</th>
            <td class="text-left"><input class="form-control" type="date" v-model="boardInfo.created_date"></td>
         </tr>
      </table>
      <div class="mx-auto text-center">
         <button class="btn btn-info" @click="addBoardInfo">등록</button>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

   export default {
      data() {
         return {
            boardInfo : {
               title : "",
               writer : "",
               content : null,
               created_date : null,
            } 
         }
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
         async addBoardInfo() {
            let result = await axios.post(`/api/board`, this.boardInfo)
                                    .catch(err => console.log(err))
            console.log(result.data)
            if(result.data.board_no > 0) {
               alert("등록되었습니다.");
               this.$router.push({name : 'boardInfo', query : {no : result.data.board_no}});
            } else {
               alert("등록 x")
            }
         }
      }
   }
</script>

<style>

</style>