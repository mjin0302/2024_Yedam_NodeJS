<!-- root객체의 정의 -->
<!-- 라우팅에서 호출하고 변경하는 조금 큰 규모의 component -->
<template>
  <nav>
    <a href="http://www.naver.com">네이버  |  </a> <!-- http가 붙어 있으면 절대경로이다 ?-->
    <router-link to="/"> Home  |  </router-link> <!-- 상대 경로는 vue의 라우터를 거친다 ? -->
    <router-link to="/about">About  |  </router-link>
    <router-link to="/data-binding"> DataBinding  |  </router-link>
    <router-link v-bind:to="{ name : 'listBind' }"> ListBinding  |  </router-link>
    <router-link :to="{ path : 'ifBinding' }"> IfBinding  |  </router-link>
    <router-link to="/onEvent"> OnEvent  |  </router-link>
    <router-link to="/comWatch"> ComputedWatch  |  </router-link>
  </nav>
  <h1>모든 페이지에 출력</h1>
  <router-view/>  <!-- 현재에 맞는 component -->
  <hr/>
  <hr/>
  <!-- <DataBinding/> 카멜 표기법 -->
  <data-binding/><!-- 케밥 표기법 -->
</template>

<script>
  // 1) 자식 컴포넌트로 등록 => 특정 페이지의 조각을 구성 할 때
  import DataBinding from './views/DataBinding.vue';

  export default {
    components : {
      "data-binding" : DataBinding
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
