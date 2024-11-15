const mysql = require("mysql"); // 1) 사용 할 디비 모듈 불러오기
const sqlList = require("./sqls/users.js"); // 2) sql문 작성한 모듈 불러오기

// 디비 연결하는 수영장 생성
// https://www.npmjs.com/package/mysql#pool-options -> 참고하기
const connectionPool = mysql.createPool({
   host : process.env.MYSQL_HOST,
   port : process.env.MYSQL_PORT,
   user : process.env.MYSQL_USER,
   password : process.env.MYSQL_PWD,
   database : process.env.MYSQL_DB,
   connectionLimit : process.env.MYSQL_LIMIT,
   debug : true
}); 

// 소통하기위해 우리가 보내는 쿼리문이 필요함
// alias => 실행 할 쿼리문
// values => 물음표 값
const query = (alias, values) => {
   // 비동기 방식으로 콜백함수를 호출해서 처리한다
   return new Promise((resolve, reject) => {
      // sqlList -> 객체{}
      // js는 객체를 불러오는 방법이 2가지가 있다
      // let obj = { "id" : "Hond", "age" : 1234, "first name" : "H" }; -> 얘는 원래 텍스트이다
      // 필드명이 공백이거나 _이 들어갈때는 obj["first name"] 이게 정석 !
      // 내부에 id 필드 값을 선택할때는 obj["id"]이렇게가 원래 방식 !
      // obj.id는 obj["id"]를 생략한것이다 .을 이용해 접근한 방식은 리터럴값만 가능하다.
      // sqlList[alias] => alias에 있는 select, insert 등 sql종류가 필요해서 이 방법을 써야한다. 즉, 동적으로 불러오는게 가능하다.
      // sqlList.alias => sqlList["alias"]로 인식한다 즉, alias가 필드명이여야 가능 이미 등록되어있는 필드명은 ㄱㅊ 변경가능성이 있는 것은 ㄴㄴ
      let executeSql = sqlList[alias]; 

      // executeSql => 사용할 쿼리, values => 물음표 안에 들어갈 값
      connectionPool.query(executeSql, values, (err, results, fields) => {
         // console.log(fields); // 내부 실행한 결과에 대한 정보
         if(err) {
            console.log(err);
            reject({err});
         } else {
            resolve(results);
         }
      }); // connectionPool을 기반으로 디비에 넘겨준다
   })
}

module.exports = {
   query,
}