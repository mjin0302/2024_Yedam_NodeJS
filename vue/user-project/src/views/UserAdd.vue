<!-- views/UserAdd.vue -->
<template>
   <div class="container mx-auto">
      <table class="table mx-auto">
         <tr>
            <th class="text-right">아이디</th>
            <td class="text-left"><input type="text" v-model="userInfo.user_id"></td>
         </tr>
         <tr>
            <th class="text-right">비밀번호</th>
            <td class="text-left"><input type="password" v-model="userInfo.user_pwd"></td>
         </tr>
         <tr>
            <th class="text-right">이름</th>
            <td class="text-left"><input type="text" v-model="userInfo.user_name"></td>
         </tr>
         <tr>
            <th class="text-right">성별</th>
            <td class="text-left">
               <input type="radio" v-model="userInfo.user_gender" value="M">남자
               <input type="radio" v-model="userInfo.user_gender" value="F">여자
            </td>
         </tr>
         <tr>
            <th class="text-right">나이</th>
            <td class="text-left"><input type="number" v-model="userInfo.user_age"></td>
         </tr>
         <tr>
            <th class="text-right">가입일자</th>
            <td class="text-left"><input type="date" v-model="userInfo.join_date"></td>
         </tr>
      </table>
      <div class="mx-auto text-center">
         <button class="btn btn-info" @click="addUserInfo">등록</button>
      </div>
   </div>
</template>

<script>
import axios from 'axios';

   export default {
      data() {
         return {
            userInfo : {
               user_id : "",
               user_pwd : "",
               user_name : null,
               user_gender : null,
               user_age : 0,
               join_date : null,
            } // userInfo : {} => 이렇게 해도 되지만 안에 필드가 어떻게 구성되어있는지 알기 위해서 필드명을 적어도 좋다
         }
      },
      methods : {
         async addUserInfo() {
            let result = await axios.post(`/api/users`, this.userInfo)
                                    .catch(err => console.log(err))
            console.log(result.data)
            if(result.data.user_no > 0) {
               alert("등록되었습니다.");
               // this.$router.push({name : 'customerInfo', query : {customerId : customerId}})
               this.$router.push({name : 'userInfo', query : {no : result.data.user_no}});
            } else {
               alert("등록 x")
            }
         }
      }
   }
</script>