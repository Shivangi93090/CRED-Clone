const mongoose = require("mongoose");
const bigPromise = require("../middleware/bigPromise");
const Card = require("../model/card");
const Profile = require("../model/profile");
const ProfileCard = require("../model/profileCard");
const Transaction = require("../model/transaction");
const CustomError = require("../utils/customError");

const daysInMonth = (month, year) => {
  const temp = new Date(year, month + 1, 0);
  return parseInt(temp.getDate());
};

exports.addCard = bigPromise(async (req, res, next) => {
  try {
    await Card.validate(req.body);

    const {
      authCode,
      cardOwnerName,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
    } = req.body;

    const existingCard = await Card.findOne({ cardNumber });

    if (authCode === undefined) {
      if (existingCard) {
        const profileCard = await ProfileCard.findOne({
          cardId: existingCard._id,
        });
        const profile = await Profile.findOne({
          _id: profileCard.profileId,
        });

        if (req.user._id.equals(profile.userId)) {
          res.statusCode = 409;
          throw new Error("Card is Already Added");
        } else {
          res.statusCode = 422;
          throw new Error("You're are not authorised to add this card");
        }
      } else {
        const profileAssociated = await Profile.findOne({
          userId: req.user._id,
        });

        const card = await Card.create({
          cardOwnerName: cardOwnerName.toUpperCase(),
          cardNumber,
          expiryMonth,
          expiryYear,
          cvv,
        });

        await ProfileCard.create({
          profileId: profileAssociated._id,
          cardId: card._id,
        });

        res.status(200).json({
          success: true,
          card,
        });
      }
    } else {
      if (existingCard) {
        const profileCard = await ProfileCard.findOne({
          cardId: existingCard._id,
        });
        const profile = await Profile.findOne({
          _id: profileCard.profileId,
        });
        if (req.user._id.equals(profile.userId)) {
          res.statusCode = 409;
          throw new Error("Card is Already Added");
        } else {
          if (authCode === profile.authCode) {
            if (
              existingCard.cardOwnerName === cardOwnerName.toUpperCase() &&
              existingCard.expiryMonth === expiryMonth &&
              existingCard.expiryYear === expiryYear &&
              existingCard.cvv === cvv
            ) {
              const currrentProfile = await Profile.findOne({
                userId: req.user._id,
              });

              await ProfileCard.create({
                profileId: currrentProfile._id,
                cardId: existingCard._id,
              });

              res.status(200).json({
                success: true,
                existingCard,
              });
            } else {
              res.statusCode = 422;
              throw new Error("Information not Matching!");
            }
          } else {
            res.statusCode = 422;
            throw new Error("Wrong Auth Code");
          }
        }
      } else {
        res.statusCode = 422;
        throw new Error("Wrong Card Details");
      }
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const firstError = Object.values(error.errors)[0];
      res.statusCode = 422;
      next(firstError);
    } else {
      next(error);
    }
  }
});

exports.getAllCards = bigPromise(async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });
    const profileCards = await ProfileCard.find({ profileId: profile._id });
    if (!profileCards || profileCards.length === 0) {
      return res.status(200).json({ success: true, cards: [] });
    }
    const cardIds = profileCards.map((profileCard) => profileCard.cardId);

    const cards = await Card.find({ _id: { $in: cardIds } });
    res.status(200).json({ success: true, cards });
  } catch (error) {
    next(error);
  }
});

exports.getCardById = bigPromise(async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.card_id);

    if (!card) {
      res.statusCode = 404;
      throw new Error("Card not found");
    }

    const profileAssociated = await ProfileCard.find({
      cardId: req.params.card_id,
    }).populate("profileId");

    const associatedUserIds = profileAssociated.map((profile) =>
      profile.profileId.userId.toString()
    );

    if (!associatedUserIds.includes(req.user._id.toString())) {
      res.statusCode = 404;
      throw new Error("You're not authorized to access this card");
    }

    res.status(200).json({ success: true, card });
  } catch (error) {
    next(error);
  }
});

exports.payBill = bigPromise(async (req, res, next) => {
  try {
    const { amount } = req.body;
    const profile = await Profile.findOne({ userId: req.user._id });

    const profileCards = await ProfileCard.find({ profileId: profile._id });

    if (!profileCards || profileCards.length === 0) {
      res.statusCode = 404;
      throw new Error("No cards associated with the user");
    }

    for (const profileCard of profileCards) {
      const card = await Card.findById(profileCard.cardId);

      if (req.params.cardNumber === card.cardNumber) {
        card.outstandingAmount -= amount;
        await profile.save();
        await card.save();

        const transaction = new Transaction({
          amount,
          vendor: "NA",
          type: "credit",
          category: "NA",
          cardNumber: card.cardNumber,
          transactionDateTime: Date.now(),
          cardId: profileCard.cardId,
          userAssociated: req.user.email,
        });
        await transaction.save();
        return res.status(200).json({ success: true, transaction });
      }
    }
    res.statusCode = 404;
    throw new Error("Requested card not found");
  } catch (error) {
    next(error);
  }
});

exports.getAllStatements = bigPromise(async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });

    const profileCards = await ProfileCard.find({ profileId: profile._id });

    if (!profileCards || profileCards.length === 0) {
      res.statusCode = 404;
      throw new Error("No cards associated with the user");
    }

    let allTransactions = [];

    for (const profileCard of profileCards) {
      const card = await Card.findById(profileCard.cardId);

      if (req.params.cardNumber == card.cardNumber) {
        const transactions = await Transaction.find({ cardId: card._id })
          .select("-cardId -cardNumber")
          .sort({ transactionDateTime: 1 });

        allTransactions = allTransactions.concat(transactions);
      }
    }

    if (allTransactions.length === 0) {
      res.statusCode = 404;
      throw new Error("No transactions found for the provided card number");
    }

    res.status(200).json({ success: true, transactions: allTransactions });
  } catch (error) {
    next(error);
  }
});

