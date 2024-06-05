const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const cardSchema = new mongoose.Schema({
  cardOwnerName: {
    type: String,
    required: [true, "Card owner name is required"],
  },
  cardNumber: {
    type: String,
    required: [true, "Card number is required"],
    unique: true,
  },
  outstandingAmount: {
    type: Number,
    default: 0.0,
  },
  hashedDetails: {
    type: String,
    select: false,
  },
});

cardSchema.methods.createHash = async function (expiryMonth, expiryYear, cvv) {
  console.log(`${expiryMonth}|${expiryYear}|${cvv}`);
  return await bcrypt.hash(`${expiryMonth}|${expiryYear}|${cvv}`, 10);
};

cardSchema.methods.compareCardDetail = async function (
  expiryMonth,
  expiryYear,
  cvv
) {
  const card = await this.model("Card")
    .findById(this._id)
    .select("+hashedDetails");
  console.log(`${expiryMonth}|${expiryYear}|${cvv}`);

  return await bcrypt.compare(
    `${expiryMonth}|${expiryYear}|${cvv}`,
    card.hashedDetails
  );
};

module.exports = mongoose.model("Card", cardSchema);
