// router/user_router.js
// 라우팅 => 사용자의 요청(URL + Method) + Service + View -> 사용자의 요청에 어떤 서비스를 실행해서 어떤 페이지에 돌려줄지 결정하는 것! 
// 라우팅입장에서는 서비스 내부가 어떻게 돌아가는지 아무것도 모른다
// 라우팅은 사용자가 요청한 값을 어떻게 처리할지 처리된 결과값을 어디로 뿌려줄지만 결정한다 !!

const express = require("express");
const router = express.Router();
const userService = require("../service/user_service")

// 전체조회
router.get("/users", async (req, res) => {
   // let userList = await userService.findAll(); // findAll은 비동기임 -> 클라이언트한테 정보를 제공하기 위해서는 서비스에서 실행되서 결과를 받아오고 나서 그 값을 클라이언트한테 전달 가능
   // res.send(userList);

   // Promise 방법을 사용하면 좋은 점은 보안 !! 사용자한테 error가 났다는건 노출하지만 정확한 error의 값은 숨길 수 있음
   userService
      .findAll()
      .then(list => {
         res.send(list);
      })
      .catch(err => { 
         res.status(500).send("Fail Process")
      })
});

// 단건조회
router.get("/users/:no", async (req, res) => {
   let userNo = req.params.no;
   let info = await userService.findByUserNo(userNo);
   
   res.send(info);
});

// 등록
router.post("/users", async (req, res) => {
   let newObj = req.body;
   let result = await userService.createNewUser(newObj);
   
   res.send(result);
});

// 수정
// [{}, no]
router.put("/users/:no", async  (req, res) => {
   let userNo = req.params.no
   let infoObj = req.body

   let result = await userService.updateUserInfo(userNo, infoObj);

   res.send(result);
});

// 삭제
router.delete("/users/:no", async (req, res) => {
   let userNo = req.params.no;
   let info = await userService.delUserInfo(userNo);

   res.send(info);
});

module.exports = router;