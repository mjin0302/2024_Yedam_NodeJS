// Business 로직
// service/board_service.js

const mysql = require("../database/board_mapper.js"); // 쿼리문 작성한 파일 모듈로 불러오기

// 전체조회
const findAllBoard = async () => {
   let list = await mysql.query("boardList");
   return list;
}

// 단건조회
const findByBoardNo = async (boardNo) => {
   let list = await mysql.query("boardInfo", boardNo);
   let info = list[0];
   return info;
}

// 등록
const createNewBoard = async (boardInfo) => {
   let result = await mysql.query("boardInsert", boardInfo);
   if(result.insertId > 0) {
      return { board_no : result.insertId };
   } else {
      return {};
   }
}

// 수정
const updateBoardInfo = async (boardNo, updateInfo) => {
   let data = [updateInfo, boardNo];
   let result = await mysql.query("boardUpdate", data);

   let returnData = {};
   if(result.changedRows > 0) {
      returnData.target = { "board_no" : boardNo };
      returnData.result = true;
   } else {
      returnData.result = false;
   }
   return returnData;
}

// 삭제
const delBoardInfo = async (boardNo) => {
   let result = await mysql.query("boardDelete", boardNo);
   if(result.affectedRows == 1 && result.changedRows == 0) {
      return { "result" : "success", "board_no" : boardNo};
   } else {
      return { "result" : "fail" };
   }
}

// 필요한 서비스만 호출하고 db와 연결은 끊어짐
module.exports = {
   findAllBoard,
   findByBoardNo,
   createNewBoard,
   updateBoardInfo,
   delBoardInfo
};