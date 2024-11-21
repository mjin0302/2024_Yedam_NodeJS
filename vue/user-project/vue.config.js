const { defineConfig } = require('@vue/cli-service')
const server = 'http://localhost:3000'
module.exports = defineConfig({
  transpileDependencies: true,
  //cort => proxy setting
  // 1) 
  devServer : {
    port : 8099,  // vue port바꾸는 법
    proxy : {
      '^/api' : { // 정규표현식이다 '^' -> 네트워크 통신의 시작이 /api로 시작하는 모든 api를 대처하겠다
        target : server,  // 변경하고자 하는 origin
        changeOrigin : true,  // 적용하겠다
        ws : false, // web 소켓 vue가 가지고 있는 proxy를 기본으로 사용한다, 웹 소켓은 사용X -> 왜냐? 계속 딜레이 걸어서
        pathRewrite : {'^/api' : '/'} // 프록시를 설정할 대상들에 대해서 vue내부에 사용하는 경로 /api를 -> / 로 변경해서 통신할꺼야
      },
    }
  }
})
