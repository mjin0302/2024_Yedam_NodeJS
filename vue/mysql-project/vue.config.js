// 일반적인 설정은 여기 파일과 무관하다 
// vue cli -> https://cli.vuejs.org/config/#devserver-proxy
const { defineConfig } = require('@vue/cli-service')
const serverOrigin = 'http://localhost:3000';
module.exports = defineConfig({
  transpileDependencies:true,
  devServer : {
    proxy : {
      '^/api' : { // 정규표현식이다 '^' -> 네트워크 통신의 시작이 /api로 시작하는 모든 api를 대처하겠다
        target : serverOrigin,  // 변경하고자 하는 origin
        changeOrigin : true,  // 적용하겠다
        ws : false, // web 소켓 vue가 가지고 있는 proxy를 기본으로 사용한다, 웹 소켓은 사용X -> 왜냐? 계속 딜레이 걸어서
        pathRewrite : {'^/api' : '/'} // 프록시를 설정할 대상들에 대해서 vue내부에 사용하는 경로 /api를 -> / 로 변경해서 통신할꺼야
      },
    }
  }
});
