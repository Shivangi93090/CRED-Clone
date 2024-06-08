"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../middleware/user"),
  isLoggedIn = _require.isLoggedIn;
var _require2 = require("../controllers/card.controller"),
  addCard = _require2.addCard,
  getAllCards = _require2.getAllCards,
  getCardById = _require2.getCardById,
  payBill = _require2.payBill,
  getAllStatements = _require2.getAllStatements,
  getStatementsYearMonth = _require2.getStatementsYearMonth,
  postStatements = _require2.postStatements,
  getSmartStatementData = _require2.getSmartStatementData,
  getSmartStatementYearMonth = _require2.getSmartStatementYearMonth;
var _require3 = require("../middleware/luhnValidation"),
  luhnValidation = _require3.luhnValidation;

// routes
router.post("/", isLoggedIn, luhnValidation, addCard);
router.get("/", isLoggedIn, getAllCards);
router.get("/:card_id", isLoggedIn, getCardById);
router.post("/:cardNumber/pay", isLoggedIn, luhnValidation, payBill);
router.get("/:cardNumber/statements", isLoggedIn, luhnValidation, getAllStatements);
router.get("/:cardNumber/statements/:year/:month", isLoggedIn, luhnValidation, getStatementsYearMonth);
router.post("/:cardNumber/statements/:year/:month", luhnValidation, postStatements);
router.get("/:cardNumber/smartStatement", isLoggedIn, luhnValidation, getSmartStatementData);
router.get("/:cardNumber/smartStatement/:year/:month", isLoggedIn, luhnValidation, getSmartStatementYearMonth);
module.exports = router;