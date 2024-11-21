<!-- layouts/HeaderComponent.vue -->

<template>
   <ul class="nav justify-content-center">
      <li class="nav-item">
         <router-link to="/userList" class="nav-link active">전체조회</router-link>
      </li>
      <li class="nav-item">
         <router-link to="/userAdd" class="nav-link">등록</router-link>
      </li>
      <li class="nav-item">
         <router-link to="" class="nav-link" href="#">Link</router-link>
      </li>
   </ul>
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>

</style>