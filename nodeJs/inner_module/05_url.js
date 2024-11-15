// 05_url.js

const url = require("url");

let whatwg = new URL("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash");

console.log("whatwg => ", whatwg);
let datas = whatwg.searchParams; // URLSearchParams 클래스

datas.forEach((data, idx) => {
   console.log("datas => ", data, idx);
})