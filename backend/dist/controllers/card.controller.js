"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var mongoose = require("mongoose");
var bigPromise = require("../middleware/bigPromise");
var Card = require("../model/card");
var Profile = require("../model/profile");
var ProfileCard = require("../model/profileCard");
var Transaction = require("../model/transaction");
var CustomError = require("../utils/customError");
var bcrypt = require("bcryptjs");
var daysInMonth = function daysInMonth(month, year) {
  var temp = new Date(year, month + 1, 0);
  return parseInt(temp.getDate());
};
exports.addCard = bigPromise( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var _req$body, authCode, cardOwnerName, cardNumber, expiryMonth, expiryYear, cvv, existingCard, profileCard, profile, profileAssociated, hash, card, _profileCard, _profile, isMatch, currrentProfile, firstError;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, authCode = _req$body.authCode, cardOwnerName = _req$body.cardOwnerName, cardNumber = _req$body.cardNumber, expiryMonth = _req$body.expiryMonth, expiryYear = _req$body.expiryYear, cvv = _req$body.cvv;
          if (!(!expiryMonth || !expiryYear || !cvv)) {
            _context.next = 5;
            break;
          }
          res.statusCode = 422;
          throw new Error("All Details should be provided");
        case 5:
          _context.next = 7;
          return Card.findOne({
            cardNumber: cardNumber
          });
        case 7:
          existingCard = _context.sent;
          if (!(authCode === undefined)) {
            _context.next = 41;
            break;
          }
          if (!existingCard) {
            _context.next = 25;
            break;
          }
          _context.next = 12;
          return ProfileCard.findOne({
            cardId: existingCard._id
          });
        case 12:
          profileCard = _context.sent;
          _context.next = 15;
          return Profile.findOne({
            _id: profileCard.profileId
          });
        case 15:
          profile = _context.sent;
          if (!req.user._id.equals(profile.userId)) {
            _context.next = 21;
            break;
          }
          res.statusCode = 409;
          throw new Error("Card is Already Added");
        case 21:
          res.statusCode = 422;
          throw new Error("You're are not authorised to add this card");
        case 23:
          _context.next = 39;
          break;
        case 25:
          _context.next = 27;
          return Profile.findOne({
            userId: req.user._id
          });
        case 27:
          profileAssociated = _context.sent;
          console.log("".concat(expiryMonth, "|").concat(expiryYear, "|").concat(cvv));
          _context.next = 31;
          return bcrypt.hash("".concat(expiryMonth, "|").concat(expiryYear, "|").concat(cvv), 10);
        case 31:
          hash = _context.sent;
          _context.next = 34;
          return Card.create({
            cardOwnerName: cardOwnerName.toUpperCase(),
            cardNumber: cardNumber,
            hashedDetails: hash
          });
        case 34:
          card = _context.sent;
          card.hashedDetails = false;
          _context.next = 38;
          return ProfileCard.create({
            profileId: profileAssociated._id,
            cardId: card._id
          });
        case 38:
          res.status(200).json({
            success: true,
            card: card
          });
        case 39:
          _context.next = 77;
          break;
        case 41:
          if (!existingCard) {
            _context.next = 75;
            break;
          }
          _context.next = 44;
          return ProfileCard.findOne({
            cardId: existingCard._id
          });
        case 44:
          _profileCard = _context.sent;
          _context.next = 47;
          return Profile.findOne({
            _id: _profileCard.profileId
          });
        case 47:
          _profile = _context.sent;
          if (!req.user._id.equals(_profile.userId)) {
            _context.next = 53;
            break;
          }
          res.statusCode = 409;
          throw new Error("Card is Already Added");
        case 53:
          if (!(authCode === _profile.authCode)) {
            _context.next = 71;
            break;
          }
          _context.next = 56;
          return existingCard.compareCardDetail(expiryMonth, expiryYear, cvv);
        case 56:
          isMatch = _context.sent;
          console.log(isMatch);
          if (!(isMatch && existingCard.cardOwnerName === cardOwnerName.toUpperCase())) {
            _context.next = 67;
            break;
          }
          _context.next = 61;
          return Profile.findOne({
            userId: req.user._id
          });
        case 61:
          currrentProfile = _context.sent;
          _context.next = 64;
          return ProfileCard.create({
            profileId: currrentProfile._id,
            cardId: existingCard._id
          });
        case 64:
          res.status(200).json({
            success: true,
            existingCard: existingCard
          });
          _context.next = 69;
          break;
        case 67:
          res.statusCode = 422;
          throw new Error("Information not Matching!");
        case 69:
          _context.next = 73;
          break;
        case 71:
          res.statusCode = 422;
          throw new Error("Wrong Auth Code");
        case 73:
          _context.next = 77;
          break;
        case 75:
          res.statusCode = 422;
          throw new Error("Wrong Card Details");
        case 77:
          _context.next = 82;
          break;
        case 79:
          _context.prev = 79;
          _context.t0 = _context["catch"](0);
          if (_context.t0 instanceof mongoose.Error.ValidationError) {
            firstError = Object.values(_context.t0.errors)[0];
            res.statusCode = 422;
            next(firstError);
          } else {
            next(_context.t0);
          }
        case 82:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 79]]);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
