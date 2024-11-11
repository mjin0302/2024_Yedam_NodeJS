// ^ 02_declare_fun.js

// 1) 함수 선언문 => var방식임
function plus(x, y) {
   console.log("1번째 함수");
   return (x + y);
}
console.log(plus(1,2,3));

function plus(x, y, z) {   // 함수 호이스팅
   console.log("2번째 함수");
   return (x + y + z);
}

// * 자바스크립트의 함수는 데이터로 처리된다
var plus = function(x, y, z) {
   console.log("3번째 함수");
   return (x + y + z);
}

console.log(plus(1,2,3));

// 2) 함수표현식
// * 이 함수를 누구도 수정할 수 없도록 하기 위함
// 함수는 그 자체로 값으로 등록된다 
// ! const방식은 함수를 먼저 선언한 뒤 사용가능하다
const printMsg = function(keyword) {
   return "result : " + keyword; 
} 

// 3) 화살표 함수 -> 익명함수이다. 대체로 콜백이나, 이벤트 핸들로 함수로 많이 쓰인다. () => {}

let array = [1, 2, 3, 4, 5];
array.forEach((data, idx, array) => {
   let msg = `${idx} : ${data}, ${array}`; // 템플릿 리터럴
   console.log("msg => ", msg)
});


const multi = (x, y) => x * y;
console.log("multi => ", multi(10, 5));