"use strict";

var express = require("express");
var router = express.Router();
var _require = require("../middleware/user"),
  isLoggedIn = _require.isLoggedIn;
var _require2 = require("../controllers/user.controller"),
  register = _require2.register,
  login = _require2.login,
  getProfile = _require2.getProfile,
  logout = _require2.logout,
  updateProfile = _require2.updateProfile,
  updateAuthCode = _require2.updateAuthCode;

// routes
router.post("/signup", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/profile", isLoggedIn, getProfile);
router.get("/authCode", isLoggedIn, updateAuthCode);
router.patch("/profile", isLoggedIn, updateProfile);
module.exports = router;