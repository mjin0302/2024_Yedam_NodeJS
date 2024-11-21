// app.js => route(control역활)
require("dotenv").config({ path : "./database/mysql.env"});

const express = require("express");
const app = express();
const mysql = require("./database/mapper.js");

// content-type : application/json
app.use(express.json());

app.listen(3000, () => {
   console.log("Server Start!");
});

// 전체조회
app.get("/customers", async (req, res) => {
   let list = await mysql.query("customerList"); // 디비에 있는거 내놔 !!
   res.send(list);
});

// 단건조회
// select문 자체가 원래 여러건을 조회하는것이라서 결과값이 배열임
app.get("/customers/:id", async (req, res) => {
   let selected = req.params.id;
   // select를 한 결과가 여러건이라 배열로 넘어옴 그래서 배열을 깨트려줘야한다
   let info = (await mysql.query("customerInfo", selected))[0];
   res.send(info);
});

// 등록
/** 결과
 * "affectedRows": 1,
 * "insertId": 47,
 * "serverStatus": 2,
 * "protocol41": true,
 */
app.post("/customers", async (req, res) => {
   let newObj = req.body;
   console.log(newObj);

   let info = await mysql.query("customerInsert", newObj);
   res.send(info);
});

// 수정
/**
 * "fieldCount": 0,
   "affectedRows": 1,
   "insertId": 0,
   "serverStatus": 2,
   "warningCount": 0,
   "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
   "protocol41": true,
   "changedRows": 1
*/
app.put("/customers/:id", async (req, res) => {
   let newObj = req.body; // {}
   let selected = req.params.id;

   let info = await mysql.query("customerUpdate", [newObj, selected])
   res.send(info);
});

// 삭제
// "affectedRows": 1 && "changedRows": 0 => 넘어온 결과값중에 이렇게되면 삭제임
app.delete("/customers/:id", async (req, res) => {
   let selected = req.params.id;
   let info = await mysql.query("customerDelete", selected);
   res.send(info);
});