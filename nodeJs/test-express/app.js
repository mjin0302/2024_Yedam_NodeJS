const express = require("express"); // express모듈을 불러낸다
const app = express();  // express를 실행시킨다

// 서버에 접근하는 origin은 같다 
// 서버가 제공하는 서비스
// get은 메소드임 get방식으로 접근하는 메소드방식
   // & "/" => 접속하는 경로, 
   // & get => get 메소드로 접근하겠다. 
app.get("/", (req, res) => {
   res.send("Server Connect");   // & 해당 경로로 접근 할 경우 어떤식으로 응답을 할껀지?
});

// & 3000 -> 포트번호
app.listen(3000, () => {
   console.log("서버가 실행됩니다.");
   console.log("http://localhost:3000");
});