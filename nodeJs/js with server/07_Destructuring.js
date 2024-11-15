// 07_Destructuring.js
// 1) Object

let person = {
   firstName : "John",
   lastName : "Doe",
   age : 37,
   email : "john@gmail.com",
   country : "USA"
};

// person객체에서 lastName, email값만 가지고오겠다
// 필드를 구성하고 있는 것 중에서 내가 원하는것을 선택하는 것
// 선언되어있는 객체를 꼭 명시해줘야한다
let {lastName, email} = person;
console.log(lastName); // "Doe"
console.log(email);    // "john@gmail.com"

// 매개변수를 기반으로해서 함수를 실행 할 때 필요한 값을 객체에서 꺼내서 매개변수로 주겠다?
function getFullName({firstName, lastName}) {
   console.log(`${lastName}, ${firstName}`)
}
// person객체를 매개변수로 주면 함수에서 알아서 꺼내서 사용가능하네? 
getFullName(person);

// 2) Array
// 구조분해 할당 
// ! 인덱스 순으로 순차대로 들어옴
// 배열이 있는 모든값을 받아서 골라서 사용하는것을 권장함
let scores = [70, 80, 90]

let [a, b, c] = scores;

console.log(a);
console.log(b);
console.log(c);
