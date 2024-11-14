// sql.js
// 이 곳은 sql 쿼리문만 작성할꺼임!!!!!!!!

const customerList = 
`SELECT  id,
         name,
         email,
         phone,
         address
FROM     customers
ORDER BY id`;

// 단건조회
const customerInfo = 
`SELECT  id,
         name,
         email,
         phone,
         address
FROM     customers
WHERE id = ?`;

// 등록
// SET 의 경우 colum 명과 값이 필요한데 객체{} 타입으로 표현 {'name'=null, 'phone' = '010-4578-4512'}
// why? colum 명과 값은 하나로 무조건 묶어서 다녀야 하는데 이런경우 객체 타입으로 가져와야 한 덩어리로 인식 
// 그래서 set 절의 ?은 객체 타입으로 값을 넣어줘야 한다.
const customerInsert = 
`INSERT INTO customers
 SET ? `; 

// 수정
// 하나의 쿼리에 객체, 단일값 이렇게 두개(? 개수) 가 들어오는 경우는 배열[]로 들어와야 한다. 
/* [{'name'='Hong' , 'phone' = '010-4578-4512'},1] */
const customerUpdate = 
`UPDATE customers
SET ?
WHERE id = ?`;

// 삭제
const customerDelete = 
`DELETE FROM customers
WHERE id = ? `;

/* *
   * 1) ? 갯수
   * 1-1) 1개 : 단일 값
   * 1-2) 2개 이상 : 배열
   * 
   * 2) ? 앞의 컬럼의 유무 = 명확하게 어느 colum에 들어갈지 정해져 있나 아닌가
   * 2-1) 명확하게 colum이 없는 경우(e.g set ?) = 객체
   * 2-2) 명확하게 colum이 있는 경우  = 기본 데이터 타입(숫자, 문자, 날짜 등)
*/

module.exports = {
   customerList,
   customerInfo,
   customerInsert,
   customerUpdate,
   customerDelete
};