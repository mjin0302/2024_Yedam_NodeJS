<!-- views/CustomerUpdate.vue -->

<!-- views/CustomerAdd.vue -->
<!-- 여기는 page. -->

<template>
   <div class="container">
      <div class="row">
         <label>아이디</label>
         <input type="text" v-model="info.id" readonly>
      </div>
      <div class="row">
         <label>이름</label>
         <input type="text" v-model.trim="info.name">
      </div>
      <div class="row">
         <label>이메일</label>
         <input type="email" v-model.trim="info.email">
      </div>
      <div class="row">
         <label>연락처</label>
         <input type="tel" v-model.trim="info.phone">
      </div>
      <div class="row">
         <label>주소</label>
         <input type="add" v-model.trim="info.address">
      </div>
      <div class="row">
         <button type="button" class="btn btn-info" v-on:click="updateCustomer" >저장</button>
      </div>
   </div>
</template>

<script>
   import axios from 'axios';
   
   export default {
      data() {
         return {
            info : {
               id : null,
               name : null,
               email : null,
               phone : null,
               address : null,
            }
         }
      },
      created() {
         // 1) 사용자가 선택한 대상의 원래 데이터 조회
         // => 단건조회
         let selected = this.$route.params.customerId;
         this.getCustomerInfo(selected);

      },
      methods : {
         async getCustomerInfo(id) {
            let result = await axios.get(`/api/customers/${id}`)
                                    .catch(err => console.log(err));
            this.info = result.data;
         },
         // 2) 사용자가 버튼을 클릭했을 때 입력한 부분을 서버로 넘겨서 저장 ~~
         // => 등록
         updateCustomer() {

         }

      }
   }
</script>

<style>

</style>