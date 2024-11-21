// router/comment_router.js
// 라우팅 => 사용자의 요청(URL + Method) + Service + View -> 사용자의 요청에 어떤 서비스를 실행해서 어떤 페이지에 돌려줄지 결정하는 것! 
// 라우팅입장에서는 서비스 내부가 어떻게 돌아가는지 아무것도 모른다
// 라우팅은 사용자가 요청한 값을 어떻게 처리할지 처리된 결과값을 어디로 뿌려줄지만 결정한다 !!
const express = require("express");
const router = express.Router();
const commentService = require("../service/comment_service.js");

router.get("/comment/:bno", async (req, res) => {
   let commentBno = req.params.bno;
   commentService
      .findByBnoList(commentBno)
      .then(list => {
         res.send(list);
      })
      .catch(err => { 
         res.status(500).send("Fail Process")
      })
});

// 등록
router.post("/comment", async (req, res) => {
   let newObj = req.body;
   let result = await commentService.createNewComment(newObj);
   
   res.send(result);
});

// 수정
// [{}, no]
router.put("/comment/:no", async  (req, res) => {
   let commentNo = req.params.no
   let infoObj = req.body

   let result = await commentService.updateCommentInfo(commentNo, infoObj);

   res.send(result);
});

// 삭제
router.delete("/comment/:no", async (req, res) => {
   let commentNo = req.params.no;
   let info = await commentService.delCommentInfo(commentNo);

   res.send(info);
});

module.exports = router;