<!-- components/PageContent.vue -->

<template>
   <table>
      <thead>
         <tr>
            <th>제목</th>
            <td>{{ title }}</td>
            <th>조회수</th>
            <td>{{ readInfo }}</td>
         </tr>
      </thead>
      <tbody>
         <tr>
            <th>작성자</th>
            <td>{{ writer }}</td>
            <th>작성일자</th>
            <td>{{ regdate }}</td>
         </tr>
         <tr>
            <th>내용</th>
            <td colspan="3">{{ content }}</td>
         </tr>
      </tbody>
      <tfoot>
         <tr>
            <td colspan="4">
               <button type="button" v-on:click="updateInfo">업데이트</button>
            </td>
         </tr>
      </tfoot>
   </table>
</template>

<script>
   export default {
      //props : ["title", "count", "writer", "regdate", "content"],
      props : {
         title : String,   // title의 값을 받을 때 string타입으로 받고싶어
         count : { 
            type : Number, // count의 타입 지정
            default : 0    // 값을 안넘겨 줬을 때 기본값
         },
         writer : {
            type : [String, Object],   // String나 Object 두개 다 허용
            default : function() {  // Object일 경우 함수를 이용해야함
               return {first : 'Adward', second : 'Ian'}
            }
         },
         regdate : {
            required : true,  // 얘는 필수값으로 넘어와야함 !!
            validator : function(value) { // 유효성 체크 값의 범위, 값의 정규표현식 체크하는 것
               // yyyy-MM-dd
               let format = /[1-2][0-9][0-9][0-9]-[0-1][0-9]-[0-3][0-9]/
               return format.test(value);
            }
         },
         content : String
      },
      computed : {
         readInfo() {
            return this.count + 1;
         }
      },
      methods : {
         updateInfo() {
            // 이벤트 전달
            // 이벤트를 부모한테 보낼 때 전달하고자 하는 데이터를 함께 보내며ㅛㄴ 된다
            this.$emit('update-info', this.readInfo);
         }
      },
   }
</script>