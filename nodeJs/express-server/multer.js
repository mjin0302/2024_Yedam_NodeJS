// multer은 파일 업로드할 때 사용하는 module

const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

// 클라이언트가 보내준 파일을 어디에 셋팅 할껀지
// 저장하는 경로, 저장하는 이름을 설정 해줘야한다.
const storage = multer.diskStorage({
  // destination -> , req -> , file -> 사용자가 보내준 파일, cb -> 우리가 어디에 파일을 저장할껀지 설정하는 것
  destination : function(req, file, cb){
    cb(null, 'uploads/');
  },
  // 유니크한 이름을 더해줌 유니크한건 시간임!!

  filename : function(req, file, cb){
    file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8")
    cb(null, new Date().valueOf() + path.basename(file.originalname));
  }
});

const upload = multer({ storage : storage });

// 단일값을 처리할껀지 다중값을 처리할껀지
// 단일값은 -> single
// 다중값은 -> ?
// 멀터가 먼저 미디어 파일은 일괄처리하고 나머지 값을은 콜백함수를 이용해 개발자가 처리한다
// 멀터는 파일밖에 처리 못함 (우리가 지정한 경로로 옮기는 것 밖에 못함)
// 파일은 멀터가 먼저 처리함 나머지(텍스트.. 등)는 개발자가 처리
// avatar => html파일에서 input태그의 name속성이랑 똑같아야한다
app.post('/profile', upload.single('avatar'), (req, res)=>{
  console.log(req.file);
  console.log(req.body);
});

// 최대크기 저장
// photos => html파일에서 input태그의 name속성이랑 똑같아야한다
app.post('/photos', upload.array('photos', 12), (req,res)=>{
  for(let file of req.files){
    console.log(file);
  }
});

app.listen(5000, ()=>{
  console.log('Server Start!!');
});