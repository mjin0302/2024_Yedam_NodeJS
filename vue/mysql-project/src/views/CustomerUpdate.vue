<!-- views/CustomerUpdate.vue -->
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
         async updateCustomer() {
            // 이미 있는 객체에서 빼는건 어렵지만, 새로운 데이터를 만들어서 보내는건 쉽다 
            // 그러므로 저장할 데이터를 객체로 새로 생성해서 넘길꺼다
            let updateData = {
               name : this.info.name,
               email : this.info.email,
               phone : this.info.phone,
               address : this.info.address
            }
            let result = await axios.put(`/api/customers/${this.info.id}`, updateData)
                                    .catch(err => console.log(err))
            let sqlRes = result.data;
            if(sqlRes.changedRows > 0) {
               alert('수정되었습니다.');
            } else {
               alert('수정되지 않았습니다.');
            }
         }

      }
   }
</script>

<style>

</style>