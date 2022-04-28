const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
require("dotenv").config();

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
  }
);

const db = mysql.createConnection({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/getUsers", (req, res) => {
  db.query(`SELECT * FROM users`, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

app.post("/registerUser", (req, res) => {
  const username = req.body.username;
  const password = req.body.saltPassword;
  db.query("INSERT INTO users(username, password)VALUES(?,?)", [
    username,
    password,
  ]);
});

app.listen(3001, () => {
  console.log("running server on 3001");
});
