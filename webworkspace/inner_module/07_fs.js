// 07_fs.js

const fs = require("fs");
const data = "Hello, World!!";

         // & 파일 저장 경로 및 파일명, 파일 안에 들어갈 ㄴㅐ용, 인코딩방식
fs.writeFile("./sample.txt",data, "utf8", (err, result) => {
   if(err) {
      throw err;
   }
   console.log("파일 쓰기 완료!");
});

console.log("작업 종료");

fs.readFile("./sample.txt", "utf8", (err, result) => {
   if(err) {
      throw err;
   }
   console.log(result);
});