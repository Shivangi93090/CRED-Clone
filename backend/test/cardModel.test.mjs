// test/cardModel.test.mjs
import mongoose from 'mongoose';
import { expect } from 'chai';
import Card from '../model/card.js'; // Ensure this path is correct

before(async () => {
  await mongoose.connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

after(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe("Card Model Test", () => {
  it("should create a card with valid data", async () => {
    const validCard = new Card({
      cardOwnerName: "John Doe",
      cardNumber: "1234567890123456",
      outstandingAmount: 100.50,
    });

    const savedCard = await validCard.save();
    const hash = await savedCard.createHash(12, 2025, 123);
    savedCard.hashedDetails = hash;
    await savedCard.save();

    expect(savedCard._id).to.exist;
    expect(savedCard.cardOwnerName).to.equal("John Doe");
    expect(savedCard.cardNumber).to.equal("1234567890123456");
    expect(savedCard.outstandingAmount).to.equal(100.50);
    expect(savedCard.hashedDetails).to.exist;
  });

  it("should not create a card without required fields", async () => {
    const invalidCard = new Card({});
    let error;

    try {
      await invalidCard.save();
    } catch (err) {
      error = err;
    }

    expect(error).to.exist;
    expect(error.errors.cardOwnerName).to.exist;
    expect(error.errors.cardNumber).to.exist;
  });

  it("should create and compare card details correctly", async () => {
    const validCard = new Card({
      cardOwnerName: "Jane Doe",
      cardNumber: "6543210987654321",
    });

    const savedCard = await validCard.save();
    const hash = await savedCard.createHash(11, 2024, 456);
    savedCard.hashedDetails = hash;
    await savedCard.save();

    const isMatch = await savedCard.compareCardDetail(11, 2024, 456);
    expect(isMatch).to.be.true;

    const isNotMatch = await savedCard.compareCardDetail(12, 2025, 789);
    expect(isNotMatch).to.be.false;
  });
});