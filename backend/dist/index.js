"use strict";

var app = require("./app");
require("dotenv").config();
var connectwithDb = require("./config/db");

//connect with database
connectwithDb();
app.listen(process.env.PORT, function () {
  console.log("Server is running at port: ".concat(process.env.PORT));
});