<!-- components/PageTitle.vue -->
<!-- 자손 컴퍼넌트 -->

<template>
   <div>
      <h2>{{ title }}</h2>
   </div>
</template>

<script>
   export default {
      // data() {
      //    return {
      //       "title" : "Hello, World ! 💨"
      //    }
      // },
      props : ['title'], // 부모가 넘겨준 값들 -> 배열이거나 객체이거나 둘중 하나 객체는 여러가지 설정땜에 복잡함, 가장 디폴트하게 사용하는것이 배열 부모가 넘겨주는 값은 여러개일수도 있음
      created() {
         console.log("PageTitle.vue Created")
      },
      mounted() {
         console.log("PageTitle.vue Mounted");
      },
   }
</script>

<style>

</style>