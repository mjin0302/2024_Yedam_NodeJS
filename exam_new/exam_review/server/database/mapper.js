const mysql = require('mysql');
const sqlList = require('./sql.js');

const connectionPool = mysql.createPool({
  host : process.env.MYSQL_HOST,
  port : process.env.MYSQL_PORT,
  user : process.env.MYSQL_USER,
  password : process.env.MYSQL_PWD,
  database : process.env.MYSQL_DB,
  connectionLimit : process.env.MYSQL_LIMIT,
  debug : true
});

// Promise -> 골격?비동기 작업을 하는걸 내 안에 들고있고 그걸 기반으로 처리한다?
// 어싱크 어웨잇은 에러를 처리하지 못한다. 
const query = (alias, values)=>{
  return new Promise((resolve, reject)=>{
    let executeSql = sqlList[alias];
    connectionPool.query(executeSql, values, (err, results)=>{
      if(err) {
        reject({err});
      }else{
        resolve(results);
      }
    });
  });
};

module.exports = {
  query,
}