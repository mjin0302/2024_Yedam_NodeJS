// Table : t_board_board

// 전체조회
const boardList = 
// `SELECT  no,
//          title,
//          writer,
//          content,
//          created_date,
//          updated_date
// FROM     t_board_board
// ORDER BY no`;
`SELECT  no,
         title,
         writer,
         content,
         created_date,
         updated_date,
         ( SELECT COUNT(no) FROM t_comment_board c WHERE c.bno = tbb.no) as comment
FROM     t_board_board tbb;
`

// 단건조회
const boardInfo = 
`SELECT  no,
         title,
         writer,
         content,
         created_date,
         updated_date
FROM     t_board_board
WHERE    no = ?`;

// 등록
const boardInsert = 
`INSERT INTO t_board_board
SET ?`;

// 수정
const boardUpdate = 
`UPDATE t_board_board
SET ?
WHERE no = ?`;

// 삭제
const boardDelete = 
`DELETE FROM t_board_board 
WHERE no = ?`;

// []면 배열, 
module.exports = {
   boardList,
   boardInfo,
   boardInsert,
   boardUpdate,
   boardDelete
}