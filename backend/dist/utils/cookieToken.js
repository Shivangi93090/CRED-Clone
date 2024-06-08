"use strict";

var cookieToken = function cookieToken(user, res, message) {
  var token = user.getJwtToken();
  var options = {
    expires: new Date(Date.now() + process.env.COOKIE_TIME * 24 * 60 * 60 * 1000),
    httpOnly: true
  };
  user.password = undefined;
  res.status(200).cookie("token", token, options).json({
    message: message,
    token: token,
    user: user
  });
};
module.exports = cookieToken;