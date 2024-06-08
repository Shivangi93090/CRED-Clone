"use strict";

var mongoose = require("mongoose");
var profileCardSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
    required: true
  },
  cardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Card",
    required: true
  }
});
module.exports = mongoose.model("ProfileCard", profileCardSchema);