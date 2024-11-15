// 01_console_class.js

const fs = require("fs");
const { Console } = require("console");

const logOutput = fs.createWriteStream("./logs/stdout.log");
const errOutput = fs.createWriteStream("./logs/stderr.log");

// log를 남기고 싶으면 세팅이 되어야한다 ! 
const logger = new Console({ stdout : logOutput, stderr : errOutput});

let count = 5;
logger.log("count : %d", count);
logger.error(`count : ${++count}`);