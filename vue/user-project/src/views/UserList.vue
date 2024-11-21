<!-- views/UserList.vue -->

<template>
   <div class="container">
      <table class="table">
         <caption>data {{ count }}개</caption>
         <thead>
            <tr class="text-center">
               <th>NO</th>
               <th>아이디</th>
               <th>이름</th>
               <th>성별</th>
               <th>가입날짜</th><!--  yyyy-MM-dd -->
            </tr>
         </thead>
         <tbody class="text-center">
            <tr v-for="(info) in userList" :key="info.user_no" v-on:click="goToDetailInfo(info.user_no)">
               <td>{{ info.user_no }}</td>
               <td>{{ info.user_id }}</td>
               <td>{{ info.user_name }}</td>
               <td>{{ info.user_gender }}</td>
               <td>{{ dateFormat(info.join_date, 'yyyy-MM-dd') }}</td>
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
            userList : [],
         }
      },
      computed : {
         count() {
            return this.userList.length;
         },
         
      },
      created() { // 객체 생성완료 시점 => 초기화 데이터 호출
         this.getUserList();
      },
      methods : {
         async getUserList() {   // 전체조회
            let result = await axios.get('/api/users')
                                    .catch(err => console.log(err));
            console.log(result.data)
            this.userList = result.data;
         },
         dateFormat(joinDate, format) {
            let date = joinDate == null ? new Date() : new Date(joinDate);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDay()).slice(-2);

            let result = format.replace('yyyy', year).replace('MM', month).replace('dd', day);

            return result;
         },
         goToDetailInfo(userNo) {
            this.$router.push({ name: 'userInfo', query : { no : userNo } });
         }
      }
   }
</script>


<style>

</style>