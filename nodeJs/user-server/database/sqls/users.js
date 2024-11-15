// Table : t_users
// 여기는 쿼리문만 작성한다 !!

// 전체조회
const userList = 
`SELECT  user_no,
         user_id,
         user_pwd,
         user_name,
         user_gender,
         user_age,
         join_date
FROM     t_users
ORDER BY user_no`;

// 단건조회
const userInfo = 
`SELECT  user_no,
         user_id,
         user_pwd,
         user_name,
         user_gender,
         user_age,
         join_date
FROM     t_users
WHERE    user_no = ?`;

// 등록
const userInsert = 
`INSERT INTO t_users
SET ?`;

// 수정
const userUpdate = 
`UPDATE t_users
SET ?
WHERE user_no = ?`;

// 삭제
const userDelete = 
`DELETE FROM t_users 
WHERE user_no = ?`;

// []면 배열, 
module.exports = {
   /**
    * {}안에서 변수가 나열되어있는 형태면 결국 아래 형태인데 단축해서 사용하는 것임!
    * userList : ``,
    * userInfo : ``,
    * userInsert : ``,
    * userUpdate : ``,
    * userDelete : ``
    */
   userList,
   userInfo,
   userInsert,
   userUpdate,
   userDelete
}