<!-- Vue Component => veiw, data, code 삼종셋트~~~ -->
<!-- 컴포넌트는 기능 단위  -->
<template>
   <!-- 주의! 하나의 태그만 등록(부모태그 하나여야만함 자식태그는 얼마든지되도 노상관) -->
   <div>
      <label for=""><input type="text" v-model="msg"></label>
      <p>{{ msg }}</p>
   </div>
</template>

<script>
   export default {  // 내보내기
      name : "VueComponent",
      data() {
         return {
            msg : "2024-11-15", // v-mode와 바인딩
         }
      }
   }
</script>

<style>
   p {
      background-color: bisque;
   }
</style>