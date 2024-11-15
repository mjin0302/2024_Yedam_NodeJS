// app.js
require("dotenv").config({ path : './database/mysql.env'}); // DB에 대한 환경변수 저장하는 파일

const express = require("express");
const app = express();
const userRouter = require("./router/user_router.js")

// 미들웨어 => 보조함수
app.use(express.json()); // application/json

// 라우터 등록
app.use("/", userRouter);

app.listen(3000, () => {
   console.log("Server Start !");
   console.log("http://localhost:3000")
});

// 라우팅 -> 사용자가 요청한것을 어떻게 대응 할껀지 (사용자가 요청하는것은 조회, 등록, 수정 등등이 있다)
app.get("/", (req, res) => {
   res.send("Welcome !!")
});