const express = require("express");

// application
let app = express();

// 路由 route / router
// app.Method(Path, Hendler)
// Method(GET,POST,PUT,DELETE,PATCH...)
// Handler 是一個函式，會有兩個參數request,response
app.get("/", (req, res) => {
  res.send("Express 首頁");
});

app.get("/member", (req, res) => {
  res.send("會員頁面");
});

app.listen(3001, () => {
  console.log("express app 啟動囉");
});
