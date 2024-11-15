// 06_crypto.js

const crypto = require("crypto");
const data = "pw1234";

// sha가 가장 최근 알고리즘이다
// 그 전에는 sha256알고리즘을 사용했는데 이미 깨졌음
// sha512는 최대 길이가 512이다.
let encData = crypto.createHash("sha512") // sha512라는 알고리즘이 있는데 그걸 통해서 암호화를 진행하겠다 !
                     .update(data)  // 출력길이 => 실제 데이터 길이와 출력되는 데이터 길이는 달라야한다 * 유사성이 떨어져야함*
                     .digest("base64");
                     //.digest("hex"); // base64보다 더 길다 !!  

console.log(encData)

// salt => 의미없는 랜덤값
// 원래 데이터 + 의미없는 랜덤값을 섞어버림 그러면 어떤 알고리즘인지 안다 하더라고 의미없는 값이 섞여 있기 때문에 암호화가 좀 더 강화되었다.
// 비밀번호는 단방향 암호화를 적용해야한다.