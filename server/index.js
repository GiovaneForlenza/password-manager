const express = require("express");
const mysql = require("mysql");
const util = require("util");

const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { rmSync } = require("fs");

require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://personal-password-manager.netlify.app/",
    ],
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
app.use(cookieParser());

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

app.post("/getUserInfo", (req, res) => {
  const username = req.body;
  db.query(
    `SELECT * FROM users WHERE username = ?`,
    [username],
    (error, rows) => {
      if (error) return error;
      res.send(rows);
    }
  );
});

app.post("/doesUsernameExist", (req, res) => {
  const username = req.body.username;
  db.query(
    `SELECT * FROM users WHERE username = ?`,
    [username],
    (error, rows) => {
      if (error) return error;
      res.send(rows);
    }
  );
});

const maxAge = 3 * 24 * 60 * 60;

app.get("/addCookie", (req, res) => {
  res.cookie("cookieName", "cookieValue");
  res.send("hello");
});

app.get("/setLoginCookies", (req, res) => {
  const userId = req.body;
  createCookie(userId, res);
});

function createCookie(userId, res) {
  const token = createToken(userId);
  res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
}

function createToken(id) {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
}

app.post("/registerUser", (req, res) => {
  const { id, username, saltPassword } = req.body;
  db.query("INSERT INTO users(userId, username, password)VALUES(?,?,?)", [
    id,
    username,
    saltPassword,
  ]);
});

app.post("/updateServiceInfo", (req, res) => {
  const { passwordId, serviceName, username, email, link, password, dateTime } =
    req.body;
  try {
    db.query(
      "UPDATE passwords SET serviceName = ?, username = ?, email = ?, link = ?, password = ?, dateTimeLastUpdated = ? WHERE passwordId = ?",
      [serviceName, username, email, link, password, dateTime, passwordId],
      (error) => {
        if (error) res.send(error);
        res.send("completed");
      }
    );
  } catch (err) {
    console.log(err);
  }
});

app.post("/getStoredPasswordsFromUser", (req, res) => {
  const { userId } = req.body;

  db.query(
    `SELECT * FROM passwords WHERE userId = ?`,
    [userId],
    (error, rows) => {
      if (error) return error;
      res.send(rows);
    }
  );
});

app.post("/createServicePassword", (req, res) => {
  const {
    passwordId,
    userIdLogged,
    serviceName,
    username,
    email,
    link,
    encryptedPassword,
    dateTime,
    hexColor,
  } = req.body;
  db.query(
    "INSERT INTO passwords(passwordId, userId,serviceName, username, email, link, password, passwordIv, dateTimeCreated, hexColor) values(?,?,?,?,?,?,?,?,?,?)",
    [
      passwordId,
      userIdLogged,
      serviceName,
      username,
      email,
      link,
      encryptedPassword.password,
      encryptedPassword.iv,

      dateTime,
      hexColor,
    ],
    (error) => {
      if (error) res.send(error);
      res.send("completed");
    }
  );
});

app.listen(3001, () => {
  console.log("running server on 3001");
});
