<!-- views/ComputedWatch.vue -->

<template>
   <div>
      <input type="number" v-model="price">원
      <br>
      <input type="number" v-model="count">개
      <p>과세 금액 : {{ amount }}</p>
      <p>부가세 10% : {{ tax }}</p>
      <p>결제 금액 : {{ total }}</p>
   </div>
</template>

<script>
// const computed = {   // return이 있어야한다 
//    data() {
//       return {
//          price : 0,
//          count : 0
//       }
//    },
//    computed : { // 새로운 데이터를 생성하는데 함수형태로 진행
//       amount() {
//          return this.price * this.count;
//       },
//       tax() {
//          return this.amount * 0.1;
//       },
//       total() {
//          return this.amount + this.tax;
//       }
//    },
   
// };

const watch = {   // watch는 return이 존재하지 않음 
   data() {
      return {
         price: 0,
         count : 0,
         amount : "",
         tax : "",
         total : "",
      }
   },
   watch : {
      price() {
         this.amount = this.price * this.count;
      },
      count() {
         this.amount = this.price * this.count;
      },
      amount() {
         this.tax = this.amount * 0.1;
         this.total = this.amount + this.tax;
      }
   }
};


export default watch;
</script>

<style>

</style>