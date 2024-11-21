<template>
  <nav>
    <HeaderComponent/>
  </nav>
  <router-view/>
</template>

<script>
import HeaderComponent from './layouts/HeaderComponent.vue';
export default {
  components : {
    HeaderComponent,
  }
}
</script>

<style>

</style>
