const bcrypt = require("bcryptjs");
console.log(bcrypt.hashSync("test1234", 10));
