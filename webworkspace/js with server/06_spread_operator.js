// 펼침 연산자 : Spread Operator
let arr1 = [4, 5, 6]
let arr2 = [1, 2, 3];


let arr3 = [];
arr1.forEach(val => arr3.push(val));
arr2.forEach(val =>  arr3.push(val));

console.log("arr3", arr3)

let newArr = [...arr1, ...arr2];
console.log("펼침연산자 => ", newArr);

let str = "CD";
let strAry = [...str];
console.log("strAry", strAry);