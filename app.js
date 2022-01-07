// node_modules 에 있는 express 관련 파일을 가져온다.
const express = require('express')

// express 는 함수이므로, 반환값을 변수에 저장한다.
const server = express()


server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// 3000 포트로 서버 오픈
server.listen(3000, function() {
    console.log("start! express server on port 3000")
})