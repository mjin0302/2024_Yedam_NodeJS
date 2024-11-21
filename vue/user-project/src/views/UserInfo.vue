<!-- views/UserInfo.vue -->
<template>
   <div class="container">
      <table class="table">
         <tr>
            <th class="text-right">NO</th>
            <td class="text-center">{{ userInfo.user_no }}</td>
         </tr>
         <tr>
            <th class="text-right">아이디</th>
            <td class="text-center">{{ userInfo.user_id }}</td>
         </tr>
         <tr>
            <th class="text-right">비밀번호</th>
            <td class="text-center">{{ userInfo.user_pwd }}</td>
         </tr>
         <tr>
            <th class="text-right">이름</th>
            <td class="text-center">{{ userInfo.user_name }}</td>
         </tr>
         <tr>
            <th class="text-right">성별</th>
            <td class="text-center">{{ userInfo.user_gender == null ? null : userGender }}</td>
         </tr>
         <tr>
            <th class="text-right">나이</th>
            <td class="text-center">{{ userInfo.user_age == null ? null : user_age }}</td>
         </tr>
         <tr>
            <th class="text-right">가입일자</th>
            <td class="text-center">{{ userInfo.join_date }}</td>
         </tr>
      </table>
      <div>
         <button class="btn btn-info mr-2" @click="goToUpdateForm(userInfo.user_no)">수정</button>
         <router-link to="/userList" class="btn btn-light mr-2">목록</router-link>
         <button class="btn btn-warning" v-on:click="userDelete(userInfo.user_no)">삭제</button>
      </div>
   </div>
</template>

<script>
   import axios from 'axios';

   export default {
      data() {
         return {
            userInfo : {}
         }
      },
      computed : {
         userGender() {
            return this.userInfo.user_gender == 'M' ? '남' : '여';
         }
      },
      created() {
         // 1) 사용자가 선택한 대상을 확인
         // UserList.vue에서 넘겨줌 =>  this.$router.push({ name:'userinfo', query : { no : userNo } })
         // $router을 받을때는 $route
         let selected = this.$route.query.no;

         // 2) 실제 데이터를 서버에서 가져옴
         this.getUserInfo(selected);
      },
      methods : {
         async getUserInfo(userNo) {
            let result = await axios.get(`/api/users/${userNo}`)
                                    .catch(err => console.log(err))
            this.userInfo = result.data
         },

         async userDelete(userNo) {
            let result = await axios.delete(`/api/users/${userNo}`)
                                    .catch(err => console.log(err))
            
            console.log(result.data)
            let delRes = result.data;

            if(delRes.result == 'success') {
               this.$swal({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
               }).then((result) => {
                  if (result.isConfirmed) {
                     this.$swal({
                        title: "Deleted!",
                        icon: "success"
                     });
                     this.goToCustomerList();
                  }
               });
            }else{
               this.$swal({
                  icon: "error",
                  title: "Oops..."
               });
            }
         },

         goToCustomerList() {
            // 리다이렉트와 같은 효과
            this.$router.push({ name : 'userList' });
         },
         // 수정페이지로 보내기
         goToUpdateForm(userNo) {
            this.$router.push({ name : 'userUpdate', params : { user_no : userNo } });
         }
      }  // end methods
   }
</script>

<style lang="scss" scoped>

</style>