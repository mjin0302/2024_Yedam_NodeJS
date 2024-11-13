// Application app
// 프로그램의 시작점이다 !!
const fs = require("fs");  // & 기본모듈 파일을 읽어오는데 사용
const express = require("express");
const server = express();

const userRouter = require("./router/user.js");
server.use("/user", userRouter); // 라우터에게 대표적으로 사용할 경로를 구현해줘야한다

server.use("/img", express.static("./img")); // 정적인 파일을 처리 할 때
server.use(function(err, req, res, next) {
   res.status(500).json({statusCode : res.statusCode,
                        errMessage : err.errMessage});
});

server.get("/error", (req, res, next) => {
   next(new Error("Process Fail ! Check Data!"));
})
// ? 미들웨어 등록 -> node것이 아니라 express것임!!!!!!!!
// user -> 미들웨어를 등록하는 Method이다 !!
// 우리 서버는 json을 처리한다?
server.use(express.json());

// DB 설정
// 파일을 읽어들이지 않았는데 작업을 진행 할 수 없으니 동기식으로 진행할꺼임
const jsonFile = fs.readFileSync("data.json"); 
const jsonData = JSON.parse(jsonFile); // json타입으로 파싱하겠다 뭐를? jsonFile을 !

// target => 등록할 때 insert하는 DATA
// where => 조건을 넘겨받는 데이터
const query = (crud, target, where = null)=>{
   let result = null;
   let emps = jsonData;
   switch(crud) {
      // 조회
      case 'SELECT' :
         result = (where == null) ? emps :  emps.filter(emp => {
            return findEmp(emp, where);
         });
      break;  

      // 등록
      case 'INSERT' :
         emps.push(target);
      break;

      // 수정
      case 'UPDATE' :
         emps.forEach(emp => {
            if(findEmp(emp, where)){
               for(let field in target){
                  emp[field] = target[field];
               }
            }
         });
      break;

      // 삭제
      case 'DELETE' :
         let selected = null;
         emps.forEach((emp, idx) => {
            if(findEmp(emp, where)){
               selected = idx;
            }
         });

         emps.splice(selected, 1);
      break;
   }

   return result;
};

function findEmp(emp, where){
   let fieldNum = 0; // 총 검색조건 개수
   let selected = 0; // true인 검색조건 개수
   
   for(let field in where){
      fieldNum++;
      if(emp[field] == where[field]){
         selected++;
      }
   }
   return (fieldNum == selected);
}

// 서버?
server.listen(3000, () => {
   // 서버가 정상적으로 실행 했을 때 어떤 작업을 실행할껀지?
   console.log("Server Start");
   console.log("http://localhost:3000");
});

// 루트 경로
// 누구나 접속 할 수있고, 가장 먼저 접속되는 경로
server.get("/", (req, res) => {
   res.send("Emps");
   //res.sendFile("index.html", { root : __dirname} );
   
});

/*
   ? req.params => 처리대상 : pathvariable (params 처리라서 원하는 대로 변수 이름을 지정 할 수 있다.)
   ? req.body   => 처리대상 : JSON
   ? req.qrery  => QueryString
   
   & Content-type
   1) application/x-www-form-urlencoded
   => QueryString(질의 문자열) : key = value&key=value&...
   => req.query 속성

   2) application/json
   => JSON : {} or []
   => req.body 속성

   3) pathvariable => X
   => req.params 속성

   www.google.com/search
*/

// 전체조회 : GET, emps
server.get("/emps", (req, res) => {
   res.send(jsonData);
   res.send(query("SELECT"));
});

// 단건조회 : GET, emps/:id => pathvariable(경로에 붙는 변수)
server.get("/emps/:id", (req, res) => {
   //res.send("Emp Info");
   res.send(query("SELECT", null, {id : req.params.id}));
});

// 등록     : POST, emps
server.post("/emps", (req, res) => {
   console.log(req.body);
   // res.send("Emp Add");
   res.send(query("INSERT", req.body));

});

// 수정     : PUT, emps/:id
server.put("/emps/:id", (req, res) => {
   //res.send("Emp Update");
   res.send(query("UPDATE", req.body, {id : req.params.id}));
});

// 삭제     : DELETE, emps/:id
server.delete("/emps/:id", (req, res) => {
  // res.send("Emp Delete");
   res.send(query("DELETE", null, {id : req.params.id}))
});

