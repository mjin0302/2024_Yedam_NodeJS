<!-- layouts/DefaultHeader.vue -->
<template>
   <nav class="nav">
      <router-link class="nav-link" to="/customerList">전체조회 | </router-link> <!-- router-link태그의 기본은 a태그임 -->
      <router-link class="nav-link" to="/customerAdd">등록</router-link>
   </nav>
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>

</style>