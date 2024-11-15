// middleApp.js
// 서버끼리 통신하는것은 상관이 없다
// cors는 브라우저가 컨트롤한다 
const express = require("express");
const cors = require("cors");
const session = require("express-session")// 별도의 모듈이라 읽어들여야함

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

// json은 정확히 body부분이 존재해야한다
// 멀티파트는 get방식으로 보낼 때 header의 길이를 초과한다.
app.post("/info", (req, res) => {
   // 얘가 보내는 데이터는 json타입이 아님 {}없음 text타입임
   res.send(`keyword : ${req.body.search}`);
})

app.listen(3000, () => {
   console.log("http://localhost:3000")
})

// 서버에서 온전히 session에 대한 정보를 들고있지않음
// 세션에 저장되는 값들은 일부 로컬에 등록되어있어야한다
// 이 때 저장할 때 암호화가 되어야한다
let sessionSetting = session({
   secret : "$#1235TSecdx", // 암호화 키
   resave : false,   // 세션에 저장여부 (변경사항에 따라서 저장 할껀지 말껀지?) 우리는 간단하게 로그인 정보만 담을꺼라 빈번하게 일어날 필요는 없음
   saveUninitialized : true,
   // 세션의 아이디 값은 클라이언트가 가지고 있어야한다.
   cookie : {  
      httpOnly : true, // 자바스크립트가 해당 쿠키에 접속을 막기위해 사용 (자바스크립트 기반으로 해당 쿠키에 대한 접속을 막는다)
      secure : false, // 보안
      maxAge : 60000 // 쿠키 유효기간 
   }
});
// 미들웨어는 라우터 위에 존재해야한다
app.use(sessionSetting); // 세션에 관련된 미들웨어를 등록

// & 세션은 변수가 아님 !!
app.post("/login", (req, res) => {
   const { id, pwd } = req.body; // { id : "ongsim", pwd : "1234" }
   req.session.user = id; // req.session.user => user는 원하는대로 변경 가능하다.
   req.session.pwd = pwd;
   req.session.save(function(err) { // req.session.save => 세션에 저장하는 작업!! 꼭 필요!!
      if(err) throw err;
      res.redirect("/"); // 로그인 성공이 되고나서 작업
   });
});

app.get("/", (req, res) => {
   res.send(req.session);  // 세션정보 전체를 보낸다 !! 누구한테? 클라이언트한테 !!!!
});

app.get("/logout", (req, res) => {
   req.session.destroy();
   res.redirect("/");
});
