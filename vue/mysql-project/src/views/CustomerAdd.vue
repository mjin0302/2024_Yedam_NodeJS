<!-- views/CustomerAdd.vue -->
<!-- 여기는 page. -->

<template>
   <div class="container">
      <div class="row">
         <label>이름</label>
         <input type="text" v-model.trim="info.name">
         <div class="form-text" :class="{'warning' : nameOk}">이름이 입력되지 않았습니다.</div>
         <div class="form-text" :class="{'warning' : !nameOk}">사용 가능한 이름입니다.</div>
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
         <button type="button" v-on:click="addCustomer" :disabled="!(nameOk && phoneOk)" class="btn btn-info">등록</button>
      </div>
   </div>
</template>

<script>
   import axios from 'axios';
   export default {
      data() {
         return {
            info : {
               name : null,
               email : null,
               phone : null,
               address : null,
            }
         }
      },
      methods : {
         async addCustomer() {
            let result = await axios.post('/api/customers', this.info) 
                                    .catch(err => console.log(err))
            let sqlRes = result.data;
            let customerId = sqlRes.insertId;
            if(customerId > 0) { // 
               alert("정상적으로 등록되었습니다.");
               this.$router.push({name : 'customerInfo', query : {customerId : customerId}})
            } else {
               alert("정상적으로 등록되지 않았습니다.")
            }
         }
         // async addCustomer() {
         //    let result = await axios.post('', this.info)
         //                            .catch(err => console.log(err))
         // },
         // async fetchVer() {
         //    let result = await fetch('', {
         //       method : 'POST',
         //       headers : {
         //          'content-type' : 'application/json'
         //       },
         //       body : JSON.stringify(this.info)
         //    })
         //    .then(res => res.json())
         //    .catch(err => console.log(err));
         // }
      },
      computed : {
         nameOk() {
            return this.info.name != null && this.info.name != '';
         },
         phoneOk() {
            return this.info.phone != null && this.info.phone != '';
         }
      }
   }
</script>

<style>
   .warning {
      display: none;
   }
</style>