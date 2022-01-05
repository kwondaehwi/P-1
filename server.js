const express=require("express");
const path=require("path");

const app=express();

app.use("./static", express.static(path.resolve(__dirname,"frontend","static")));   //express static 은 express 의 기본 s미들웨어 함수
app.get("./*",(req,res)=>{
    res.sendFile(path.resolve("frontend","index.html"));
});
app.listen(process.env.PORT||3000,()=>console.log("server is running~~~"));

