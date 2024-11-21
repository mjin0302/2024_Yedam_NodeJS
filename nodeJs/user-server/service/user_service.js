// Business 로직
// service/user_service.js

const mysql = require("../database/mapper.js"); // 쿼리문 작성한 파일 모듈로 불러오기

// 전체조회
const findAll = async () => {
   let list = await mysql.query("userList");
   return list;
}

// 단건조회
const findByUserNo = async (userNo) => {
   let list = await mysql.query("userInfo", userNo);
   let info = list[0];
   return info;
}

// 등록
const createNewUser = async (userInfo) => {
   let result = await mysql.query("userInsert", userInfo);
   if(result.insertId > 0) {
      return { user_no : result.insertId };
   } else {
      return {};
   }
}

// 수정
const updateUserInfo = async (userNo, updateInfo) => {
   let data = [updateInfo, userNo];
   let result = await mysql.query("userUpdate", data);

   let returnData = {};
   if(result.changedRows > 0) {
      returnData.target = { "user_no" : userNo };
      returnData.result = true;
   } else {
      returnData.result = false;
   }
   return returnData;
}

// 삭제
const delUserInfo = async (userNo) => {
   let result = await mysql.query("userDelete", userNo);
   if(result.affectedRows == 1 && result.changedRows == 0) {
      return { "result" : "success", "user_no" : userNo};
   } else {
      return { "result" : "fail" };
   }
}

// 필요한 서비스만 호출하고 db와 연결은 끊어짐
module.exports = {
   findAll,
   findByUserNo,
   createNewUser,
   updateUserInfo,
   delUserInfo
};