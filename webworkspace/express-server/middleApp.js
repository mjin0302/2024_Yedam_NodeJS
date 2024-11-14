// middleApp.js
// 서버끼리 통신하는것은 상관이 없다
// cors는 브라우저가 컨트롤한다 
const express = require("express");
const cors = require("cors");

const app = express();

// 모든 요청에 응답
// same origin policy
app.use(cors());

// 지정한 요청에 대해서만 응답
const corsOptions = {
   // 프로토컬 부터 포트까지가 origin임
   origin : "http://192.168.0.18:5500", // vscode(LiveServer) 포트번호인 5500은 그대로 유지 허용은 현재 내 아이피만 허용
   optionsSuccessStatus : 200
}

app.use(cors(corsOptions));

// ? application/x-www-form-urlencoded
//   └ 가장 기본 content type
//   └ get이든 post이든 상관없이 사용 가능한 타입
// 현재 서버에서 위 content type를 사용하려면 urlencoded가 등록이 되어야한다.
app.use(express.urlencoded({extended : false}));

app.post("/info", (req, res) => {
   // 얘가 보내는 데이터는 json타입이 아님 {}없음 text타입임
   res.send(`keyword : ${req.body.search}`);
})

app.listen(3000, () => {
   console.log("http://localhost:3000")
})
// json은 정확히 body부분이 존재해야한다
// 멀티파트는 get방식으로 보낼 때 header의 길이를 초과한다.