exports.getAllCards = bigPromise( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var profile, profileCards, cardIds, cards;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Profile.findOne({
            userId: req.user._id
          });
        case 3:
          profile = _context2.sent;
          _context2.next = 6;
          return ProfileCard.find({
            profileId: profile._id
          });
        case 6:
          profileCards = _context2.sent;
          if (!(!profileCards || profileCards.length === 0)) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            success: true,
            cards: []
          }));
        case 9:
          cardIds = profileCards.map(function (profileCard) {
            return profileCard.cardId;
          });
          _context2.next = 12;
          return Card.find({
            _id: {
              $in: cardIds
            }
          });
        case 12:
          cards = _context2.sent;
          res.status(200).json({
            success: true,
            cards: cards
          });
          _context2.next = 19;
          break;
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 16]]);
  }));
  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
exports.getCardById = bigPromise( /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var card, profileAssociated, associatedUserIds;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Card.findById(req.params.card_id);
        case 3:
          card = _context3.sent;
          if (card) {
            _context3.next = 7;
            break;
          }
          res.statusCode = 404;
          throw new Error("Card not found");
        case 7:
          _context3.next = 9;
          return ProfileCard.find({
            cardId: req.params.card_id
          }).populate("profileId");
        case 9:
          profileAssociated = _context3.sent;
          associatedUserIds = profileAssociated.map(function (profile) {
            return profile.profileId.userId.toString();
          });
          if (associatedUserIds.includes(req.user._id.toString())) {
            _context3.next = 14;
            break;
          }
          res.statusCode = 404;
          throw new Error("You're not authorized to access this card");
        case 14:
          res.status(200).json({
            success: true,
            card: card
          });
          _context3.next = 20;
          break;
        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 17]]);
  }));
  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