exports.getStatementsYearMonth = bigPromise(async (req, res, next) => {
  try {
    const { year, month, cardNumber } = req.params;
    const pageNumber = req.query.pageNumber
      ? parseInt(req.query.pageNumber)
      : 1;
    const perPage = 10;
    const startingDate = new Date(year, month - 1, 1);
    const endingDate = new Date(year, month, 0);

    const profile = await Profile.findOne({ userId: req.user._id });

    const profileCards = await ProfileCard.find({ profileId: profile._id });

    if (!profileCards || profileCards.length === 0) {
      res.statusCode = 404;
      throw new Error("No cards associated with the user");
    }

    const card = await Card.findOne({ cardNumber });

    if (!card) {
      return res.status(404).json({ error: "Card not found" });
    }

    const startIndex = (pageNumber - 1) * perPage;

    const statements = await Transaction.find({
      cardId: card._id,
      transactionDateTime: { $gte: startingDate, $lte: endingDate },
    })
      .select("-cardId -cardNumber")
      .sort({ transactionDateTime: -1 })
      .skip(startIndex)
      .limit(perPage);

    const totalStatements = await Transaction.countDocuments({
      cardId: card._id,
      transactionDateTime: { $gte: startingDate, $lte: endingDate },
    });

    if (statements.length === 0) {
      return res
        .status(404)
        .json({ error: "No transactions found for the provided card" });
    }

    const totalPages = Math.ceil(totalStatements / perPage);

    return res.status(200).json({
      statements,
      pages: totalPages,
      page: pageNumber,
      totalStatements,
    });
  } catch (error) {
    next(error);
  }
});

exports.postStatements = bigPromise(async (req, res, next) => {
  try {
    if (!req.body.statements || req.body.statements.length === 0) {
      res.statusCode = 404;
      throw new Error("Please enter at least one statement");
    }

    const { cardNumber, year, month } = req.params;
    const startingDate = new Date(year, month - 1, 1);

    const cards = await Card.find({});

    for (const card of cards) {
      if (card.cardNumber === cardNumber) {
        for (const statement of req.body.statements) {
          const transaction = new Transaction({
            amount: statement.amount,
            vendor: statement.vendor.toUpperCase(),
            category: statement.category,
            type: statement.type,
            cardNumber: card.cardNumber,
            transactionDateTime: startingDate,
            userAssociated: "NA",
            cardId: card._id,
          });

          card.outstandingAmount += statement.amount;

          await transaction.save();
          await card.save();
        }

        return res
          .status(200)
          .json({ success: true, message: "Statements posted successfully" });
      }
    }

    res.statusCode = 404;
    throw new Error("Requested card not found");
  } catch (error) {
    next(error);
  }
});

exports.getSmartStatementData = bigPromise(async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ userId: req.user._id });

    const profileCards = await ProfileCard.find({ profileId: profile._id });

    const uniqueCategories = new Set();
    const uniqueVendors = new Set();

    const categoryTotalAmounts = {};
    const vendorTotalAmounts = {};

    for (const profileCard of profileCards) {
      const card = await Card.findById(profileCard.cardId);

      if (req.params.cardNumber === card.cardNumber) {
        const statements = await Transaction.find({
          cardId: card._id,
        });

        if (statements.length === 0) {
          res.statusCode = 404;
          throw new Error("No transactions found for the specified period");
        }

        for (const statement of statements) {
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
      }
    }

    const formattedCategoryData = Array.from(uniqueCategories).map(
      (category) => ({
        label: category,
        data: categoryTotalAmounts[category] || 0,
      })
    );

    const formattedVendorData = Array.from(uniqueVendors).map((vendor) => ({
      label: vendor,
      data: vendorTotalAmounts[vendor] || 0,
    }));

    const smartStatementData = {
      categories: formattedCategoryData,
      vendors: formattedVendorData,
    };

    res.status(200).json({ success: true, data: smartStatementData });
  } catch (error) {
    next(error);
  }
});

exports.getSmartStatementYearMonth = bigPromise(async (req, res, next) => {
  try {
    const { year, month } = req.params;
    const startingDate = new Date(year, month - 1, 1);
    const endingDate = new Date(year, month, 0);

    const profile = await Profile.findOne({ userId: req.user._id });

    const profileCards = await ProfileCard.find({ profileId: profile._id });

    const uniqueCategories = new Set();
    const uniqueVendors = new Set();

    const categoryTotalAmounts = {};
    const vendorTotalAmounts = {};

    for (const profileCard of profileCards) {
      const card = await Card.findById(profileCard.cardId);

      if (req.params.cardNumber === card.cardNumber) {
        const statements = await Transaction.find({
          cardId: card._id,
          transactionDateTime: { $gte: startingDate, $lte: endingDate },
        });

        if (statements.length === 0) {
          res.statusCode = 404;
          throw new Error("No transactions found for the specified period");
        }

        for (const statement of statements) {
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
      }
    }

    const formattedCategoryData = Array.from(uniqueCategories).map(
      (category) => ({
        label: category,
        data: categoryTotalAmounts[category] || 0,
      })
    );

    const formattedVendorData = Array.from(uniqueVendors).map((vendor) => ({
      label: vendor,
      data: vendorTotalAmounts[vendor] || 0,
    }));

    const smartStatementData = {
      categories: formattedCategoryData,
      vendors: formattedVendorData,
    };

    res.status(200).json({ success: true, data: smartStatementData });
  } catch (error) {
    next(error);
  }
});
