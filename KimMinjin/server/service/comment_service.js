// Business 로직
// service/comment_service.js

const mysql = require("../database/comment_mapper.js"); // 쿼리문 작성한 파일 모듈로 불러오기

// 전체조회
const findByBnoList = async (bno) => {
   let list = await mysql.query("commentList", bno);
   return list;
}

// 등록
const createNewComment = async (commentInfo) => {
   let result = await mysql.query("commentInsert", commentInfo);
   if(result.insertId > 0) {
      return { user_no : result.insertId };
   } else {
      return {};
   }
}

// 수정
const updateCommentInfo = async (commentNo, updateInfo) => {
   let data = [updateInfo, commentNo];
   let result = await mysql.query("commentUpdate", data);

   let returnData = {};
   if(result.changedRows > 0) {
      returnData.target = { "comment_no" : commentNo };
      returnData.result = true;
   } else {
      returnData.result = false;
   }
   return returnData;
}

// 삭제
const delCommentInfo = async (commentNo) => {
   let result = await mysql.query("commentDelete", commentNo);
   if(result.affectedRows == 1 && result.changedRows == 0) {
      return { "result" : "success", "comment_no" : commentNo};
   } else {
      return { "result" : "fail" };
   }
}

// 필요한 서비스만 호출하고 db와 연결은 끊어짐
module.exports = {
   findByBnoList,
   createNewComment,
   updateCommentInfo,
   delCommentInfo
};