exports.payBill = bigPromise( /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var amount, profile, profileCards, _iterator, _step, profileCard, card, transaction;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          amount = req.body.amount;
          _context4.next = 4;
          return Profile.findOne({
            userId: req.user._id
          });
        case 4:
          profile = _context4.sent;
          _context4.next = 7;
          return ProfileCard.find({
            profileId: profile._id
          });
        case 7:
          profileCards = _context4.sent;
          if (!(!profileCards || profileCards.length === 0)) {
            _context4.next = 11;
            break;
          }
          res.statusCode = 404;
          throw new Error("No cards associated with the user");
        case 11:
          _iterator = _createForOfIteratorHelper(profileCards);
          _context4.prev = 12;
          _iterator.s();
        case 14:
          if ((_step = _iterator.n()).done) {
            _context4.next = 31;
            break;
          }
          profileCard = _step.value;
          _context4.next = 18;
          return Card.findById(profileCard.cardId);
        case 18:
          card = _context4.sent;
          if (!(req.params.cardNumber === card.cardNumber)) {
            _context4.next = 29;
            break;
          }
          card.outstandingAmount -= amount;
          _context4.next = 23;
          return profile.save();
        case 23:
          _context4.next = 25;
          return card.save();
        case 25:
          transaction = new Transaction({
            amount: amount,
            vendor: "NA",
            type: "credit",
            category: "NA",
            cardNumber: card.cardNumber,
            transactionDateTime: Date.now(),
            cardId: profileCard.cardId,
            userAssociated: req.user.email
          });
          _context4.next = 28;
          return transaction.save();
        case 28:
          return _context4.abrupt("return", res.status(200).json({
            success: true,
            transaction: transaction
          }));
        case 29:
          _context4.next = 14;
          break;
        case 31:
          _context4.next = 36;
          break;
        case 33:
          _context4.prev = 33;
          _context4.t0 = _context4["catch"](12);
          _iterator.e(_context4.t0);
        case 36:
          _context4.prev = 36;
          _iterator.f();
          return _context4.finish(36);
        case 39:
          res.statusCode = 404;
          throw new Error("Requested card not found");
        case 43:
          _context4.prev = 43;
          _context4.t1 = _context4["catch"](0);
          next(_context4.t1);
        case 46:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 43], [12, 33, 36, 39]]);
  }));
  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
exports.getAllStatements = bigPromise( /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var profile, profileCards, allTransactions, _iterator2, _step2, profileCard, card, transactions;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Profile.findOne({
            userId: req.user._id
          });
        case 3:
          profile = _context5.sent;
          _context5.next = 6;
          return ProfileCard.find({
            profileId: profile._id
          });
        case 6:
          profileCards = _context5.sent;
          if (!(!profileCards || profileCards.length === 0)) {
            _context5.next = 10;
            break;
          }
          res.statusCode = 404;
          throw new Error("No cards associated with the user");
        case 10:
          allTransactions = [];
          _iterator2 = _createForOfIteratorHelper(profileCards);
          _context5.prev = 12;
          _iterator2.s();
        case 14:
          if ((_step2 = _iterator2.n()).done) {
            _context5.next = 26;
            break;
          }
          profileCard = _step2.value;
          _context5.next = 18;
          return Card.findById(profileCard.cardId);
        case 18:
          card = _context5.sent;
          if (!(req.params.cardNumber == card.cardNumber)) {
            _context5.next = 24;
            break;
          }
          _context5.next = 22;
          return Transaction.find({
            cardId: card._id
          }).select("-cardId -cardNumber").sort({
            transactionDateTime: 1
          });
        case 22:
          transactions = _context5.sent;
          allTransactions = allTransactions.concat(transactions);
        case 24:
          _context5.next = 14;
          break;
        case 26:
          _context5.next = 31;
          break;
        case 28:
          _context5.prev = 28;
          _context5.t0 = _context5["catch"](12);
          _iterator2.e(_context5.t0);
        case 31:
          _context5.prev = 31;
          _iterator2.f();
          return _context5.finish(31);
        case 34:
          if (!(allTransactions.length === 0)) {
            _context5.next = 37;
            break;
          }
          res.statusCode = 404;
          throw new Error("No transactions found for the provided card number");
        case 37:
          res.status(200).json({
            success: true,
            transactions: allTransactions
          });
          _context5.next = 43;
          break;
        case 40:
          _context5.prev = 40;
          _context5.t1 = _context5["catch"](0);
          next(_context5.t1);
        case 43:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 40], [12, 28, 31, 34]]);
  }));
  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}());
