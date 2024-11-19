<!-- components/RefCompone -->
<template>
   <div>
      <input type="number" v-model.number="content">
      <p>{{ content }}</p>
      <!-- 엘리먼트가 가지고있는 속성값을 가지고 오는 것 -->
      <button ref="btn" @click="plusCount">더하기</button>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            content : '',     
         }
      },
      methods : {
         plusCount() {
            if((typeof this.content) == 'number') {
               let sum = this.content + 100;
               this.content = sum;
            } else {
               alert("데이터 타입의 숫자가 아닙니다.");
            }
         }
      }
   }
</script>

<style>

</style>