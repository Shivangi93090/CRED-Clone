"use strict";

var mongoose = require("mongoose");
var connectwithDb = function connectwithDb() {
  mongoose.connect(process.env.DB_URL).then(console.log("DB GOT CONNECTED"))["catch"](function (error) {
    console.log("DB CONNECTION ISSUE");
    console.log(error);
    process.exit(1);
  });
};
module.exports = connectwithDb;