// database/board_mapper.js

const mysql = require("mysql");
const sqlList = require("./sqls/board.js"); 

console.log(process.env); // sqlㅇ 항목을 불러오는지 확인하기..  노드에서 디비에 접속할 때 권한 인코딩 하지않은 스타일로 p191
const connectionPool = mysql.createPool({
   host : process.env.MYSQL_HOST,
   port : process.env.MYSQL_PORT,
   user : process.env.MYSQL_USER,
   password : process.env.MYSQL_PWD,
   database : process.env.MYSQL_DB,
   connectionLimit : process.env.MYSQL_LIMIT,
   debug : true
}); 

const query = (alias, values) => {
   return new Promise((resolve, reject) => {
      let executeSql = sqlList[alias]; 

      connectionPool.query(executeSql, values, (err, results, fields) => {
         if(err) {
            console.log(err);
            reject({err});
         } else {
            resolve(results);
         }
      });
   })
}

module.exports = {
   query,
}