// router/user.js
// 계정과 관련된 기능을 추가한다.

const express = require("express");
const router = express.Router(); // 독립된 공간이라서 app.js와 공유가 안된다

router.get("/", (req, res) => {
   res.send("회원 정보 조회");
});

router.post("/insert", (req, res) => {
   res.send("회원 등록")
})

module.exports = router;