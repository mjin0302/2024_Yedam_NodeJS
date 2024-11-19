<!-- components/StoreComponent.vue -->
<template>
   <div>
      <form>
         <label>
            제품ID :
            <input type="text" v-model="prodInfo.product_id">
         </label>
         <label>
            제품명 :
            <input type="text" v-model="prodInfo.product_name">
         </label>
         <label>
            카테고리 :
            <input type="radio" value="A" v-model="prodInfo.category"> A
            <input type="radio" value="B" v-model="prodInfo.category"> B
         </label>
         <br>
         <button type="button" @click="addCart">추가</button>
      </form>
      <table>
         <thead>
            <caption>total : {{ total }}</caption>
            <tr>
               <th>카테고리</th>
               <th>제품ID</th>
               <th>제품명</th>
            </tr>
         </thead>
         <tbody>
            <tr :key="info.product_id" v-for="(info) in products">
               <td>{{ info.category }}</td>
               <td>{{ info.product_id }}</td>
               <td>{{ info.product_name }}</td>
            </tr>
         </tbody>
      </table>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            prodInfo : {
               product_id : '',
               product_name : '',
               category : 'A',
            }
         }
      },
      computed : {
         products() {
            return this.$store.state.cart;
         },
         total() {
            return this.$store.getters.cartCount;
         }
      },
      methods : {
         addCart() {
            // 새로운 객체를 만들어서 복사하는 이유는 기존 객체와 연결을 완전히 끊기 위해서 새로운 객체를 생성해서 복사한다
            // 얕은 복사, 깊은복사 개념 정리
            let obj = {
               product_id : this.prodInfo.product_id,
               product_name : this.prodInfo.product_name,
               category : this.prodInfo.category
            }
            // dispatch를 기반으로 중앙저장소에?
            // 참조 타입은 변수값을 넘기는 작업 금지 ㅣㅏㄴㅇ런아ㅣㅎ런아ㅣ허ㅏ히어리ㅏㄴㅇ커파ㅓㅇ투ㅠㅓㅏ
            // 참조타입은 변수에 저장되어있는것이 주소값이다 
            // 변수를 이용해서 그대로 넘겨버리면 같은 객체를 참조하고 있는 주소값이 넘어간다
            // 객체가 어디에 있는지 주소를 공유하는 느낌이 된다 그래서 받아온 주소값이 변경되면 기존에 참고하고 있던 주소값도 변경이 되기때문에 
            // & 객체를 복사할때는 새로운 객체를 만들어서 복사해줘야한다
            this.$store.dispatch("addProduct", obj); // dispatch -> actions에 등록된 함수를 호출 할 때 사용하는 메소드
         }
      }
   }
</script>

<style lang="scss" scoped>

</style>