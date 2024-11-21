<!-- views/UserUpdate.vue.vue -->
<template>
   <div class="container mx-auto">
      <table class="table mx-auto">
         <tr>
            <th class="text-right">NO</th>
            <td class="text-center">{{ userInfo.user_no }}</td>
         </tr>
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
         <button class="btn btn-info" @click="updateUserInfo">저장</button>
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
      created() {
         // 1) 사용자가 선택한 대상을 확인
         // this.$router.push({name : 'userUpdate', params : { userNo} });
         let selected = this.$route.params.user_no;
         // 2) 실제 데이터를 서버에서 가져옴
         this.getUserInfo(selected);
      },
      methods : {
         dateFormat(joinDate, format) {
            let date = joinDate == null ? new Date() : new Date(joinDate);
            let year = date.getFullYear();
            let month = ('0' + (date.getMonth() + 1)).slice(-2);
            let day = ('0' + date.getDay()).slice(-2);

            let result = format.replace('yyyy', year).replace('MM', month).replace('dd', day);

            return result;
         },

         async getUserInfo(userNo) {
            let result = await axios.get(`/api/users/${userNo}`)
                                    .catch(err => console.log(err))
            this.userInfo = result.data;
            this.userInfo.join_date = this.dateFormat(this.userInfo.join_date, 'yyyy-MM-dd')
         },

         async updateUserInfo() {
            // 전제조건 : 모든 데이터가 존재
            // 1) 보낼 데이터 정리 
            let obj = {
               user_id : this.userInfo.user_id,
               user_pwd : this.userInfo.user_pwd,
               user_name : this.userInfo.user_name,
               user_gender : this.userInfo.user_gender,
               user_age : this.userInfo.user_age,
               join_date : this.userInfo.join_date
            }

            // 2) 서버에 통신
            let result = await axios.put(`/api/users/${this.userInfo.user_no}`, obj)
                                    .catch(err => console.log(err))
            console.log(result.data)
            let updateRes = result.data;
            if(updateRes.result) {
               alert("등록되었습니다.");
            } else {
               alert("등록 x")
            }
         }
      }
   }
</script>