exports.getStatementsYearMonth = bigPromise( /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
    var _req$params, year, month, cardNumber, pageNumber, perPage, startingDate, endingDate, profile, profileCards, card, startIndex, statements, totalStatements, totalPages;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$params = req.params, year = _req$params.year, month = _req$params.month, cardNumber = _req$params.cardNumber;
          pageNumber = req.query.pageNumber ? parseInt(req.query.pageNumber) : 1;
          perPage = 10;
          startingDate = new Date(year, month - 1, 1);
          endingDate = new Date(year, month, 0);
          _context6.next = 8;
          return Profile.findOne({
            userId: req.user._id
          });
        case 8:
          profile = _context6.sent;
          _context6.next = 11;
          return ProfileCard.find({
            profileId: profile._id
          });
        case 11:
          profileCards = _context6.sent;
          if (!(!profileCards || profileCards.length === 0)) {
            _context6.next = 15;
            break;
          }
          res.statusCode = 404;
          throw new Error("No cards associated with the user");
        case 15:
          _context6.next = 17;
          return Card.findOne({
            cardNumber: cardNumber
          });
        case 17:
          card = _context6.sent;
          if (card) {
            _context6.next = 20;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            error: "Card not found"
          }));
        case 20:
          startIndex = (pageNumber - 1) * perPage;
          _context6.next = 23;
          return Transaction.find({
            cardId: card._id,
            transactionDateTime: {
              $gte: startingDate,
              $lte: endingDate
            }
          }).select("-cardId -cardNumber").sort({
            transactionDateTime: -1
          }).skip(startIndex).limit(perPage);
        case 23:
          statements = _context6.sent;
          _context6.next = 26;
          return Transaction.countDocuments({
            cardId: card._id,
            transactionDateTime: {
              $gte: startingDate,
              $lte: endingDate
            }
          });
        case 26:
          totalStatements = _context6.sent;
          if (!(statements.length === 0)) {
            _context6.next = 29;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            error: "No transactions found for the provided card"
          }));
        case 29:
          totalPages = Math.ceil(totalStatements / perPage);
          return _context6.abrupt("return", res.status(200).json({
            statements: statements,
            pages: totalPages,
            page: pageNumber,
            totalStatements: totalStatements
          }));
        case 33:
          _context6.prev = 33;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 36:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 33]]);
  }));
  return function (_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}());
exports.postStatements = bigPromise( /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
    var _req$params2, cardNumber, year, month, startingDate, cards, _iterator3, _step3, card, _iterator4, _step4, statement, transaction;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          if (!(!req.body.statements || req.body.statements.length === 0)) {
            _context7.next = 4;
            break;
          }
          res.statusCode = 404;
          throw new Error("Please enter at least one statement");
        case 4:
          _req$params2 = req.params, cardNumber = _req$params2.cardNumber, year = _req$params2.year, month = _req$params2.month;
          startingDate = new Date(year, month - 1, 1);
          _context7.next = 8;
          return Card.find({});
        case 8:
          cards = _context7.sent;
          _iterator3 = _createForOfIteratorHelper(cards);
          _context7.prev = 10;
          _iterator3.s();
        case 12:
          if ((_step3 = _iterator3.n()).done) {
            _context7.next = 39;
            break;
          }
          card = _step3.value;
          if (!(card.cardNumber === cardNumber)) {
            _context7.next = 37;
            break;
          }
          _iterator4 = _createForOfIteratorHelper(req.body.statements);
          _context7.prev = 16;
          _iterator4.s();
        case 18:
          if ((_step4 = _iterator4.n()).done) {
            _context7.next = 28;
            break;
          }
          statement = _step4.value;
          transaction = new Transaction({
            amount: statement.amount,
            vendor: statement.vendor.toUpperCase(),
            category: statement.category,
            type: statement.type,
            cardNumber: card.cardNumber,
            transactionDateTime: startingDate,
            userAssociated: "NA",
            cardId: card._id
          });
          card.outstandingAmount += statement.amount;
          _context7.next = 24;
          return transaction.save();
        case 24:
          _context7.next = 26;
          return card.save();
        case 26:
          _context7.next = 18;
          break;
        case 28:
          _context7.next = 33;
          break;
        case 30:
          _context7.prev = 30;
          _context7.t0 = _context7["catch"](16);
          _iterator4.e(_context7.t0);
        case 33:
          _context7.prev = 33;
          _iterator4.f();
          return _context7.finish(33);
        case 36:
          return _context7.abrupt("return", res.status(200).json({
            success: true,
            message: "Statements posted successfully"
          }));
        case 37:
          _context7.next = 12;
          break;
        case 39:
          _context7.next = 44;
          break;
        case 41:
          _context7.prev = 41;
          _context7.t1 = _context7["catch"](10);
          _iterator3.e(_context7.t1);
        case 44:
          _context7.prev = 44;
          _iterator3.f();
          return _context7.finish(44);
        case 47:
          res.statusCode = 404;
          throw new Error("Requested card not found");
        case 51:
          _context7.prev = 51;
          _context7.t2 = _context7["catch"](0);
          next(_context7.t2);
        case 54:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 51], [10, 41, 44, 47], [16, 30, 33, 36]]);
  }));
  return function (_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}());
