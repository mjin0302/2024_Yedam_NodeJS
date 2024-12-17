<template>
    <div>
      <HeaderComponent />
      <router-view :key="$route.fullPath"/>
      <FooterComponent />
    </div>
  </template>
  <script>
    import HeaderComponent from '@/layouts/BoardHeader.vue';
    import FooterComponent from '@/layouts/FooterComponent.vue';
  
    export default {
      components  : { 
        HeaderComponent, 
        FooterComponent 
      }
    }
  </script>