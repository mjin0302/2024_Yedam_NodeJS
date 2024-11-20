<template>
   <div class="container">
      <div class="row">
         <div class="col12">
            <div class="row">
               <div class="col-6">
                  아이디
               </div>
               <div class="col-6">
                  {{ customer.id }}
               </div>
            </div>
            <div class="row">
               <div class="col-6">
                  이름
               </div>
               <div class="col-6">
                  {{ customer.name }}
               </div>
            </div>
            <div class="row">
               <div class="col-6">
                  E-Mail
               </div>
               <div class="col-6">
                  {{ customer.email }}
               </div>
            </div>
            <div class="row">
               <div class="col-6">
                  phone
               </div>
               <div class="col-6">
                  {{ customer.phone }}
               </div>
            </div>
            <div class="row">
               <div class="col-6">
                  주소
               </div>
               <div class="col-6">
                  {{ customer.address }}
               </div>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-4">
            <button type="button" class="btn btn-info" @click="goToUpdateForm">수정</button>
         </div>
         <div class="col-4">
            <button type="button" class="btn btn-light" @click="goToCustomerList">목록</button>
         </div>
         <div class="col-4">
            <!-- @click에 등록된 delInfo는 함수이다 -->
            <button type="button" class="btn btn-danger" @click="delInfo">삭제</button>
         </div>
      </div>
   </div>
</template>

<script>
   import axios from 'axios';

   export default {
      data() {
         return {
            customer : {}
         }
      },
      created() {
         // customerList에서 query로 값을 넘겼기 때문에 query로 받아야한다
         // route는 component 별로 분리된 네트워크정보
         
         let selected = this.$route.query.customerId;
         this.getCustomerInfo(selected);
      },
      methods : {
         async getCustomerInfo(id) {
            let result = await axios.get(`/api/customers/${id}`)
                                    .catch(err => console.log(err));
            this.customer = result.data;
         },
         async delInfo() {
            let result = await axios.delete(`/api/customers/${this.customer.id}`)
                                    .catch(err => console.log(err));
                                    
            console.log(result.data);
            let sqlRes = result.data;
            if(sqlRes.affectedRows >= 1 && sqlRes.changedRows == 0) {
               alert("정상적으로 처리되었습니다.");
               this.goToCustomerList();
            } else {
               alert("삭제되지 않았습니다.");
            }
         },
         goToCustomerList() {
            // 리다이렉트와 같은 효과
            this.$router.push({ name : 'customerList' });
         },
         goToUpdateForm() {
            this.$router.push({ name : 'customerUpdate', params : { customerId : this.customer.id }})
         },

      }
   }
</script>