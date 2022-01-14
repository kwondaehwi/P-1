const express = require("express");
const path = require("path");

const app = express();
const db_config = require(__dirname + '/mysql.js');
const conn = db_config.init();

db_config.connect(conn);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/getInfo", (req, res) => {
    conn.query('SELECT * FROM post', (err,rows) => {
      if(err) throw err;
      res.json({data:rows})
    });
})


app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running ..."));