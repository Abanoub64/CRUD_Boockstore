const bcrypt = require("bcrypt");

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const comparepassword = (password, hash) => {
  console.log(typeof password);
  console.log(typeof hash);
  return bcrypt.compare(password, hash.toS);
};

module.exports = { comparepassword, hashPassword };
