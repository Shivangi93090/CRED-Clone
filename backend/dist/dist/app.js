"use strict";

var express = require("express");
var app = express();
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var cors = require("cors");

//for swagger documentation
var swaggerui = require("swagger-ui-express");
var YAML = require("yamljs");
var swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerDocument));
var ErrorHandler = require("./middleware/errorHandler");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(morgan("tiny"));
app.use(cookieParser());
var userRoute = require("./routes/user");
var cardRoute = require("./routes/card");
var reminder = require("./utils/reminder");
app.use("/api/user", userRoute);
app.use("/api/cards", cardRoute);
app.use("/", function (req, res) {
  res.send("Welcome to the backend of Cred Clone");
});
app.use(ErrorHandler);
reminder();

// Wildcard route to handle any other requests
app.all("*", function (req, res) {
  res.status(404).send("Page not found");
});
module.exports = app;