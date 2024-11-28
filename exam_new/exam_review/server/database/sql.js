const boards = require('./sqls/boards.js');
const comments = require('./sqls/comments.js');

// 각 테이별로 나눠져있는 쿼리를 하나의 파일로 합쳐줌
module.exports = {
  ...boards,  // 객체를 깨트릴 수 있다. 
  ...comments
}