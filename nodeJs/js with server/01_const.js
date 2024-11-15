//^ const.js

// ! 객체안에 값을 재 할당 하는 것은 가능함
// 객체는 참조타입이다
const user = {
   "id" : "Kim",
   "age" : 2
};

user.id = "Kang";
user.age = 20;
user.ssn = "981015";

user = {};  // ! 객체 자체를 바꾸는것은 불가능함

console.log(user);