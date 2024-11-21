<!-- views/CustomerList.vue -->
<!--  -->
<!--  --><!--  --><!--  --><!--  --><!--  --><!--  -->
<template>
   <div class="container">
      <table class="table text-center">
         <caption>Total : {{ count }}</caption>
         <thead>
            <tr>
               <th>No</th>
               <th>아이디</th>
               <th>이름</th>
               <th>연락처</th>
            </tr>
         </thead>
         <tbody>
            <template v-if="count != 0">
               <!-- 페이지에서 페이지 불러내는 것 => router -->
               <tr v-for="(info, idx) in customerList" :key="info.id" v-on:click="goToCustomerInfo(info.id)">
                  <td>{{ idx + 1 }}</td>
                  <td>{{ info.id }}</td>
                  <td>{{ info.name }}</td>
                  <td>{{ info.phone }}</td>
               </tr>
            </template>
            <tr v-else>
               <td colspan="4" class="text-center">💦 현재 데이터가 존재하지 않습니다.💦</td>
            </tr>
         </tbody>
         <tfoot>

         </tfoot>
      </table>
   </div>
</template>

<script>
// 화면 랜더링되고 데이터가 도착해서 반영되는 것 새로고침이 없다
import axios from 'axios'; // => Ajax 언제끝날지 명확하게 모른다 그래서 가장 빨리 해줘야한다
   export default {
      data() {
         return {
            customerList : []
         }
      },
      computed : {
         count() { // 새로 생성된 데이터가 아니라 customerList의 길이를 가져옴
            return this.customerList.length
         }
      },
      created() {
         // 컴포넌트가 초기화할 데이터 호출
         // 실제로created에서 작업한 것이 어디까지 가는지 알 수 없어서 함수를 따로 만들어서 호출하는 방법으로 사용함
         this.getCustomerList();
      },
      methods : {
         async getCustomerList() {
            // result => 서버의 응답 + 네트워크 정보가 포함되어있다
            let result = await axios.get('/api/customers')  // http://localhost:8081/api/customers
                                    .catch(err => console.log(err))
            this.customerList = result.data; // 실제 서버가 응답한 데이터                              
         },
         goToCustomerInfo(id) {  // 단건조회 => 아이디 값을 어떻게 넘기냐? query와 params를 통해서 가능하지 ~
            // $붙은 것은 숨겨진 필드 특별한 목적을 가지고 접근하는 경우를 제외하고, 원래는 몰라야 할 속성들?
            // vue자체가 내부에 직접접근해도 좋은 대상과 숨겨야 할 필드를 구분했다 
            // push => 내가 보고자 하는 페이지를 밀어 넣는 것이라고 생각하자 => name을 이용해서 컴포넌트 호출 가능 , path속성을 이용해서 호출 가능
            // query 방식 => http://localhost:8081/customerInfo?customerId=2
            
            // vue가 가지고있는 router내부를 돌리는것 (router폴더를 돌림)
            // router을 사용해서 컴포넌트를 선택한다
            // router에 접근하고 싶으면 내 프로젝트 router폴더에 index.js를 찾아라 
            // 메뉴판 -> router, 메뉴 -> router폴더 안에 있는 것
            this.$router.push({ name : 'customerInfo', query : { customerId : id } }) 

            // params 방식 => /customerInfo/:customerId
            //  => pathvaliable방식은 무조건 값이 넘어가야 할 경우에만 사용해야한다 값이 똑바로 들어가지 않으면 찾지를 못한다
            // this.$router.push({ name : 'customerInfo', params : { customerId : id } });

            // 라우터는 페이지 호출하는 것 뿐만아니라 매개변수로 값을 넘길 수 있따?
            // query로 넘겼으면 query로 받아야하고 params로 넘겼으면 params로 받아야한다.
            // query : { key : value } => ?key=value : 값이 있어도되고 없어도 되면 추천
            // params
            // 1) route의 path 속성 : '/target/:uId' => path에 정의가 먼저 되어야한다
            // 2) params : { uId : value } => /target/value 값이 무조건 있어야 하는 경우에는 params를 사용하자!! 
         }
      },
   }
</script>