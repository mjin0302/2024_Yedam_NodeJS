<template>
  <div>
    <!-- 레이아웃 잡기 -->
    <!-- header component -->
    <!-- 링크를 기분으로 라우터 내부에 있는 ~~~를 선택할 수 있다
    어느것을 보여줄지 선택
    선택에 따라서 동적으로 바뀐다 
    라우터 전용 화면 디스플레이 태그를 사용해야한다 
    경로와 컴포넌트를 연결하는 작업을 한다 
    내부에 실제 서버가 존재하지 않지만 실제 서버가 존재하는 것 처럼 착각을 일으킴
    라우터를 기반으로 어떻게 데이터를 넘기냐? query, params를 이용해서 가능하디-->
    <router-link to="/customerList">전체조회</router-link>
    <router-link to="/customerAdd">등록</router-link>

    <!-- content component -->
    <router-view/>

    <!-- footer component -->
  </div>
</template>

<script>

</script>

<style>

</style>