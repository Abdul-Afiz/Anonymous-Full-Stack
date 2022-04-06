require("dotenv").config();

module.exports.PORT = 5000;
module.exports.MONGODB = process.env.DB_URL;
module.exports.secretKey = process.env.secret;
