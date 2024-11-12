// calculator.js
// 간단한 사칙연산 기능을 가진 모듈
// 함수를 선언해 놓는곳?

const defaultNum = 1;

function add(x, y) {
   return x + y;
}

function minus(x, y) {
   return x - y;
}

function multi(x, y) {
   return x * y;
}

function divide(x, y) {
   return x / y;
}

// 다른쪽에서 해당 파일에 import한다고 해도 독립적인 공간을 가진다
// 외부에서 접근할 수 있는 대상
module.exports = {
   add,  // -> "add" : add 이거임!! (함수 add를 add에 값으로 집어넣겠다)
   "mul" : multi
};

