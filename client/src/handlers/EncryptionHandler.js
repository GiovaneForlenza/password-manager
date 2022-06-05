const crypto = require("crypto");
const secret = process.env.REACT_APP_TOKEN_SECRET;

function encrypt(password) {
  alert(password);
  // const iv = Buffer.from(crypto.randomBytes(16));
  // const cipher
}

function decrypt(encryptedPass) {}

module.exports = { encrypt, decrypt };
