// execute_moudle.js
// 선언해놓은 모듈을 불러와 실행하는 곳?

// require로 불러와야 module로 인식한다. "./" -> 같은 경로의 의미이다.
const cal = require('./calculator.js');   // 해당 파일의 모든 모듈을 다 사용하고자 할 때
const { add } = require("./calculator.js")   // 지금 여기서 사용하고자 하는 대상만 골라낼 때
let result = cal.add(10, 5); // require를 기반으로해서 파일의 경로의 모듈을 읽어드린 값을 변수에 담는다
console.log(result);

result = add(20, 50);
console.log(result);