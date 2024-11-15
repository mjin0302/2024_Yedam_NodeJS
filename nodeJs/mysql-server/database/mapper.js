// mapper.js
// 이곳은 mapper역활을 할꺼임
// 전체조회든 등록, 수정, 삭제 어떤것이든 상관없이 메소드가 1개이면 된다

const mysql = require("mysql"); // mysql연결
const sql = require("./sqls/sql.js"); // 우리가 등록 한 쿼리문

// connection = 서버와 디비 사이에 연결된 통로(필요할 때만 필요한 정보 요청)
// connection Pool = 하나의 넓은 공간을 만들고 디비와 연결한 커넥션 모음(미리 예약해놓음)
const pool = mysql.createPool({  // 동시 다발적으로 들어오는 접속에 대응하기 위함
   // 경로에 대한 정보만 주면 해당 모듈이 알아서 할게 ~ 란 느낌쓰 ~
   host : process.env.MYSQL_HOST,
   port : process.env.MYSQL_PORT,
   user : process.env.MYSQL_USER,
   password : process.env.MYSQL_PWD,
   database : process.env.MYSQL_DB,
   connectionLimit : process.env.MYSQL_LIMIT
}); 

// query는 두가지가 필요함
// alias => 전체조회 조건(전체조회는 조건이 없다.), values => 단건조회 조건
// alias => app.js에서 보낸 customerList
const query = (alias, values) => {
   // promise => 비동기 작업을 기다리고 있다가 결과를 반환해줌?
   return new Promise((resolve, reject) => { // await거는거임.. 엥..?
      let excuteSql = sql[alias];
      console.log(excuteSql);
      pool.query(excuteSql, values, (err, results) => {
         // 실제로 실행한 결과를 반환
         if(err) {
            console.log(err);
            reject({err});
         } else {
            resolve(results);
         }
      });
   }); 
};

module.exports = {
   query
};