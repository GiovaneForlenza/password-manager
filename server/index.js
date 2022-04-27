const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  }),
  express.urlencoded({ extended: true }),
  function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  },
  cookieParser()
);

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Password",
  database: "DbName",
});

app.listen(3001, () => {
  console.log("running server on 3001");
});
