// router/board_router.js
// 라우팅 => 사용자의 요청(URL + Method) + Service + View -> 사용자의 요청에 어떤 서비스를 실행해서 어떤 페이지에 돌려줄지 결정하는 것! 
// 라우팅입장에서는 서비스 내부가 어떻게 돌아가는지 아무것도 모른다
// 라우팅은 사용자가 요청한 값을 어떻게 처리할지 처리된 결과값을 어디로 뿌려줄지만 결정한다 !!
const express = require("express");
const router = express.Router();
const userService = require("../service/board_service")

// 전체조회
router.get("/board", async (req, res) => {
   userService
      .findAllBoard()
      .then(list => {
         res.send(list);
      })
      .catch(err => { 
         res.status(500).send("Fail Process")
      })
});

// 단건조회
router.get("/board/:no", async (req, res) => {
   let boardNo = req.params.no;
   let info = await userService.findByBoardNo(boardNo);
   
   res.send(info);
});

// 등록
router.post("/board", async (req, res) => {
   let newObj = req.body;
   let result = await userService.createNewBoard(newObj);
   
   res.send(result);
});

// 수정
// [{}, no]
router.put("/board/:no", async  (req, res) => {
   let boardNo = req.params.no
   let infoObj = req.body

   let result = await userService.updateBoardInfo(boardNo, infoObj);

   res.send(result);
});

// 삭제
router.delete("/board/:no", async (req, res) => {
   let boardNo = req.params.no;
   let info = await userService.delBoardInfo(boardNo);

   res.send(info);
});

module.exports = router;