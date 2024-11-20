<template>
  <div class="about">
    <template :key="info.id" v-for="(info, idx) in list">
      <p v-if="idx % 2 == 0">{{ info }}</p>
    </template>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        list : []
      }
    },
    created() { // vue 객체가 완성된 시점, 태그를 만들고 화면을 준비하는 시점
      // vue에서 cors를 무력화 시켜야함
      // 왜 뜨냐? 포트 번호가 달라서 뜨는거임
      // 임시적으로 개발할 때만 cors가 뜨지 않도록 우회하는 방법 이제 적용한다 !! => VPN
      // /api -> proxy서버가 대처하는 경로 !! vue.config.js에서 확인 가능하다
      axios.get('/api/customers')
          .then(result => {
            this.list = result.data;  // 응답데이터 뿐만 아니라 네트워크 정보와 같이 넘어온다
            console.log(result);
          })
          .catch(err => console.log(err));
    }
  }
</script>