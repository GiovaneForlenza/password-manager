const crypto = require("crypto");
const secret = process.env.REACT_APP_TOKEN_SECRET;

function encrypt(password) {
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv("aes-256-ctr", Buffer.from(secret), iv);
  const encPassword = Buffer.concat([cipher.update(password), cipher.final()]);
  return { iv: iv.toString("hex"), password: encPassword.toString("hex") };
}

function decrypt(encryptedPass) {
  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",
    Buffer.from(secret),
    Buffer.from(encryptedPass.iv, "hex")
  );
  const decryptedPass = Buffer.concat([
    decipher.update(Buffer.from(encryptedPass.password, "hex")),
    decipher.final(),
  ]);
  return decryptedPass.toString();
}

module.exports = { encrypt, decrypt };
