<!-- components/CommonComponent.vue -->

<template>
   <div>
      <!-- Component가 가지는 HTML -->
   </div>
</template>

<script>
   // 자바스크립트 영역
   // Component를 관리하는 Vue 객체 정의
   export default {
      data() { // 함수는 단순히 값을 정의하느게 아니라 코드를 이용해서 값을 정ㅎㄴㄴ
         let today = new Date(),
         return {
            year : today.getFullYear(),
            month : today.getMonth() + 1,
            day : today.getDate(),
         }
      },
      computed : {
         AfterYear() {
            return this.year + 1;
         }
      },
      methods : {},  // vue가 사용하는 모든 종류의 함수
      watch : {   // 데이터 변경에 따른 추가 작업 정의
         month() {
            if(this.month < 10) {
               this.month = "0" + this.month;
            }
         }
      }
   }
</script>

<style lang="scss" scoped>

</style>  