exports.getSmartStatementData = bigPromise( /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res, next) {
    var profile, profileCards, uniqueCategories, uniqueVendors, categoryTotalAmounts, vendorTotalAmounts, _iterator5, _step5, profileCard, card, statements, _iterator6, _step6, statement, formattedCategoryData, formattedVendorData, smartStatementData;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Profile.findOne({
            userId: req.user._id
          });
        case 3:
          profile = _context8.sent;
          _context8.next = 6;
          return ProfileCard.find({
            profileId: profile._id
          });
        case 6:
          profileCards = _context8.sent;
          uniqueCategories = new Set();
          uniqueVendors = new Set();
          categoryTotalAmounts = {};
          vendorTotalAmounts = {};
          _iterator5 = _createForOfIteratorHelper(profileCards);
          _context8.prev = 12;
          _iterator5.s();
        case 14:
          if ((_step5 = _iterator5.n()).done) {
            _context8.next = 30;
            break;
          }
          profileCard = _step5.value;
          _context8.next = 18;
          return Card.findById(profileCard.cardId);
        case 18:
          card = _context8.sent;
          if (!(req.params.cardNumber === card.cardNumber)) {
            _context8.next = 28;
            break;
          }
          _context8.next = 22;
          return Transaction.find({
            cardId: card._id
          });
        case 22:
          statements = _context8.sent;
          if (!(statements.length === 0)) {
            _context8.next = 26;
            break;
          }
          res.statusCode = 404;
          throw new Error("No transactions found for the specified period");
        case 26:
          _iterator6 = _createForOfIteratorHelper(statements);
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              statement = _step6.value;
              uniqueCategories.add(statement.category);
              uniqueVendors.add(statement.vendor);
              if (categoryTotalAmounts[statement.category]) {
                categoryTotalAmounts[statement.category] += statement.amount;
              } else {
                categoryTotalAmounts[statement.category] = statement.amount;
              }
              if (vendorTotalAmounts[statement.vendor]) {
                vendorTotalAmounts[statement.vendor] += statement.amount;
              } else {
                vendorTotalAmounts[statement.vendor] = statement.amount;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        case 28:
          _context8.next = 14;
          break;
        case 30:
          _context8.next = 35;
          break;
        case 32:
          _context8.prev = 32;
          _context8.t0 = _context8["catch"](12);
          _iterator5.e(_context8.t0);
        case 35:
          _context8.prev = 35;
          _iterator5.f();
          return _context8.finish(35);
        case 38:
          formattedCategoryData = Array.from(uniqueCategories).map(function (category) {
            return {
              label: category,
              data: categoryTotalAmounts[category] || 0
            };
          });
          formattedVendorData = Array.from(uniqueVendors).map(function (vendor) {
            return {
              label: vendor,
              data: vendorTotalAmounts[vendor] || 0
            };
          });
          smartStatementData = {
            categories: formattedCategoryData,
            vendors: formattedVendorData
          };
          res.status(200).json({
            success: true,
            data: smartStatementData
          });
          _context8.next = 47;
          break;
        case 44:
          _context8.prev = 44;
          _context8.t1 = _context8["catch"](0);
          next(_context8.t1);
        case 47:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 44], [12, 32, 35, 38]]);
  }));
  return function (_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}());
