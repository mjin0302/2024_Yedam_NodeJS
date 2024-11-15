// 04_filter_map.js

// ? 원본데이터는 건들지 않는다!!!!!!!!!!!

let persons = [
   {
      name : "유재석",
      point : 78,
      city: "서울"
   },
   {
      name : "김종국",
      point : 92,
      city: "서울"
   },
   {
      name : "양세찬",
      point : 76,
      city: "제주"
   },
   {
      name : "하하",
      point : 81,
      city: "서울"
   }
];

// 1) filter => 원본 배열이 가지는 데이터타입과 똑같음(객체 배열이면 객체배열, 숫자배열이면 숫자배열)
//    단, 배열의 크기가 줄어들 가능성 있음
//    boolean타입을 리턴해야한다
let scores = persons.filter(function(data, idx) { return data.point > 80 });
console.log("scores => ", scores);

// 2) map => 원본배열과 데이터 타입이 다를 수 있음
//    단, 배열의 크기는 동일
//    들어가야할 값이 누락된 경우 
// ! callback함수 => 함수 그 자체가 넘어가서 내부에서 실행하는 것 기억하기 
let newList = persons.map(function (data, idx) {
   return {
      no : ((idx + 1) * 100),
      name : data.name,
      city : data.city
   }; // 새로운 배열이 가지는 값
   // data.no = ((idx + 1) * 100)
   // return data;
});
console.log("newList => ", newList);
