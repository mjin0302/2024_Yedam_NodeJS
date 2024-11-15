// reduce.js
// 누적 가능하다

// 콜백함수와, init값을 받을 수 있음
let points = [40, 100, 1, 5, 25, 10];
let sum = points.reduce((total, currentVal) => {
   return total + currentVal; // 0 + 40
}, 0);   // 초기값

console.log(sum);

let total = 0;
for(let point of points) {
   total = total + point;
}

console.log(total);