exports.getSmartStatementYearMonth = bigPromise( /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res, next) {
    var _req$params3, year, month, startingDate, endingDate, profile, profileCards, uniqueCategories, uniqueVendors, categoryTotalAmounts, vendorTotalAmounts, _iterator7, _step7, profileCard, card, statements, _iterator8, _step8, statement, formattedCategoryData, formattedVendorData, smartStatementData;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$params3 = req.params, year = _req$params3.year, month = _req$params3.month;
          startingDate = new Date(year, month - 1, 1);
          endingDate = new Date(year, month, 0);
          _context9.next = 6;
          return Profile.findOne({
            userId: req.user._id
          });
        case 6:
          profile = _context9.sent;
          _context9.next = 9;
          return ProfileCard.find({
            profileId: profile._id
          });
        case 9:
          profileCards = _context9.sent;
          uniqueCategories = new Set();
          uniqueVendors = new Set();
          categoryTotalAmounts = {};
          vendorTotalAmounts = {};
          _iterator7 = _createForOfIteratorHelper(profileCards);
          _context9.prev = 15;
          _iterator7.s();
        case 17:
          if ((_step7 = _iterator7.n()).done) {
            _context9.next = 33;
            break;
          }
          profileCard = _step7.value;
          _context9.next = 21;
          return Card.findById(profileCard.cardId);
        case 21:
          card = _context9.sent;
          if (!(req.params.cardNumber === card.cardNumber)) {
            _context9.next = 31;
            break;
          }
          _context9.next = 25;
          return Transaction.find({
            cardId: card._id,
            transactionDateTime: {
              $gte: startingDate,
              $lte: endingDate
            }
          });
        case 25:
          statements = _context9.sent;
          if (!(statements.length === 0)) {
            _context9.next = 29;
            break;
          }
          res.statusCode = 404;
          throw new Error("No transactions found for the specified period");
        case 29:
          _iterator8 = _createForOfIteratorHelper(statements);
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              statement = _step8.value;
              uniqueCategories.add(statement.category);
              uniqueVendors.add(statement.vendor);
              if (categoryTotalAmounts[statement.category]) {
                categoryTotalAmounts[statement.category] += statement.amount;
              } else {
                categoryTotalAmounts[statement.category] = statement.amount;
              }
              if (vendorTotalAmounts[statement.vendor]) {
                vendorTotalAmounts[statement.vendor] += statement.amount;
              } else {
                vendorTotalAmounts[statement.vendor] = statement.amount;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        case 31:
          _context9.next = 17;
          break;
        case 33:
          _context9.next = 38;
          break;
        case 35:
          _context9.prev = 35;
          _context9.t0 = _context9["catch"](15);
          _iterator7.e(_context9.t0);
        case 38:
          _context9.prev = 38;
          _iterator7.f();
          return _context9.finish(38);
        case 41:
          formattedCategoryData = Array.from(uniqueCategories).map(function (category) {
            return {
              label: category,
              data: categoryTotalAmounts[category] || 0
            };
          });
          formattedVendorData = Array.from(uniqueVendors).map(function (vendor) {
            return {
              label: vendor,
              data: vendorTotalAmounts[vendor] || 0
            };
          });
          smartStatementData = {
            categories: formattedCategoryData,
            vendors: formattedVendorData
          };
          res.status(200).json({
            success: true,
            data: smartStatementData
          });
          _context9.next = 50;
          break;
        case 47:
          _context9.prev = 47;
          _context9.t1 = _context9["catch"](0);
          next(_context9.t1);
        case 50:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 47], [15, 35, 38, 41]]);
  }));
  return function (_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}());