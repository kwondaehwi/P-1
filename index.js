// const express = require("express");
// // const path = require('path');
// const app = express();

// // app.use(express.static("public"));
// app.use(express.static(__dirname + "public"));
// // app.use(express.static(path.join(__dirname, "public")));

// app.listen(8080, function () {
//   console.log("listening on 8080");
// });

// app.get("/", function (요청, 응답) {
//   응답.sendFile(__dirname + "/html/index.html");
// });

// app.use("/public", express.static(__dirname + "/public/css"));

const http = require("http");

let server = http.createServer(function (request, response) {
  response.end("<h1>hello world!</h1>");
});

server.listen(3000);
