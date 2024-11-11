// 03_sort.js

// ! sort.정렬은 원본 데이터가 변경된다
// ! 텍스트 정렬에 특화되어있다.
let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();
console.log("fruits => ", fruits); // Apple, Banana, Mango, Orange

let points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log("points => ", points); // 1, 5, 10, 25, 40, 100

points.sort(function(a, b) {
   return a - b;
});
console.log("정렬 후", points);

let emps = [
   {  
      eid : 200,
      name : "King"
   },
   {
      eid : 100,
      name : "Edward"
   },
   {
      eid : 300,
      name : "Han"
   }
];

emps.sort((pre, next) => {
   return pre.eid - next.eid;
});
console.log(emps);