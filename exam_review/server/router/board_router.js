const express = require('express');
const router = express.Router();
const boardService = require('../service/board_service.js');

// 전체조회
router.get('/boards', async (req, res)=>{
  let boardList = await boardService.findAllBoard();
  res.send(boardList);
});

// 단건조회
router.get('/boards/:no', async (req,res)=>{
  let boardNo = req.params.no;
  let info = await boardService.findBoardByNo(boardNo);
  res.send(info);
});

// 등록
router.post('/boards', async(req, res)=>{

});

// 수정
router.put('/boards/:no', async(req, res)=>{
  // 1) no
  let boardNo = req.params.no;

  // 2) updateInfo
  let updateInfo = req.body; // JSON으로 보내는 데이터
  let result = await boardService.updateBoardInfo(boardNo, updateInfo);
  res.send(result);
});

// 게시글의 댓글 목록 조회
// 경로에 :이 있으면 값임 :을 사용하려면 
router.get('/boards/:bno/comments', async (req,res)=>{
  let boardNo = req.params.bno; // :bno = params 랑 같다 (경로에 :을 사용 했으면 params를 이용해서 들고올 수 있음)
  let info = await boardService.findCommentsByNo(boardNo); // -> boardService는 위쪽에 require로 불러온 것임
  res.send(info);
})

module.exports = router;