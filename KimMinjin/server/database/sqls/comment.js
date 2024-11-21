// Table : t_comment_board

// 단건조회
const commentList = 
`SELECT  no,
         writer,
         content,
         created_date,
         updated_date,
         bno
FROM     t_comment_board
WHERE    bno = ?`

// 등록
const commentInsert = 
`INSERT INTO t_comment_board
SET ?`;

// 수정
const commentUpdate = 
`UPDATE t_comment_board
SET ?
WHERE no = ?`;

// 삭제
const commentDelete = 
`DELETE FROM t_comment_board 
WHERE no = ?`;

// []면 배열, 
module.exports = {
   commentList,
   commentInsert,
   commentUpdate,
   commentDelete
}