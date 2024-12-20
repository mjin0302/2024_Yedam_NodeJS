// 02_timers.js

const timeout = setTimeout(() => {
   let today = new Date();
   let year = today.getFullYear();
   let month = ('0' + (today.getMonth() + 1)).slice(-2);
   let day = ('0' + today.getDate()).slice(-2);

   let hour = ('0' + today.getHours()).slice(-2);
   let minute = ('0' + today.getMinutes()).slice(-2);

   let current = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`
   console.log(current);
}, 2000);   // 4

let count = 0;
// interval은 반드시 아이값이 필요하다
const interval = setInterval(() => {
   console.log("interval %d", count++)
   if(count == 3) {
      clearInterval(interval) // & 해당 함수는 매개변수가 필요하다 !!
   }
}, 1000);   // 3

const immediate = setImmediate(() => {
   console.log("즉시 실행 요청");
});   // 1

console.log("마지막 코드");   // 2